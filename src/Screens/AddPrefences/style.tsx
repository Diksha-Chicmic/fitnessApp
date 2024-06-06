import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";
export const styles=StyleSheet.create({
    conatiner:{
       // flex:1,
        //justifyContent:'center',
       // alignItems:'center'
    },
    heading:{
        fontSize:SIZES.font24,
        textAlign:'center',
        fontWeight:'bold',
        marginTop:12,
        marginHorizontal:40
    },
    text:{
        color:COLORS.SECONDARY.GREY,
        fontSize:SIZES.font13,
        textAlign:'center',

    }
    
})