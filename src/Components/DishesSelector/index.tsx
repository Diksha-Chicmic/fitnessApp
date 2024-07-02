import React, {useState} from 'react';
import {View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS } from '../../Constants/commonStyles';
import {styles} from './style';
export type MealsSelected = {
    mealTime: {
      snack: boolean;
      breakfast: boolean;
      lunch: boolean;
      dinner: boolean;
    };
  };
export interface DishSelectorProps{
    title:string,
    mealTime: MealsSelected['mealTime'];

}
const DishSelector: React.FC<DishSelectorProps> = ({title, mealTime}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnPress = () => {
    switch (title) {
      case 'Breakfast':
        mealTime.breakfast = !isChecked;
        break;
      case 'Snack':
        mealTime.snack = !isChecked;
        break;
      case 'Lunch':
        mealTime.lunch = !isChecked;
        break;
      case 'Dinner':
        mealTime.dinner = !isChecked;
        break;
      default:
        console.log('edae');
    }
    setIsChecked(!isChecked);
  };
  return (
    <View style={styles.parent}>
      <BouncyCheckbox
        size={25}
        fillColor={COLORS.PRIMARY.PURPLE}
        unFillColor={COLORS.PRIMARY.GREY}
        innerIconStyle={{borderColor: COLORS.PRIMARY.GREY}}
        onPress={handleOnPress}
        isChecked={isChecked}
        disableText
      />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default DishSelector;