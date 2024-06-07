import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center', 
        marginVertical: 35, 
    },
    heading: {
        fontSize: SIZES.font24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
       color: COLORS.SECONDARY.GREY,
       fontSize: SIZES.font13,
       textAlign: 'center',
       padding:16,
       marginBottom:30,
       marginHorizontal:20
    },
    text2: {
       color: COLORS.PRIMARY.PURPLE,
       fontSize: SIZES.font15,
       textAlign: 'center',
       padding: 20,
       fontWeight: 'bold'
    }
});

