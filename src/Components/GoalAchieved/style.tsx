import {StyleSheet,Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { COLORS, FONT_FAMILY, SIZES } from '../../Constants/commonStyles';
 const screenWidth= Dimensions.get('screen').width
 const screenHeight=Dimensions.get('screen').height
export const styles = StyleSheet.create({
  parent: {flex: 1},
  headingCtr: {
   // marginVertical: '1%',
   marginBottom:'10%'
 },
  childCtrTop: {
    backgroundColor: COLORS.PRIMARY.PURPLE,
   // borderRadius: 10,
    height:screenHeight/2,
    marginTop:'-17%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
   
    
  },
  closeCtr: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: '-7%',
    zIndex: 9,
  },
  userInfoCtr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNameText: {
    fontFamily: FONT_FAMILY.REGULAR,
    marginLeft: 8,
    fontSize: RFValue(11.7),
    color: 'black',
  },
  customImageParent: {
    width: 42,
    height: 42,
  },
  customImage: {
    borderRadius: 100,
  },
  childCtrBottom: {
   // flex: 1,
    backgroundColor: COLORS.PRIMARY.DIMGREY,
    //borderRadius: 10,
   // borderWidth:8,
    height:screenHeight/2.7,
    
  },
  cardCtr: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop:'-10%'
   // borderColor:'red',
    //borderWidth:2
    // justifyContent: "center",
    // backgroundColor: COLORS.SECONDARY.RED,
    // height: '100%',
    // width: '100%',
  },
  customButtonNotNowParent: {
    alignSelf: 'center',
    backgroundColor: COLORS.PRIMARY.DIMGREY,
  },
  but:{
   marginTop:'-50%',
   
   
  },
  card: {
    backgroundColor: COLORS.SECONDARY.WHITE,
    marginHorizontal: 32,
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: COLORS.SECONDARY.LIGHTGREY,
    margin: 16,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  dataCtr: {
    alignItems: 'center',
    paddingVertical: '12%',
   // borderWidth:1
  },
  text:{
    color:COLORS.SECONDARY.WHITE, 
    textAlign:'center',
    // backgroundColor:'pink',
     fontFamily:FONT_FAMILY.SEMI_BOLD,
     fontSize:SIZES.font17,
     fontWeight:'bold'
  },
  text2:{
    textAlign:'center',
    color:COLORS.PRIMARY.PURPLE,
    fontSize:SIZES.font15,
    fontFamily:FONT_FAMILY.SEMI_BOLD,
    marginTop:'-16%'
    
  },
  progress: {
    fontSize: SIZES.font14,
    textAlign: 'center',
    marginTop: '20%'
},
iconContainer:{
    position: 'absolute',
     top: '15%'
},
textContainer:{
    position: 'absolute', 
    bottom:'22%', 
    fontWeight: '400', 
    fontSize: 12,
    fontFamily:FONT_FAMILY.SEMI_BOLD
},
container:{
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: '3%'
},
detailsText:{
    fontFamily:FONT_FAMILY.SEMI_BOLD,
    textAlign:'center'
}
});