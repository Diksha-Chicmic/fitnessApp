import { StyleSheet,Dimensions } from "react-native"
import { COLORS,FONT_FAMILY,SIZES } from "../../Constants/commonStyles"

const screenWidth=Dimensions.get('screen').width

export const styles = StyleSheet.create({
    conatiner: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingHorizontal: '8%',
        width: screenWidth,
        borderRadius: 15,
        paddingVertical: '8%',
        marginVertical:'3%'
    },
    direction: {
        flexDirection: 'row'
    },
    profile: {
        height: screenWidth / 9.2,
        width: screenWidth / 9.2,
        borderRadius: 50,
        marginRight: '4%',
       
    },
    cap: {
        marginVertical: '4%',
        fontWeight: '400',
        fontSize:SIZES.font13,
        fontFamily:FONT_FAMILY.REGULAR
    },
    post: {
        height: screenWidth / 1.8,
        width: screenWidth / 1.2,
        borderRadius: 10
    },
    iconContainer: {
        flexDirection: 'row',
        paddingVertical: '6%'
    },
    text: {
        paddingHorizontal: '3%',
        paddingVertical: '1%',
        color:COLORS.SECONDARY.GREY,
        
    },
    time:{
        color:COLORS.SECONDARY.GREY,
        //letterSpacing:-0.7
        fontFamily:FONT_FAMILY.REGULAR
    },
    name:{
        fontWeight:'bold',
        fontFamily:FONT_FAMILY.SEMI_BOLD
    }
    
})