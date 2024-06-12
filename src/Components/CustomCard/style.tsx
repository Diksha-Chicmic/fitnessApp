import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../Constants/commonStyles";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.SECONDARY.WHITE,
        paddingVertical: 28,
        borderWidth:1,
        borderColor:COLORS.SECONDARY.LIGHTGREY,
       // marginVertical:1
    },
    Direction: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    iconContainer: {
        marginLeft: 5,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        alignItems:'center',
        justifyContent:'space-between'
    },
    
    title: {
        fontSize: RFValue(18),
        fontWeight: 'bold',
    },
    text: {
        fontSize: RFValue(11),
        //marginTop: 4,
        color:'grey',
        marginBottom:9
    },
    parentContainer: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: 50,
        marginRight: 24,
        marginTop: 16,
    },
    redContainer: {
        borderWidth: 2,
        flex: 1,
        borderColor: COLORS.PRIMARY.PURPLE,
    },
    yellowContainer: {
        borderWidth: 2,
        flex: 1,
        borderColor: COLORS.SECONDARY.RED,
    },
    greenContainer: {
        borderWidth: 2,
        flex: 1,
        borderColor: COLORS.SECONDARY.ORANGE
    },
    buttonContainer: {
        borderRadius: 15,
        marginRight: 16,
        //paddingHorizontal: 20,
        paddingVertical:5,
        // marginTop: 8,
        // flex:1
        minWidth:105,
        
    },
    buttonText: {
        textAlign: 'center',
        padding: 3,
        fontSize: SIZES.font13,
        fontWeight: 'bold',
    },
    cc: {
        position: 'relative',
    },
    pointer: {
        position: "absolute",
        height: 14,
        width: 3,
        top: 10,
        backgroundColor: "black",
    },
});























