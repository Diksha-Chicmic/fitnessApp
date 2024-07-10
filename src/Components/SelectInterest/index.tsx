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

import { styles } from './style';

export type InterestItemProps = {
    item: {title: string; icon: React.ReactNode; selected: boolean};
  };
const SelectInterest: React.FC<InterestItemProps> = ({item}) => {
  // state ues
  const [isSelected, setIsSelected] = useState<boolean>(item.selected);

//   // reanimated use
//   const scale = useSharedValue(ANIMATIONS.sizeNormal);
//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{scale: scale.value}],
//   }));

  // functions
  const handlePress = () => {
    setIsSelected(!isSelected);
    item.selected = !item.selected;
    // scale.value = withSequence(
    //   withSpring(ANIMATIONS.sizeIncrease3),
    //   withSpring(ANIMATIONS.sizeNormal),
    // );
  };

  return (
    <View style={styles.parent}>
      <TouchableOpacity style={styles.child} onPress={handlePress}>
        <Animated.View
          style={[
            styles.iconCtr,
            isSelected ? styles.iconCtrSelected : null,
           // animatedStyle,
          ]}>
          {item.icon}
        </Animated.View>
        <View style={styles.textCtr}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SelectInterest;


// import React from "react";
// import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
// import { styles } from "./style";
// interface SelectInterestProps {
//     text: string;
//     icon: React.ReactNode;
//     selected: boolean;
//     onSelect?: () => void;
// }

// const SelectInterest: React.FC<SelectInterestProps> = ({ text, icon, selected, onSelect }) => {
//     return (
//         <TouchableOpacity onPress={onSelect} >
//             <View style={styles.contentContainer}>
//                 <View style={[styles.iconContainer, selected && styles.selected]}>
//                     {icon}
//                 </View>
//                 <Text style={[styles.text, selected && styles.selectedText]}>
//                     {text}
//                 </Text>
//             </View>
//         </TouchableOpacity>
//     );
// };


// export default SelectInterest;
