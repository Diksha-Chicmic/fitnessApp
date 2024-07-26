import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, ScrollView, Platform,SafeAreaView} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { LineChart, } from "react-native-gifted-charts";
import AppleHealthKit, { HealthKitPermissions } from 'react-native-health'
import GoogleFit, { Scopes } from 'react-native-google-fit'
import { Dimensions } from "react-native";
import { COLORS } from "../../../Constants/commonStyles";
import { useAppSelector } from "../../../Redux/Store";
import DetailsCard from "../../../Components/DetailsCard";
import { STRINGS } from "../../../Constants/strings";
import { date, checkWeek, getPercentage, weekday, getLastWeekDayDate } from "../../../utils/common";
import { getHealthData } from "../../../utils/userhandle";
import { ICONS } from "../../../Constants/icons";
import { styles } from "./style";
import { Timestamp } from "@react-native-firebase/firestore";
import { updateHealthData } from '../../../Redux/Reducers/userHealth';
import PerformanceDetails from "../../../Components/CustomPerformance ";
import { useAppDispatch } from '../../../Redux/Store';
import { PERMISSIONS, check, request } from "react-native-permissions";
const screenWidth = Dimensions.get("window").width;

const options = {
  scopes: [Scopes.FITNESS_ACTIVITY_READ, Scopes.FITNESS_ACTIVITY_WRITE],
};

const Steps: React.FC = () => {

  const [lineData, setLineData] = useState<Array<{value: number}>>([]);
  const [rating, setRating] = useState<{
    best: {value: number; week: string};
    worst: {value: number; week: string};
  }>();

const { totalSteps, nutrition, goals: { stepsGoal, totalNutrition }, hasPremission} = useAppSelector((state) => state.Health.data);
  const {id} = useAppSelector(state => state.User.data);
  const dispatch = useAppDispatch();

  // const stepsCompletionPercentage = Math.ceil(
  //   getPercentage(totalSteps, stepsGoal),
  // );
  // const pieData = [
  //   {value: stepsCompletionPercentage, color: COLORS.PRIMARY.PURPLE},
  //   {value: 100 - stepsCompletionPercentage, color: COLORS.SECONDARY.WHITE},
  // ];

  useEffect(() => {
    getHealthData(id!)
      .then(healthData => {
        console.log('skewe');
        const today = date.today();
        if (healthData) {
          const filteredData = healthData.filter(val =>
            checkWeek(
              Timestamp.fromMillis(val.currentDate.seconds * 1000).toDate(),
              today,
            ),
          );
          console.log('fffff',filteredData)
          const bestStepsDay = filteredData.reduce(
            (acc, val) => {
              if (
                Math.ceil(
                  getPercentage(val.totalSteps, val.goals.stepsGoal) / 10,
                ) >= acc.value
              ) {
                return {
                  value: Math.ceil(
                    getPercentage(val.totalSteps, val.goals.stepsGoal) / 10,
                  ),
                  week: weekday[
                    Timestamp.fromMillis(val.currentDate.seconds * 1000)
                      .toDate()
                      .getDay()
                  ],
                };
              }
              return acc;
            },
            {value: -Infinity, week: ''},
          );
          const worstStepsDay = filteredData.reduce(
            (acc, val) => {
              if (
                Math.ceil(
                  getPercentage(val.totalSteps, val.goals.stepsGoal) / 10,
                ) <= acc.value
              ) {
                return {
                  value: Math.ceil(
                    getPercentage(val.totalSteps, val.goals.stepsGoal) / 10,
                  ),
                  week: weekday[
                    Timestamp.fromMillis(val.currentDate.seconds * 1000)
                      .toDate()
                      .getDay()
                  ],
                };
              }
              return acc;
            },
            {
              value: +Infinity,
              week: '',
            },
          );
          setRating({best: bestStepsDay, worst: worstStepsDay});
        }
      })
      .catch(e =>
        console.log(
          'error encountered fetching health data in daily steps - ',
          e,
        ),
      );
  }, [id]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      AppleHealthKit.getDailyStepCountSamples(
        {
          startDate: new Date(
            date.today().getFullYear(),
            date.today().getMonth(),
            date.today().getDate() - 6,
          ).toISOString(),
        },
        (error, result) => {
          if (!error) {
            console.log('res is', result);

            setLineData(
              result.map(val => {
                console.log('val');
                return {
                  value: getPercentage(val.value, stepsGoal),
                };
              }),
            );
            return;
          }
          console.log('error - ', error);
        },
      );
    } else {
      const androidHealthSetup = async () => {
        console.log('android setup start');
        try {
          const authority = await check(
            PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION,
          );
          if (authority === 'denied') {
            await request(PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION);
          }
          if (!GoogleFit.isAuthorized) {
            await GoogleFit.authorize(options);
            dispatch(updateHealthData({hasPremission: true}));
          }
          
          const opt = {
            startDate: getLastWeekDayDate(new Date()).toISOString(), // required ISO8601Timestamp
           //startDate: startDate.toISOString(), 
            endDate: new Date().toISOString(), // required ISO8601Timestamp
          };

          const stepRes = await GoogleFit.getDailyStepCountSamples(opt);
          const stepData = stepRes.filter(val =>
            val.source.includes('estimated_steps'),
          )[0];
          setLineData(
            stepData.steps.map(val => ({
              value: getPercentage(val.value, stepsGoal),
            })),
          );
          console.log(
            'steps data in android ',
            stepRes.filter(val => val.source.includes('estimated_steps'))[0]
              .steps,
          );
          const bestStepsDay = stepData.steps.reduce(
            (acc, val) => {
              if (
                Math.ceil(getPercentage(val.value, stepsGoal) / 10) >=
                acc.value
              ) {
                return {
                  value: Math.ceil(getPercentage(val.value, stepsGoal) / 10),
                  week: weekday[new Date(val.date).getDay()],
                };
              }
              return acc;
            },
            {value: -Infinity, week: ''},
          );
          const worstStepsDay = stepData.steps.reduce(
            (acc, val) => {
              if (
                Math.ceil(getPercentage(val.value, stepsGoal) / 10) <=
                acc.value
              ) {
                return {
                  value: Math.ceil(getPercentage(val.value, stepsGoal) / 10),
                  week: weekday[new Date(val.date).getDay()],
                };
              }
              return acc;
            },
            {value: +Infinity, week: ''},
          );

          setRating({
            best: bestStepsDay,
            worst: worstStepsDay,
          });
        } catch (e) {
          console.log('Error encountered - ', e);
        }
      };
      if (hasPremission) {
        androidHealthSetup();
      }
    }
  }, [dispatch, totalSteps, hasPremission]);

