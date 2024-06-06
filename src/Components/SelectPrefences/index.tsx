import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS } from "../../Constants/commonStyles";
import { styles } from "./style";

interface SelectPreferencesProps {
  text: string;
  selected: boolean;
  onToggle: () => void;
}

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
          onPress={toggleCheck}
          isChecked={isSelected}
        />
      </View>
    </View>
  );
};

export default SelectPreferences;

