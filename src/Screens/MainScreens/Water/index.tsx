import React, { useState, useMemo, useEffect } from "react";
import { SafeAreaView, Text, View, TouchableOpacity} from "react-native";
import PerformanceDetails from "../../../Components/CustomPerformance ";
import CustomGlass from "../../../Components/CustomGlass";
import DetailsCard from "../../../Components/DetailsCard";
import { STRINGS } from "../../../Constants/strings";
import { useAppDispatch, useAppSelector } from "../../../Redux/Store";
import { updateHealthData, resetHealthData } from "../../../Redux/Reducers/userHealth";
import { styles } from "./style";
import { Timestamp } from "@react-native-firebase/firestore";
import { date, checkWeek, getPercentage, weekday } from "../../../utils/common";
import { getHealthData } from "../../../utils/userhandle";
import { ICONS } from "../../../Constants/icons";
const Water: React.FC = () => {
    const [rating, setRating] = useState<{
        best: { value: number; week: string };
        worst: { value: number; week: string };
    }>();
    
    const { id, healthData } = useAppSelector(state => state.User.data);
    console.log(healthData, 'health data')
    const { dailyGlass, goals: { totalGlasses }, currentTime } = useAppSelector((state) => state.Health.data)
    console.log(dailyGlass)
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const today = date.today();
        getHealthData(id!)
            .then(healthData => {
                if (healthData) {
                    console.log(healthData)
                    const filteredData = healthData.filter(val =>
                        checkWeek(Timestamp.fromMillis(val.currentDate.seconds * 1000).toDate(), today,),
                    );
                    const bestWaterIntakeDay = filteredData.reduce(
                        (acc, val) => {
                            const currentDate = Timestamp.fromMillis(val.currentDate.seconds * 1000,).toDate();
                            if (Math.ceil(getPercentage(val.dailyGlass, val.goals.totalGlasses) / 10,) >= acc.value) {
                                return {
                                    value: Math.ceil(getPercentage(val.dailyGlass, val.goals.totalGlasses) / 10,),
                                    week: weekday[currentDate.getDay()],
                                };
                            }
                            return acc;
                        }, { value: 0, week: '' },
                    );
                    const worstWaterIntakeDay = filteredData.reduce(
                        (acc, val) => {
                            const currentDate = Timestamp.fromMillis(val.currentDate.seconds * 1000,).toDate();
                            console.log(weekday[currentDate.getDay()], currentDate);
                            if (Math.ceil(getPercentage(val.dailyGlass, val.goals.totalGlasses) / 10,) <= acc.value) {
                                return {
                                    value: Math.ceil( getPercentage(val.dailyGlass, val.goals.totalGlasses) / 10,),
                                    week: weekday[currentDate.getDay()],
                                };
                            }
                            return acc;
                        }, { value: 0, week: '', },
                    );
                    setRating({ best: bestWaterIntakeDay, worst: worstWaterIntakeDay });
                }
            })
            .catch(e =>
                console.log('error encounterd in getting user health info', e),
            );
    }, [id]);

    const glassess = useMemo(() =>
          Array(totalGlasses)
            .fill(true, 0, dailyGlass + 1)
            .fill(false, dailyGlass),
        [totalGlasses,dailyGlass],
      );
    
      const handleGlassFilled= () => {
        dispatch(updateHealthData({dailyGlass:dailyGlass + 1}));
      };
      const handleGlassEmpty = () => {
        dispatch(updateHealthData({dailyGlass:dailyGlass - 1}));
      };

    return (
        <SafeAreaView style={styles.parent}>
            <Text style={styles.heading}>{STRINGS.WATER.HEADING} <Text style={styles.text}>{dailyGlass} glass{dailyGlass !== 1 ? "es" : ""}</Text>{STRINGS.WATER.TEXT}</Text>
            <View style={styles.glassContainer}>
            {glassess.map((val, i) => {
          return (
            <CustomGlass
              isFilled={val}
              handleFilled={handleGlassFilled}
              handleEmpty={handleGlassEmpty}
              key={i}
            />
          );
        })}
            </View>
     
    
            <DetailsCard calNum="250 ml" calText="water drank" goalNum={totalGlasses} text='glassses' goalText="Daily goal" />
            {totalGlasses > dailyGlass ? <View style={styles.warning}>
                <Text style={styles.warningText}>{STRINGS.WATER.WARNTXT}</Text></View> : null}

            {rating === undefined || rating?.best.value === -Infinity ? null : (
            <PerformanceDetails
                icon={ICONS.YELLOWSMILE({ height: 20, width: 20, color: 'orange' })}
                title="Best Performance"
                text={rating?.best.week ?? 'No Data'}
                quant={rating?.best.value ?? 0}
                border={true}
            />
            )}
            {rating === undefined || rating?.worst.value === Infinity ? null : (
            <PerformanceDetails
                icon={ICONS.REDSMILE({ height: 20, width: 20 })}
                title="Worst Performance"
                text={rating?.worst.week ?? 'No data'}
                quant={rating?.worst.value ?? 0}
            />
            )}

        </SafeAreaView>
    );
};



export default Water;



