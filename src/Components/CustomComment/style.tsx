import { StyleSheet,Dimensions } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";

 const screenWidth=Dimensions.get('screen').width

export const styles = StyleSheet.create({
    actionSheetContainer: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height:screenWidth/0.6
    },
    indicator: {
      width: 100,
    },
    commentBox: {
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
     //flex:1,
      padding: 10,
      marginTop: 10,
    },
    button:{
       height:screenWidth/12,
       width:screenWidth/4.5,
       backgroundColor:COLORS.PRIMARY.PURPLE,
       borderRadius:20,
       marginLeft:'30%'
    //  marginRight:'10%'
       
    },
    butText:{
      textAlign:'center',
      color:COLORS.SECONDARY.WHITE,
     paddingTop:'7.5%',
      fontSize:SIZES.font11,
      fontWeight:'bold'
    },
    box:{
      
     marginVertical:'7%',
     flexDirection:'row',
   },
   container:{
    borderTopWidth:1, 
    position:'absolute',
    width:screenWidth/1.3,
    top:screenWidth/0.72,
    borderTopColor:COLORS.SECONDARY.GREY,
    left:'12%'
   },
   icon:{
    paddingHorizontal:8
   },
   selectedImage: {
    width: '80%',
    height: 200,
    marginVertical: 16,
    borderRadius: 8,
  },
  
  });