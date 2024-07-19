import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center', 
        marginVertical: '8%', 
    },
    heading: {
        fontSize: SIZES.font24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:'3%'
    },
    text: {
       color: COLORS.SECONDARY.GREY,
       fontSize: SIZES.font13,
       textAlign: 'center',
       marginHorizontal:'5%',
      marginBottom:'20%'
    },
    text2: {
       color: COLORS.PRIMARY.PURPLE,
       fontSize: SIZES.font15,
       textAlign: 'center',
       fontWeight: 'bold',
       marginBottom:'50%'
    },
    container:{
        backgroundColor:COLORS.PRIMARY.GREY,
        flex:1
    }
});

