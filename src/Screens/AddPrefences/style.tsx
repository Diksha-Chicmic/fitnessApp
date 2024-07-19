import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";
export const styles=StyleSheet.create({
    conatiner:{
        flex:1,
        //justifyContent:'center',
       // alignItems:'center'
       backgroundColor:COLORS.PRIMARY.GREY
    },
    heading:{
        fontSize:SIZES.font24,
        textAlign:'center',
        fontWeight:'bold',
        marginHorizontal:40,
       marginBottom:'2%'
    },
    text:{
        color:COLORS.SECONDARY.GREY,
        fontSize:SIZES.font13,
        textAlign:'center',

    },
    but:{
        marginTop:'7%'
    },
    box:{marginVertical:'6%'}
    
})