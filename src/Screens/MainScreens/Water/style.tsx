import { StyleSheet,Dimensions } from "react-native";
import { COLORS,SIZES } from "../../../Constants/commonStyles";
 
const screenWidth = Dimensions.get('window').width
export const styles = StyleSheet.create({
   
    text: {
       color:COLORS.PRIMARY.PURPLE
    },
    glassContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
       
    },
    warning:{
        backgroundColor:'pink',
        paddingVertical:'4%',
        opacity:0.7,
        width:screenWidth
    },
    warningText:{
        color:COLORS.SECONDARY.RED,
        textAlign:'center',
        fontSize:SIZES.font11,
        fontWeight:'bold',
        padding:'1%',
        letterSpacing:0.4,
        
    },
    heading:{
        fontSize:SIZES.font24,
        fontWeight:'bold',
        textAlign:'center',
        paddingHorizontal:'5%',
        margin:'5%'

        
    }
});
