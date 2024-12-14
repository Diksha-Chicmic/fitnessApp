import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS, SIZES } from "../../Constants/commonStyles";

interface SelectPreferencesProps {
  text?: number;
  textY?:string
  selected?: boolean;
  onToggle?: () => void;
}

const Settings: React.FC<SelectPreferencesProps> = ({ text, selected, onToggle ,textY}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsSelected(isSelected);
  }, [selected]);

  const toggleCheck = () => {
    setIsSelected(!isSelected);
   // onToggle();
  };

  return (
    <TouchableOpacity onPress={toggleCheck}>
    <View style={styles.container}>
      <View style={styles.box}>
        <BouncyCheckbox
          size={28}
          fillColor={COLORS.PRIMARY.PURPLE}
          unFillColor={COLORS.SECONDARY.WHITE}
          innerIconStyle={{ borderColor: COLORS.PRIMARY.GREY }}
         // onPress={toggleCheck}
          isChecked={isSelected}
        />
        <Text style={styles.texth}>${text}<Text style={styles.text}>{textY}</Text></Text>
        </View>
        <View style={styles.but}><Text style={styles.butText}>Free trial</Text></View>
    </View>
    </TouchableOpacity>
  );
};
 const styles= StyleSheet.create({
   container:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:COLORS.PRIMARY.DARKGREY,
   // borderWidth:2,
    paddingVertical:'7%',
    paddingHorizontal:'3%',
    marginHorizontal:'4%',
    marginVertical:'2%',
    borderRadius:10
    
   },
   but:{
     height:'140%',
    // borderWidth:1,
     backgroundColor:COLORS.PRIMARY.DIMPURPLE,
     width:'30%',
     borderRadius:12,
     //paddingHorizontal:'4%',
    // paddingVertical:'2%',
    paddingTop:'1%'
     
   },
   butText:{
    textAlign:'center',
    fontSize:SIZES.font14,
    color:COLORS.PRIMARY.PURPLE,
    fontWeight:'bold',
    paddingTop:'3%'
   },
   texth:{
     fontSize:SIZES.font15,
     fontWeight:'bold',
     marginLeft:'-2%'
     },
   text:{
    fontSize:SIZES.font13,
    fontWeight:'400'
   },
   box:{
    flexDirection:'row'
   }
 })
export default Settings;