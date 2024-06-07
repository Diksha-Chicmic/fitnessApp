import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      
    },
    heading: {
      fontSize: SIZES.font24,
      fontWeight: 'bold',
      //letterSpacing: 0.5,
      textAlign: 'center',
      
      
    },
    input: {
      width: RFValue(230),
      textAlign: 'center',
      marginVertical:10,
      
    },
   
 
  });
  
