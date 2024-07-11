import { StyleSheet } from "react-native"
import { COLORS,SIZES} from "../../Constants/commonStyles"

const styles= StyleSheet.create({
    container:{
     flexDirection:'row',
     justifyContent:'space-between',
     backgroundColor:COLORS.PRIMARY.DARKGREY,
    // borderWidth:2,
     paddingVertical:'7%',
     paddingHorizontal:'3%',
     marginHorizontal:'4%',
     marginVertical:'2%',
     borderRadius:10
     
    },
    but:{
      height:'140%',
     // borderWidth:1,
      backgroundColor:COLORS.PRIMARY.DIMPURPLE,
      width:'30%',
      borderRadius:12,
      //paddingHorizontal:'4%',
     // paddingVertical:'2%',
     paddingTop:'1%'
      
    },
    butText:{
     textAlign:'center',
     fontSize:SIZES.font14,
     color:COLORS.PRIMARY.PURPLE,
     fontWeight:'bold',
     paddingTop:'3%'
    },
    texth:{
      fontSize:SIZES.font15,
      fontWeight:'bold',
      marginLeft:'-2%'
      },
    text:{
     fontSize:SIZES.font13,
     fontWeight:'400'
    },
    box:{
     flexDirection:'row'
    }
  })