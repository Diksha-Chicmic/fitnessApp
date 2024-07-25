import { StyleSheet ,Dimensions} from "react-native";
import { COLORS, FONT_FAMILY, SIZES } from "../../Constants/commonStyles";
const screenWidth= Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 25,
      paddingVertical:20,
      width:screenWidth,
      marginVertical:-1
    },
    iconContainer: {
      marginRight: 10
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    quantText: {
      //color: COLORS.SECONDARY.GREY,
      fontSize:SIZES.font14,
      fontFamily:FONT_FAMILY.REGULAR
    },
    text:{
        fontSize:SIZES.font11,
        color:COLORS.SECONDARY.GREY,
       // textAlign:'center',
    },
    title:{
         fontSize:SIZES.font14,
        // textAlign:'center',
        fontFamily:FONT_FAMILY.REGULAR
    },
    borderContainer:{
      borderBottomWidth:2,
    borderBottomColor:COLORS.SECONDARY.GREY,
     marginHorizontal:20
      
    }
  });