import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS ,SIZES} from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    image: {
        height: RFValue(210),
        width: RFValue(380),
    },
    heading: {
        fontSize: SIZES.font24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 50,
        opacity: 0.8,
    },
    text: {
        color: COLORS.SECONDARY.GREY,
        textAlign: "center",
        width: 250,
        marginHorizontal: 50,
        marginVertical: 10,
    },

    text1: {
        color: COLORS.SECONDARY.GREY,
        fontSize: SIZES.font14,
        textAlign: 'center',
    },
    text2: {
        color: COLORS.PRIMARY.PURPLE,
        marginLeft: 8, 
        fontSize: SIZES.font14,
    },
});
