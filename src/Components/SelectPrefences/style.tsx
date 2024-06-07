import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../Constants/commonStyles";
import { RFValue } from "react-native-responsive-fontsize";


export const styles = StyleSheet.create({
  container: {
    //flex: 1,
    margin:12
    //justifyContent: 'center',
    
  },
  textView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 8, 
    shadowColor: COLORS.PRIMARY.PURPLE,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent:'space-between',
    
 },
  innerTextContainer: {
    
    justifyContent:'space-around'
    
  },
  text: {
    fontSize: SIZES.font13,
  
  },
});
