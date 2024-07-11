import React from 'react';
import {View,StyleSheet} from 'react-native';
import DietDataItem from '../DietDataItem';
import { useAppSelector } from '../../Redux/Store';
const DietDataList: React.FC = () => {

  const {data: dailyMeals} = useAppSelector(state => state.Dishes);

  return (
    <View>
      <DietDataItem item={dailyMeals.breakfast} timeOfMeal="Breakfast" />
      <DietDataItem item={dailyMeals.snack} timeOfMeal="Snack" />
      <DietDataItem item={dailyMeals.lunch} timeOfMeal="Lunch" />
      <DietDataItem item={dailyMeals.dinner} timeOfMeal="Dinner" />
    </View>
  );
};

 
export default DietDataList;