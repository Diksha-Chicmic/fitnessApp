import {StyleSheet} from 'react-native';
import { COLORS,SIZES } from '../../../Constants/commonStyles';
//import {FONT_FAMILY} from '../../../Constants/commonStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY.DIMGREY,
  },
  heading: {
    fontSize: SIZES.fontH4,
    textAlign: 'left',
    marginHorizontal: 16,
  },
  text: {
    textAlign: 'left',
    marginHorizontal: 16,
  },
  NotiCnt: {
    backgroundColor: 'white',
    marginVertical: 32,
  },
  list: {marginVertical: 16},
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeMenuCtr: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    borderRadius:10,
    right: 32,
  }
  
});