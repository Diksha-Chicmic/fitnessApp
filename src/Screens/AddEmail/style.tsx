import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:'10%'
      
    },
    heading: {
      fontSize: SIZES.fontH4,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom:'10%',
      
      
    },
    input: {
      width: RFValue(230),
      textAlign: 'center',
      paddingHorizontal:'10%',
      borderRadius:10,
     // marginBottom:'20%'
  
      
    },
    but:{
      //marginTop:20,
      //paddingTop:40
      paddingVertical:'10%'
    }
   
 
  });
  
