import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ICONS } from "../../Constants/icons";
import { styles } from './style';
type Icon = {
  height: number;
  width: number;
  color: string;
};

const iconSize: Icon = {
  height: 25,
  width: 25,
  color: 'grey',
};

const CustomView = ({
  title,
  items,
  quant,
  status,
  onClose
}: Readonly<{
  title?: string,
  items?: Array<string>,
  quant?: Array<number>,
  status?: Array<string>,
  onClose?: () => void
}>) => {
    function handlepress(){
        console.log('press')
    }
  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handlepress}>
          <View>{ICONS.CROSS(iconSize)}</View>
        </TouchableOpacity>
      </View>
      {items?.map((item, index) => (
        <View key={index} style={[styles.itemRow, index !== items.length - 1 && styles.itemSeparator]}>
          <View> 
            <Text style={styles.itemText}>{item}</Text>
            <Text style={styles.text}>{status ? status[index] : ''}</Text>
          </View>
          <Text style={styles.itemText}>{quant ? quant[index] : ''}</Text>
        </View>
      ))}
    </View>
  );
};



export default CustomView;


