import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: COLORS.SECONDARY.GREY,
        paddingVertical: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal:10,
        marginVertical:1,
    },
    text: {
        fontSize: SIZES.font13,
        fontWeight:'400'
    },
    toggleStyles:{
        borderWidth: 2,
        borderRadius: 100,
         borderColor: COLORS.PRIMARY.DIMGREY,
         marginRight: 16,
    }
})
