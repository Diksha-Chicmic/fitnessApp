import { StyleSheet } from "react-native";
import { SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        textAlign: 'center',
        fontSize: SIZES.font24,
        fontWeight: 'bold',
        marginHorizontal: 40,
        marginBottom: 20
    },
    interestsContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
});