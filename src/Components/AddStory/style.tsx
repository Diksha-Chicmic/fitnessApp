import { StyleSheet,Dimensions } from "react-native"
import { COLORS, SIZES } from "../../Constants/commonStyles"

const screenWidth=Dimensions.get('screen').width

export const styles= StyleSheet.create({
     
    story:{
     borderRadius:50,
     borderWidth:1,
     height:screenWidth/7,
     width:screenWidth/7,
     marginVertical:'5%'
    },
    icon:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
       width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: '10%',
        paddingHorizontal: '10%',
        flexDirection:'row',
    
        //height:'15%'
    },
    modalButton: {
      //  backgroundColor: COLORS.PRIMARY.PURPLE,
       // padding: 15,
       // marginVertical: 10,
       //paddingVertical:'10%',
     //  width:'10%',
        borderRadius: 10,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    modalButtonText: {
        color: COLORS.SECONDARY.GREY,
        fontSize: SIZES.font17,
    },
    modalBackground: {
        flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
})