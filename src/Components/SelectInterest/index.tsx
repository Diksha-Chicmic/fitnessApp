// libs
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// 3rd party
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

import {InterestItemProps} from './types';
import { styles } from './style';
const InterestItem: React.FC<InterestItemProps> = ({item}) => {
  // state ues
  const [isSelected, setIsSelected] = useState<boolean>(item.selected);

  const handlePress = () => {
    setIsSelected(!isSelected);
    item.selected = !item.selected;
    
  };

  return (
    <View style={styles.parent}>
      <TouchableOpacity style={styles.child} onPress={handlePress}>
        <View
          style={[
            styles.iconCtr,
            isSelected ? styles.iconCtrSelected : null,
          ]}>
          {item.icon}
        </View>
        <View style={styles.textCtr}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InterestItem;