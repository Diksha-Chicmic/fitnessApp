import {StyleSheet} from 'react-native';
import { COLORS } from '../../Constants/commonStyles';
import { SIZES } from '../../Constants/commonStyles';

export const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderColor: COLORS.SECONDARY.LIGHTGREY,
  },
  foodNameCtr: {
    flex: 1,
    marginLeft: 8,
  },
  foodNameText: {
   // fontFamily: FONT_FAMILY.REGULAR,
    fontSize: SIZES.font13,
    color: 'black',
  },
  bouncyCheckbox: {
    height: 25,
  },
});