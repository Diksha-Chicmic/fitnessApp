import { StyleSheet,Dimensions } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";

const screenWidth= Dimensions.get('window').width;


export const styles = StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
    
      borderRadius: 15,
      flexDirection: 'column',
      padding: 16,
      marginVertical: 8,
      width:screenWidth,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    title: {
      fontSize: SIZES.font18,
      fontWeight: 'bold',
    },
    itemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      marginHorizontal:10
    },
    itemSeparator: {
      borderBottomWidth: 1,
      borderBottomColor: COLORS.SECONDARY.GREY,
      
    },
    itemText: {
      fontSize: SIZES.font14,
    },
    text:{
        fontSize:SIZES.font13,
        color:COLORS.SECONDARY.GREY
    }
  });