import { StyleSheet ,Dimensions} from "react-native";
import { COLORS, SIZES } from "../../Constants/commonStyles";
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
      color: COLORS.SECONDARY.GREY,
      fontSize:SIZES.font14
    },
    text:{
        fontSize:SIZES.font11,
        color:COLORS.SECONDARY.GREY
    },
    title:{
         fontSize:SIZES.font14
    },
    borderContainer:{
      borderBottomWidth:2,
    borderBottomColor:COLORS.SECONDARY.GREY,
     marginHorizontal:20
      
    }
  });