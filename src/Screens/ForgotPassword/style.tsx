 import {StyleSheet} from 'react-native';
//  import {COLORS, SIZES} from '../../../Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONT_FAMILY, SIZES } from '../../Constants/commonStyles';

 export const styles = StyleSheet.create({
    input: {
        width: RFValue(230),
        textAlign: 'center',
        paddingHorizontal:'10%',
        borderRadius:10,
       // marginBottom:'20%'
     },
      but:{
        paddingVertical:'10%'
      },
  parent: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY.GREY,
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
     textAlign:'center',
     fontWeight:'bold',
     fontSize:SIZES.fontH4,
     marginVertical:'3%'
  }
 });