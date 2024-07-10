import React, {useState} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import SelectGender from '../SelectGender';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import { ICONS } from '../../Constants/icons';
import { STRINGS } from '../../Constants/strings';
import { User } from '../../Defs/user';
import { useAppSelector } from '../../Redux/Store';
import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../utils/userhandle';
import { COLORS, SIZES } from '../../Constants/commonStyles';

export interface ChangeUserInfoProps{
    setModalFalse:()=>void 
}
const ChangeUserInfo: React.FC<ChangeUserInfoProps> = ({setModalFalse}) => {
  const {gender, id} = useAppSelector(state => state.User.data);
  const [selectedGender, setSelectedGender] = useState<User['gender'] | null>(gender);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const toggleCheckBox = (gender: User['gender']) => {
    setSelectedGender(gender);
  };

  // functions
  const handleSubmitChange = async () => {
    console.log('submit')
    if (firstName !== '' && lastName !== '') {
        console.log('inside submit ')
      await firestore()
        .collection(firebaseDB.collections.users)
        .doc(id!)
        .update({
          firstName,
          lastName,
          gender,
        });
       // console.log(firstName)
      setModalFalse();
    }
  };
  return (
    <View style={styles.parent}>
       <Text style={{fontSize:SIZES.fontH1}}>Edit User Info</Text>
      <CustomInput
        text="First Name"
        type='name'
        onChangeText={setFirstName}
      />
      <CustomInput
        text="Last Name"
        type='name'
        onChangeText={setLastName}
      />
      <View style={styles.genderCtr}>
        <View style={styles.genderCardsCtr}>
          <SelectGender
            text='male'
            icon={ICONS.MALE({height:40,width:40})}
            onPress={() => toggleCheckBox('male')}
            selected={selectedGender === 'male'}
          />
          <SelectGender
            text='female'
            icon={ICONS.FEMALE({height:40,width:40})}
            onPress={() => toggleCheckBox('female')}
            selected={selectedGender === 'female'}
          />
        </View>
      </View>
      <CustomButton
        title="Submit"
        onPress={handleSubmitChange}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY.DIMGREY,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  genderCtr: {
    flexDirection: 'row',
    marginTop: 38,
  },
  genderCardsCtr: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  customTextInputStyle: {
    textAlign: 'center',
  },
});
export default ChangeUserInfo;