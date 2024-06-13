import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        maxHeight: '22%',
        marginHorizontal: 10,
        marginVertical: 8,

    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.SECONDARY.GREY,

    },
    box: {
        height: 18,
        width: 18,
        marginRight: 10,
        borderRadius: 4
    },
    box1: {
        flexDirection: 'row',
    },

    text: {
        fontSize: SIZES.font14
    }
})