console.log('erwreewer',rating);

  return (
<SafeAreaView style={styles.parent}>
    <ScrollView >
      <Text style={styles.heading} >{STRINGS.STEPS.HEADING}<Text style={styles.insideTxt}> {totalSteps}</Text> {STRINGS.STEPS.TEXT} </Text>
                <View style={styles.container}>
                    <CircularProgress
                        value={totalSteps}
                        inActiveStrokeColor={COLORS.SECONDARY.WHITE}
                        progressValueColor={'black'}
                        valueSuffix={'%'}
                        radius={70}
                        activeStrokeColor={COLORS.PRIMARY.PURPLE}
                        progressValueStyle={styles.progress}
                    />
                    <View style={styles.iconContainer}>{ICONS.COMMUNITY({ height: 20, width: 20 })}</View>
                    <Text style={styles.textContainer}>{STRINGS.STEPS.PROGESSTXT}</Text>
                </View>
      <DetailsCard calNum={nutrition} calText="Cal Burned" goalNum={stepsGoal} goalText="daily goal" />
      {hasPremission && lineData && lineData.some(val => val) ? (
        <View style={styles.lineChartCtr}>
          <Text style={styles.lineChartHeadingText}>Statistics</Text>
          {lineData ? (
        
               <LineChart
               isAnimated
               adjustToWidth
               curved
               initialSpacing={0}
               data={lineData}
               hideOrigin
               areaChart
               startFillColor="#F8B631"
               endFillColor1="#FBDA95"
               hideDataPoints
               hideRules
               thickness={4}
               yAxisTextStyle={{color: COLORS.SECONDARY.GREY}}
               yAxisColor="#ffff"
               xAxisColor="#ffff"
               color="#F7A608"
               disableScroll
               onlyPositive
             />
                    
                      ) : null}
        </View>
      ) : (
       <Text style={{textAlign:'center'}}>NO DATA</Text>
      )}
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
    </ScrollView>
</SafeAreaView>
  );
};

export default Steps