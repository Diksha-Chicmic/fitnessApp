import { StyleSheet } from "react-native"
import { SIZES,COLORS } from "../../../Constants/commonStyles"

export const styles = StyleSheet.create({
    text: {
        fontSize: SIZES.font14,
        textAlign: 'center',
        marginVertical: '5%'
    },
    heading: {
        fontSize: SIZES.font24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal:'5%'
    },
    insideTxt: {
        color: COLORS.PRIMARY.PURPLE
    },
    progress: {
        fontSize: SIZES.font14,
        textAlign: 'center',
        marginTop: '20%'
    },
    iconContainer:{
        position: 'absolute',
         top: '15%'
    },
    textContainer:{
        position: 'absolute', 
        bottom:'22%', 
        fontWeight: '400', 
        fontSize: 12
    },
    container:{
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: '3%'
    }
})

