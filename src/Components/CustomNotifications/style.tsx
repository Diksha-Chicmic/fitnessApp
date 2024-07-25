import {StyleSheet,Dimensions} from 'react-native';
import { COLORS,FONT_FAMILY,SIZES } from '../../Constants/commonStyles';
import {RFValue} from 'react-native-responsive-fontsize';
//import {FONT_FAMILY, SIZES} from '../../../Constants/commonStyles';
const screenWidth=Dimensions.get('screen').width
export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY.WHITE,
    flexDirection: 'row',
    marginHorizontal: 24,
    borderBottomWidth: 1.25,
    borderColor: COLORS.SECONDARY.LIGHTGREY,
    paddingVertical: 24,
  },
  ImageContainer: {
    flex: 1,
   paddingHorizontal: '5%',
    marginRight: '5%',
  },
  image: {
    borderRadius:100, 
    height:screenWidth/8,
   width:screenWidth/8
  },
  textContiner: {
    flex: 6
  },
  notificationText: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: RFValue(12),
    marginRight: 16,
    color: 'black',
  },
  nameText: {
    fontWeight: 'bold',
    fontFamily:FONT_FAMILY.SEMI_BOLD
  },
  text: {
    textAlign: 'left',
    marginVertical: 8,
    fontSize: SIZES.font11,
    fontFamily:FONT_FAMILY.REGULAR
  },
  box: {
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#E1DDF5',
    borderRadius: 200,
  },
  dltBut:{
    backgroundColor: COLORS.SECONDARY.RED,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 100,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  dltText:{
    color: COLORS.SECONDARY.WHITE,
          fontWeight: 'bold',
          //fontFamily: FONT_FAMILY.REGULAR,
          fontSize: SIZES.font14,
  }
});