import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({

    heading: {
        fontSize: SIZES.font24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text:{
       color:COLORS.SECONDARY.GREY,
       fontSize:SIZES.font11,
       textAlign:'center',
       padding:16
    },
    text2:{
       color:COLORS.PRIMARY.PURPLE,
       fontSize:SIZES.font13,
       textAlign:'center',
       padding:20,
       fontWeight:'bold'
    }
})

