import React,{useState} from "react";
import { Text,View,TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS } from "../../Constants/commonStyles";
import { styles } from "./style";
const SelectPreferences=({
    text,
    selected
}:Readonly<{
    text:string,
    selected:boolean
}>
)=>{
    const [isSelected, setIsSelected] = useState<boolean>(selected);
    const toogleCheck= () => {
        setIsSelected(!isSelected);
        selected = !selected;
      };
      const handleOnPress = () => {
         toogleCheck();
      };
    return(
        <View style={styles.parent}>
        {/* <TouchableOpacity onPress={handleOnPress}> */}
        <View style={styles.childCtr}>
          <View style={styles.textCtr}>
            <Text style={styles.text}>{text}</Text>
          </View>
          <BouncyCheckbox
            size={28}
            fillColor={COLORS.PRIMARY.PURPLE}
            unFillColor={COLORS.PRIMARY.GREY}
            innerIconStyle={{ borderColor: COLORS.PRIMARY.GREY }}
            onPress={toogleCheck}
            isChecked={isSelected}
          />
        </View>
      {/* </TouchableOpacity> */}
      </View>
        
    )

}

export default SelectPreferences