// CustomLoading.tsx
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export interface LoadProps{
 size:'large' | 'small'
}
const CustomLoading:React.FC<LoadProps> = ({size}) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={size} color="#0000ff"  />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
   // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomLoading;
