import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../Constants/commonStyles";
export const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:COLORS.PRIMARY.PURPLE,
        paddingHorizontal:20
        
    },
    logo:{
        backgroundColor:COLORS.SECONDARY.WHITE,
        height:65,
        width:65,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        
         marginHorizontal:"40%",
         marginVertical:"20%"

    },
    heading:{
        fontSize:SIZES.font24,
        textAlign:'center',
        marginBottom:20,
        fontWeight:'bold',
        color:COLORS.SECONDARY.WHITE
    },
    text:{
        fontSize:SIZES.font15,
        color:COLORS.SECONDARY.WHITE,
        textAlign:'center',
        marginHorizontal:25
    },
    Arrow:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:40
    }

});