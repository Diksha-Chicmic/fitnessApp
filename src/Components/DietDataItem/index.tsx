import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import { useRealm } from '@realm/react';
import { useNetInfo } from '@react-native-community/netinfo';
import { COLORS,SIZES } from '../../Constants/commonStyles';
import { ICONS } from '../../Constants/icons';
import { useAppSelector,useAppDispatch } from '../../Redux/Store';
import { Meal,resetMealDataItems } from '../../Redux/Reducers/dishes';
import { styles } from './style';
import { DietDataItemProps } from './types';
import { MealsDb } from '../../DbModels /meals';
import { UpdateMode } from 'realm';
import { storeMealData } from '../../utils/userhandle';
const DietDataItem = ({item, timeOfMeal}: DietDataItemProps) => {
  // redux use
  const {id}= useAppSelector(state=>state.User.data);
  const {data:mealsData}= useAppSelector(state=>state.Dishes);
  const dispatch = useAppDispatch();
  
  const netInfo= useNetInfo();
  const realm= useRealm();
  // functions
  const handleClose = () => {
    switch (timeOfMeal) {
      case 'Breakfast':
        if(netInfo.isConnected){
          storeMealData(id!,{...mealsData,breakfast:[]});
        }else{
          realm.write(()=>{
            realm.create(
              MealsDb,
              {...mealsData,breakfast:[],id:id!},
              UpdateMode.Modified,
            )
          })
        }
        dispatch(resetMealDataItems({...mealsData,breakfast: []}));
        break;
      case 'Snack':
        if (netInfo.isConnected) {
          storeMealData(id!, {...mealsData, snack: []});
        } else {
          realm.write(() => {
            realm.create(
              MealsDb,
              {...mealsData, snack: [], id: id!},
              UpdateMode.Modified,
            );
          });
        }
        dispatch(resetMealDataItems({...mealsData,snack: []}));
        break;
      case 'Lunch':
        if (netInfo.isConnected) {
          storeMealData(id!, {...mealsData, lunch: []});
        } else {
          realm.write(() => {
            realm.create(
              MealsDb,
              {...mealsData, lunch: [], id: id!},
              UpdateMode.Modified,
              );
            });
          }
          dispatch(resetMealDataItems({...mealsData,lunch: []}));
          break;
        case 'Dinner':
          if (netInfo.isConnected) {
            storeMealData(id!, {...mealsData, dinner: []});
          } else {
            realm.write(() => {
              realm.create(
                MealsDb,
                {...mealsData, dinner: [], id: id!},
                UpdateMode.Modified,
              );
            });
          }
          dispatch(resetMealDataItems({...mealsData,dinner: []}));
          break;
      }
    };
    if (item.length === 0) {
      return null;
    }
  const rightSwipeCtions=(name:string)=>{

    return(
      <TouchableOpacity  style={{
        backgroundColor: COLORS.SECONDARY.RED,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
       //width: '100%',
       width:100,
        //marginHorizontal: 4,
        marginVertical: 8,
      }}
      onPress={()=>{
        console.log('delete button');
        switch(timeOfMeal){
          case 'Breakfast':
            if(netInfo.isConnected){
              storeMealData(id!,{
                ...mealsData,
                breakfast: item.filter(val => val.name !== name),
              })
            }else{
              realm.write(()=>{
                realm.create(
                  MealsDb,
                  {
                    ...mealsData,
                        breakfast: item.filter(val => val.name !== name),
                        id: id!,
                  },
                  UpdateMode.Modified,
                )
              })
            }
            dispatch(
              resetMealDataItems({
                ...mealsData,
                breakfast:item.filter(val=>val.name !== name),
              })
            )
            break;
            case 'Snack':
              if(netInfo.isConnected){
                storeMealData(id!,{
                  ...mealsData,
                  snack: item.filter(val => val.name !== name),
                })
              }else{
                realm.write(()=>{
                  realm.create(
                    MealsDb,
                    {
                      ...mealsData,
                          snack: item.filter(val => val.name !== name),
                          id: id!,
                    },
                    UpdateMode.Modified,
                  )
                })
              }
              dispatch(
                resetMealDataItems({
                  ...mealsData,
                  snack:item.filter(val=>val.name !== name),
                })
              )
              break;
              case 'Lunch':
            if(netInfo.isConnected){
              storeMealData(id!,{
                ...mealsData,
                 lunch: item.filter(val => val.name !== name),
              })
            }else{
              realm.write(()=>{
                realm.create(
                  MealsDb,
                  {
                    ...mealsData,
                        lunch: item.filter(val => val.name !== name),
                        id: id!,
                  },
                  UpdateMode.Modified,
                )
              })
            }
            dispatch(
              resetMealDataItems({
                ...mealsData,
                lunch:item.filter(val=>val.name !== name),
              })
            )
            break;
            case 'Dinner':
              if(netInfo.isConnected){
                storeMealData(id!,{
                  ...mealsData,
                  dinner: item.filter(val => val.name !== name),
                })
              }else{
                realm.write(()=>{
                  realm.create(
                    MealsDb,
                    {
                      ...mealsData,
                          dinner: item.filter(val => val.name !== name),
                          id: id!,
                    },
                    UpdateMode.Modified,
                  )
                })
              }
              dispatch(
                resetMealDataItems({
                  ...mealsData,
                  dinner:item.filter(val=>val.name !== name),
                })
              )
              break;
      }
    }}>
      <Text>Delete</Text>

    </TouchableOpacity>
  )
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
          <Swipeable
          renderRightActions ={()=>rightSwipeCtions(val.data.name)}>
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
          </Swipeable>
        );
      })}
      <TouchableOpacity style={styles.close} onPress={handleClose}>
        <View>{ICONS.CROSS({width: 35, height: 35, color:COLORS.SECONDARY.GREY})}</View>
      </TouchableOpacity>
    </View>
  );
};

export default DietDataItem