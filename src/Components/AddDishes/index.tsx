import React, {useRef} from 'react';
import {TouchableOpacity, View, ScrollView, Alert, Text, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton';
import { ICONS } from '../../Constants/icons';
import DishSelector from '../DishesSelector';
import {
  DailyMeals,
  Meal,
  updateAllMealData,
} from '../../Redux/Reducers/dishes'
 import {useAppDispatch} from '../../Redux/Store'
import ItemSelector from '../DishItemsSelector ';
import foodData from '../../Constants/foodData';
import { COLORS, SIZES } from '../../Constants/commonStyles';
import { MealsSelected, ChoosedishesProps} from './types';

const size = {
  width: 40,
  height: 40,
  
};

const ChooseFood:React.FC<ChoosedishesProps> = ({setModalFalse}) => {
  const dispatch = useAppDispatch();
  const mealsSelected = useRef<MealsSelected>({
    mealTime: {
      snack: false,
      breakfast: false,
      dinner: false,
      lunch: false,
    },
    foodData: [],
  });

  const handleSubmit = () => {
    const dtArray: any = {
      breakfast: [],
      dinner: [],
      lunch: [],
      snack: [],
    };
    let count = 0;
    if (mealsSelected.current.mealTime.breakfast === true) {
      dtArray.breakfast = mealsSelected.current.foodData;
      console.log(mealsSelected.current.mealTime.breakfast);
      console.log(dtArray.breakfast)
      ++count;
    }
    if (mealsSelected.current.mealTime.snack === true) {
      dtArray.snack = mealsSelected.current.foodData;
      ++count;
    }
    if (mealsSelected.current.mealTime.lunch === true) {
      dtArray.lunch = mealsSelected.current.foodData;
      ++count;
    }
    if (mealsSelected.current.mealTime.dinner === true) {
      dtArray.dinner = mealsSelected.current.foodData;
      ++count;
    }
    if (count === 0) {
      Alert.alert(
        'Error',
        'Please select the mealtime you consumed your food on.',
      );
    
      return;
    }
    console.log(count, 'count is')
      console.log('dt array', dtArray);
      console.log('breakfast array', dtArray.breakfast)
    dispatch(updateAllMealData(dtArray));
    setModalFalse();
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.iconCtn}>{ICONS.PLATE(size)}</View>
            <Text style={styles.heading}>Choose Food</Text>
            <Text style={styles.text}>Select your meal and your foods that you consume today</Text>
          <View style={styles.direction}>
            <DishSelector
              title="Breakfast"
              mealTime={mealsSelected.current.mealTime}
            />
            <DishSelector
              title="Lunch"
              mealTime={mealsSelected.current.mealTime}
            />
            <DishSelector
              title="Snack"
              mealTime={mealsSelected.current.mealTime}
            />
            <DishSelector
              title="Dinner"
              mealTime={mealsSelected.current.mealTime}
            />
          </View>
          <View >
            {foodData.map((item: any, index: React.Key | null | undefined) => (
              <ItemSelector
                foodItem={item}
                foodData={mealsSelected.current.foodData}
                key={index}
              />
            ))}
          </View>
        </TouchableOpacity>
        <CustomButton
          title="Add"
          onPress={handleSubmit}
          //parentStyle={styles.customButtonParent}
        />
      </ScrollView>
    </View>
  );
};
 

const styles= StyleSheet.create({
    iconCtn:{
        alignItems:'center',
        marginVertical:'5%',
        
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'3%'
    },
    heading:{
        textAlign:'center',
        fontSize:SIZES.font18,
        fontWeight:'500'

    },
    text:{
        textAlign:'center',
        marginHorizontal:'10%',
        fontSize:SIZES.font14,
        color:COLORS.SECONDARY.GREY
    },
    direction:{
         flexDirection:'row',
         justifyContent:'space-between',
         marginVertical:'5%',
         marginHorizontal:'2%'
    }
})

export default ChooseFood;