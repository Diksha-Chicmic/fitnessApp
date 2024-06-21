import { StyleSheet,Dimensions } from "react-native";
import { COLORS,SIZES } from "../../Constants/commonStyles";

const screenWidth= Dimensions.get('screen').width

export const styles = StyleSheet.create({
    direction: {
      flexDirection: 'row',
    },
    profile: {
      height: screenWidth / 11.2,
      width: screenWidth / 11.2,
      borderRadius: 50,
      marginRight: '4%',
      borderWidth: 1,
    },
    name: {
      fontWeight: 'bold',
    },
    time: {
      color: COLORS.SECONDARY.GREY,
    },
    parent: {
      borderRadius: 0,
      paddingVertical: '1%',
    },
    commentContainer: {
      marginHorizontal: '8%',
      paddingVertical:'4%'
    },
    commentBorder: {
      borderBottomColor: COLORS.PRIMARY.DARKGREY,
      borderBottomWidth: 1.5,
      
    },
    commentText: {
      marginLeft: '14%',
     // marginVertical: '3%',
      fontSize: SIZES.font13,
      paddingTop:'4%'
    },
    heading:{ 
      fontSize: SIZES.font15, 
      fontWeight: 'bold', 
      paddingHorizontal: '8%', 
      paddingBottom:'5%' 
  },
  container:{
       backgroundColor: 'white' ,
      height:screenWidth/0.54
  },
  input :{
      backgroundColor:'white',
     // marginTop:'2%',
    
     
      //color:COLORS.SECONDARY.GREY,
      paddingTop:'3.2%',
      fontSize:SIZES.font11,
      borderTopColor:COLORS.SECONDARY.LIGHTGREY,
      borderTopWidth:2,
      position:'absolute',
     
      bottom:0,
      width:screenWidth,
      paddingHorizontal:'8%',
      paddingVertical:'10%'
  },
  commentsList: {
      
      flex:1,
      justifyContent:'space-evenly'
      
    },
    inputText:{
      color:COLORS.SECONDARY.GREY
    }
  });
  