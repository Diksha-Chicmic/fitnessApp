 import {StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../../../Constants/commonStyles';
import { RFValue } from 'react-native-responsive-fontsize';


 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY.GREY,
  },
  heading:{
    fontSize:SIZES.fontH4,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:'10%'
  },
  input: {
    width: RFValue(230),
    textAlign: 'center',
    paddingHorizontal:'10%',
    borderRadius:10,
    marginBottom:'5%'
},
box:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginTop:'5%'
},
but:{
    //marginTop:20,
    //paddingTop:40
    paddingVertical:'10%'
  }
 
 });