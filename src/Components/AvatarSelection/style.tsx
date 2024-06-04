import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/commonStyles";
export const styles = StyleSheet.create({
    conatiner: {
       padding: 25,
      //margin:30
    },
    listContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 40,
        // padding: 5,
        marginHorizontal: 20,
        
    },
    selected: {
        borderColor: COLORS.PRIMARY.PURPLE,
        backgroundColor: 'pink',
    },
});