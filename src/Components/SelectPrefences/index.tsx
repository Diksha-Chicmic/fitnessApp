import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS } from "../../Constants/commonStyles";
import { styles } from "./style";
import { SelectPreferencesProps } from "./types";

const SelectPreferences: React.FC<SelectPreferencesProps> = ({ text, selected, onToggle }) => {
  const [isSelected, setIsSelected] = useState<boolean>(selected);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const toggleCheck = () => {
    setIsSelected(!isSelected);
    onToggle();
  };

  return (
    <TouchableOpacity onPress={toggleCheck}>
    <View style={styles.container}>
      <View style={styles.textView}>
        <View style={styles.innerTextContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <BouncyCheckbox
          size={28}
          fillColor={COLORS.PRIMARY.PURPLE}
          unFillColor={COLORS.PRIMARY.GREY}
          innerIconStyle={{ borderColor: COLORS.PRIMARY.GREY }}
          // onPress={toggleCheck}
          isChecked={isSelected}
        />
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default SelectPreferences;

