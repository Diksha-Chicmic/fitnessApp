import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/commonStyles";
export const styles = StyleSheet.create({
    conatiner: {
       padding: 25,

    },
    listContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50,
        
        marginHorizontal: 20,
        
    },
    selected: {
        borderColor: COLORS.PRIMARY.PURPLE,
        
    },
});