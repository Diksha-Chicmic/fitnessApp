import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { COLORS,SIZES } from '../../Constants/commonStyles';
import { ICONS } from '../../Constants/icons';
import { useAppSelector,useAppDispatch } from '../../Redux/Store';
import { Meal,resetMealDataItems } from '../../Redux/Reducers/dishes';
import { styles } from './style';
import { DietDataItemProps } from './types';
const DietDataItem = ({item, timeOfMeal}: DietDataItemProps) => {
  // redux use
  const dispatch = useAppDispatch();

  // functions
  const handleClose = () => {
    switch (timeOfMeal) {
      case 'Breakfast':
        dispatch(resetMealDataItems({breakfast: []}));
        break;
      case 'Snack':
        dispatch(resetMealDataItems({snack: []}));
        break;
      case 'Lunch':
        dispatch(resetMealDataItems({lunch: []}));
        break;
      case 'Dinner':
        dispatch(resetMealDataItems({dinner: []}));
        break;
    }
  };
  if (item.length === 0) {
    return null;
  }

  return (
    <View style={styles.conatiner}>
      <Text style={styles.heading}>{timeOfMeal}</Text>
      {Object.values(
        item.reduce(
          (acc: {[key in string]: {freq: number; data: Meal}}, curr) => {
            if (acc?.[curr.name]) {
              acc[curr.name] = {freq: acc[curr.name].freq + 1, data: curr};
            } else {
              acc[curr.name] = {freq: 1, data: curr};
            }
            return acc;
          },
          {},
        ),
      ).map((val, index, arr) => {
        return (
          <View
            style={[ styles.box,index !== 0 && index !== arr.length ? styles.borderStyle : null,]}
            key={index}>
            <View style={styles.div}>
              <Text style={styles.title}>
                {val.data.name}
                <Text
                  style={{
                    color: COLORS.SECONDARY.GREY,
                    fontSize: SIZES.font11,
                  //  fontFamily: FONT_FAMILY.REGULAR,
                  }}>
                  {val.freq > 1 ? ' x ' + val.freq : ''}
                </Text>
              </Text>
              <Text style={styles.quant}>
                {val.data.serving_size_g} grams
              </Text>
            </View>
            <View>
              <Text style={styles.caloriesText}>
                {val.data.calories * val.freq}
              </Text>
            </View>
          </View>
        );
      })}
      <TouchableOpacity style={styles.close} onPress={handleClose}>
        <View>{ICONS.CROSS({width: 35, height: 35, color:COLORS.SECONDARY.GREY})}</View>
      </TouchableOpacity>
    </View>
  );
};



export default DietDataItem;