import { StyleSheet } from "react-native";
import { SIZES,COLORS } from "../../Constants/commonStyles";

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
    parent: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY.GREY,
        alignContent: 'center',
       // paddingTop: 48,
      },
      titleText: {
        
      },
      flatListStyle: {
        
      },
      buttonStyle: {flex: 3, alignSelf: 'center'},
      but:{
        marginTop:'2%'
      }
});