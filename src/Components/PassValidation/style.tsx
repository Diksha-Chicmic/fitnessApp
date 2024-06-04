import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";
export const styles = StyleSheet.create({
    container: {
       margin:45,
       marginTop:20
    },
    box: {
        height: 13,
        width: 13,
        backgroundColor: COLORS.SECONDARY.GREY
    },
    boxFill: {
        backgroundColor: COLORS.PRIMARY.PURPLE
    },
    field: {
        flexDirection: 'row',
        margin:10
    },
    text: {
        paddingLeft: 20,
        color:COLORS.SECONDARY.GREY
    }
});