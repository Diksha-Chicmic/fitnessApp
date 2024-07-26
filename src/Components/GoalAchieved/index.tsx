import React, {useCallback} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useAppSelector } from '../../Redux/Store';
import CustomButton from '../CustomButton';
import DetailsCard from '../DetailsCard';
import { COLORS, FONT_FAMILY, SIZES } from '../../Constants/commonStyles';
import { ICONS } from '../../Constants/icons';
import { styles } from './style';
import { GoalAchievedProps } from './types';


const GoalAchieved: React.FC<GoalAchievedProps> = ({setModalFalse}) => {
  // redux use
  const {firstName, lastName, photo} = useAppSelector(state => state.User.data);
  const {
    totalSteps,
    nutrition,
    goals:{stepsGoal},
  } = useAppSelector(state => state.Health.data);

  const shareWithFriends=()=>{
    console.log('share with friends');
  }
const handleNotNow=()=>{
    setModalFalse
}

console.log(totalSteps)
console.log('adhkdak',photo);
  return (
    <View style={styles.parent}>
      <TouchableOpacity style={styles.closeCtr} onPress={setModalFalse}>
        {ICONS.CROSS({width: 30, height: 30,color:COLORS.SECONDARY.WHITE})}
      </TouchableOpacity>
      <View style={styles.childCtrTop} />
      <View style={styles.childCtrBottom} />
      <View style={styles.cardCtr}>
        <View style={styles.headingCtr}>
         <Text style={styles.text}>Goal Achieved!</Text>
        <Text style={styles.text}>Share with friends!</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.userInfo}>
            <View style={styles.userInfoCtr}>
              <Image source={{uri:photo}} style={{height:38,width:38, borderRadius:100}}/>
             <Text style={styles.userNameText}>
                {firstName + ' ' + lastName}
              </Text>
            </View>
            {ICONS.Logo({width: 28, height: 28})}
          </View>
          <View style={styles.dataCtr}>
          <View style={styles.container}>
                    <CircularProgress
                        value={totalSteps}
                        inActiveStrokeColor={COLORS.SECONDARY.GREY}
                        maxValue={stepsGoal}
                        progressValueColor={'black'}
                        activeStrokeColor={totalSteps > 0 ? COLORS.PRIMARY.PURPLE : COLORS.SECONDARY.GREY}
                        radius={85}
                       // activeStrokeColor={COLORS.PRIMARY.PURPLE}
                        progressValueStyle={styles.progress}
                    />
                    <View style={styles.iconContainer}>{ICONS.COMMUNITY({ height: 20, width: 20 })}</View>
                    <Text style={styles.textContainer}>steps today</Text>
                </View>
            <DetailsCard calNum={nutrition} calText='Cal Burned' goalNum={totalSteps} goalText='Daily Goal' textStyles={styles.detailsText}/>
          </View>
        </View>
        </View>
        <CustomButton
          title="Share to friend"
          parentStyle={styles.but}
          onPress={shareWithFriends}
        />
      <TouchableOpacity onPress={handleNotNow}>
        <Text style={styles.text2}>Not Now</Text>
      </TouchableOpacity>

    </View>
  );
};

export default GoalAchieved;


