import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SIZES } from "../../Constants/commonStyles";

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    heading: {
      fontSize: SIZES.font24,
      fontWeight: 'bold',
      letterSpacing: 0.5,
      marginVertical: 40,
      //marginHorizontal: 40,
      textAlign: 'center',
   
    },
    input: {
      width: RFValue(230),
      textAlign: 'center',
    
    },
});

export default styles