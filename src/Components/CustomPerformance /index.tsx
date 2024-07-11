import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './style';
import { DetailsProps } from './types';
const PerformanceDetails: React.FC<DetailsProps> = ({ title, quant, text, icon,border }) => {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.quantText}>{quant}</Text>
    </View>
    {border && <View style={styles.borderContainer} />}
  </View>
    
  );
};


export default PerformanceDetails;




