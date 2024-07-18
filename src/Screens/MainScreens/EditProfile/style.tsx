import {StyleSheet} from 'react-native';
import { COLORS } from '../../../Constants/commonStyles';
import { SIZES } from '../../../Constants/commonStyles';

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY.DIMGREY,
  },
  infoTextHeading: {
    marginBottom: 3,
    color: 'black',
    //fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '700',
    fontSize: SIZES.font13,
  },
  infoText: {
    marginBottom: 3,
    color: COLORS.PRIMARY.PURPLE,
    //fontFamily: FONT_FAMILY.REGULAR,
    fontWeight: '700',
    fontSize: SIZES.font13,
  },
  cardsHeadingText: {
    marginTop: 16,
    marginHorizontal: 32,
    marginBottom: 8,
    color: COLORS.SECONDARY.GREY,
    //fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: SIZES.fontH5,
    // fontSize: RFValue(12),
  },
  nameAndGenderCtr: {
    flex: 1,
  },
  firstNameAndLastNameCtr: {
    flex: 2,
  },
  otherCtr: {
    flex: 5,
  },
  userInfoCtr: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: SIZES.rounding2,
    paddingHorizontal: 8,
    paddingVertical: 24,
    justifyContent: 'space-evenly',
  },
  userPhotoCtr: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPhotoParent: {width: 80, height: 80},
  userPhoto: {borderRadius: 200},
  pencilPhotoCtr: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 80,
    height: 80,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: 200,
  },
  pencilBackCtr: {
    backgroundColor: 'grey',
    borderRadius: 200,
    padding: 8,
  },
  pencilCtr: {
    position: 'absolute',
    right: 8,
    top: 8,
    // bottom: 8,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    borderRadius: 200,
  },
  cardCtr: {
    backgroundColor: COLORS.SECONDARY.WHITE,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: SIZES.rounding2,
    paddingVertical: 24,
  },
  genderCtr: {
    flex: 2,
    flexDirection: 'row',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
   width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: '10%',
    paddingHorizontal: '10%',
    flexDirection:'row',

    //height:'15%'
},
modalButton: {
  //  backgroundColor: COLORS.PRIMARY.PURPLE,
   // padding: 15,
   // marginVertical: 10,
   //paddingVertical:'10%',
 //  width:'10%',
    borderRadius: 10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
},
modalButtonText: {
    color: COLORS.SECONDARY.GREY,
    fontSize: SIZES.font17,
},
modalBackground: {
    flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});