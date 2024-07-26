import {StyleSheet} from 'react-native';
import { COLORS,FONT_FAMILY,SIZES} from '../../Constants/commonStyles';

export const styles = StyleSheet.create({
  parent: {
    borderBottomWidth: 1,
    borderColor: COLORS.SECONDARY.GREY,
    paddingVertical: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:'3%'
  },
  headingText: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: SIZES.font13,
    color: 'black',
    paddingHorizontal:'3%'
  },
  switchCtr: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: COLORS.PRIMARY.DIMGREY,
    marginRight: 16,
  },
  switchCtrActive: {
    borderColor: '#E8E8E8',
  },
  switchInnerCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 3,
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    shadowOffset: {height: 4, width: 1},
  },
});
