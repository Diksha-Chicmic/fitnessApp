import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { ICONS } from '../../Constants/icons';
import { styles } from './style';
export type CustomGlassProps = {
    isFilled: boolean;
    handleFilled: () => void;
    handleEmpty: () => void;
};

const CustomGlass = ({
  isFilled,
  handleFilled,
  handleEmpty,
}: CustomGlassProps) => {
  return (
    <View style={styles.parent}>
      {isFilled ? (
        <TouchableOpacity onPress={handleEmpty}>
          {ICONS.GLASSFILLED({height:40,width:40})}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleFilled}>
          {ICONS.EMPTYGLASS({height:40,width:40})}
          <View style={styles.plusCtr}>{ICONS.PLUS({height:15,width:15})}</View>
        </TouchableOpacity>
      )}
      
    </View>
  );
};

export default CustomGlass;