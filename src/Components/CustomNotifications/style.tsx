import {StyleSheet,Dimensions} from 'react-native';
import { COLORS,SIZES } from '../../Constants/commonStyles';
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
    //fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: RFValue(12),
    marginRight: 16,
    color: 'black',
  },
  nameText: {
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'left',
    marginVertical: 8,
    fontSize: SIZES.font11,
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
});