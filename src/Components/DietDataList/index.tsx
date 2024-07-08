import React from 'react';
import {View,StyleSheet} from 'react-native';

// custom
import DietDataItem from '../DietDataItem';
import { useAppSelector } from '../../Redux/Store';
export type DummyData = {
    title: string;
    data: Array<{
      productTitle: string;
      initialQuantity: string | number;
      caloriesConsumed: number;
    }>;
  };
const DietDataList: React.FC = () => {
  // redux use
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

  export const styles = StyleSheet.create({
    parent: {
      flex: 1,
    },
  });
  
export default DietDataList;