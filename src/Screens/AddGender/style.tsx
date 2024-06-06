import { StyleSheet } from "react-native"; 
import { COLORS, SIZES } from "../../Constants/commonStyles";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       // padding: 16,
       margin:20
    },
    heading:{
        fontSize:SIZES.font24,
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:40
    },
    text:{
        color:COLORS.SECONDARY.GREY,
        fontSize:SIZES.font13,
        textAlign:'center',
        marginHorizontal:40,
        marginTop:40,
    },

    genderContainer: {
        flexDirection: 'row',
    },
    button:{
         
    }
});
