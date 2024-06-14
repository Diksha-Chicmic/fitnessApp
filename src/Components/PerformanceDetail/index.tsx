import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ICONS } from '../../Constants/icons';
import PerformanceDetails from '../CustomPerformance ';

const dummyData: Array<{ data: Array<{ performTitle: string, performanceValue: number, status: string, icon: React.ReactNode ,border:boolean}> }> = [
  {
    data: [
      { performTitle: "Best Performance", performanceValue: 10, status: 'Monday', icon: ICONS.YELLOWSMILE({ height: 20, width: 20,color:'orange' }),border:true },
      { performTitle: "Worst Performance", performanceValue: 6, status: 'Saturday', icon: ICONS.REDSMILE({ height: 20, width: 20 }),border:false },
    ]
  },
];

const PerformanceD: React.FC = () => {
  return (
    <View style={styles.container}>
      {dummyData[0].data.map((item, index) => (
        <PerformanceDetails
          key={index}
          title={item.performTitle}
          quant={item.performanceValue}
          text={item.status}
          icon={item.icon}
          border={item.border}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // padding: 20,
  },
});

export default PerformanceD
