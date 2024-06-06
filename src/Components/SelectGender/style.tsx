import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../Constants/commonStyles";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.SECONDARY.WHITE,
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        shadowColor: COLORS.PRIMARY.PURPLE,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.70,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 13
    },
    iconTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    icon: {
        marginBottom: 10,
    },
    text: {
        textAlign: 'center',

        fontWeight: 'bold'
    },
    checkboxContainer: {
        position: 'absolute',
        top: 9,
        right: -3,
    },
});