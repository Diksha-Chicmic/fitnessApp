import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomModal from '../CustomModal'; // Adjust the import path accordingly
import { styles } from './style';
type MealType = 'breakfast' | 'lunch' | 'dinner';

const dummyData: Array<{ title: string, data: Array<{ productTitle: string, caloriesConsumed: number, initialQuantity: number, status: string }> }> = [
  {
    title: "Breakfast",
    data: [
      { productTitle: "Eggs", caloriesConsumed: 300, initialQuantity: 200, status: '200 grams' },
      { productTitle: "Milk", caloriesConsumed: 100, initialQuantity: 300, status: '300 litres' },
    ],
  },
  {
    title: "Lunch",
    data: [
      { productTitle: "Chicken", caloriesConsumed: 200, initialQuantity: 50, status: '200 grams' },
      { productTitle: "Rice", caloriesConsumed: 200, initialQuantity: 120, status: '100 grams' },
      { productTitle: "Chicken Tikka", caloriesConsumed: 200, initialQuantity: 150, status: '150 grams' },
    ],
  },
  {
    title: "Dinner",
    data: [
      { productTitle: "Banana", caloriesConsumed: 100, initialQuantity: 80, status: '150 grams' },
      { productTitle: "Apple", caloriesConsumed: 100, initialQuantity: 120, status: '300 grams' },
    ],
  },
];

const DietDataList: React.FC = () => {

  return (
    <View style={styles.container}>
      {dummyData.map((meal, index) => (
        <View key={index}>
          <CustomModal
            title={meal.title}
            items={meal.data.map(item => item.productTitle)}
            quant={meal.data.map(item => item.initialQuantity)}
            status={meal.data.map(item => item.status)}
          />
        </View>
      ))}
    </View>
  );
};



export default DietDataList;
