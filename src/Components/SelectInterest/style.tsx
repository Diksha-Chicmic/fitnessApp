import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../Constants/commonStyles";

// export const styles = StyleSheet.create({
    
//     contentContainer: {
//        //flexDirection: "row",
//        alignItems: "center",
//        // padding:20,
//      //marginHorizontal:20
       
//     },
//     iconContainer: {
//          width: 60, 
//          height: 60, 
//         borderRadius: 30, // Half of the width/height to make it a circle
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: COLORS.SECONDARY.WHITE, // Light background color for the circle
//         // marginHorizontal: 32,
//        // marginVertical:10,
//         paddingVertical:16,
//         paddingHorizontal:16
        
       
       
//     },
//     selected: {
//         backgroundColor: COLORS.PRIMARY.PURPLE,
//     },
//     text: {
//         fontSize: SIZES.font14,
//         paddingTop:10,
//         //margin:10
//        // marginHorizontal:,
//        // marginVertical:10
//     },
//     selectedText: {
//         fontWeight: "bold",
//     },
// });
export const styles = StyleSheet.create({
    contentContainer: {
       alignItems: "center",
       marginHorizontal:25,
       marginVertical:10
    },
    iconContainer: {
        borderRadius: 50, // Half of the width/height to make it a circle
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.SECONDARY.WHITE,
        padding: 16,
        aspectRatio: 1, // Maintain the aspect ratio
    },
    selected: {
        backgroundColor: COLORS.PRIMARY.PURPLE,
    },
    text: {
        fontSize: SIZES.font14,
        paddingTop: 12,
    },
    selectedText: {
        fontWeight: "bold",
    },
});
