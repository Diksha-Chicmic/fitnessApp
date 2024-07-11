import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";
export const styles = StyleSheet.create({
    container: {
      right: 20,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    notificationCtr: {
      position: 'absolute',
      backgroundColor: COLORS.PRIMARY.PURPLE,
      borderRadius: 200,
      justifyContent: 'center',
      bottom: -4,
      right: -4,
      width: 30,
      height: 30,
    },
    notificationText: {
      alignSelf: 'center',
      color: COLORS.SECONDARY.WHITE,
      fontWeight: 'bold',
      fontSize: SIZES.font13,
     // fontFamily: FONT_FAMILY.REGULAR,
    },
    onlineStatus: {
      position: 'absolute',
      backgroundColor: COLORS.SECONDARY.CYAN,
      borderRadius: 200,
      justifyContent: 'center',
      bottom: 4,
      left: 4,
      width: 12,
      height: 12,
    },
    onlineStatusNoInternet: {
      backgroundColor: COLORS.SECONDARY.RED,
    },
});