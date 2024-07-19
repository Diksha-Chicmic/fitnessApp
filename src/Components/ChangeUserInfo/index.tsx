import React, {useState} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import SelectGender from '../SelectGender';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import { ICONS } from '../../Constants/icons';
import { useQuery, useRealm } from '@realm/react';
import { useNetInfo } from '@react-native-community/netinfo';
import { STRINGS } from '../../Constants/strings';
import { User } from '../../Defs/user';
import { useAppSelector, useAppDispatch } from '../../Redux/Store';
import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../utils/userhandle';
import { COLORS, SIZES } from '../../Constants/commonStyles';
import { UserDb } from '../../DbModels /user';
import { ChangeUserInfoProps } from './types';
import { styles } from './style';
import { UpdateMode } from 'realm';
import { updateUser } from '../../Redux/Reducers/currentUser';

const ChangeUserInfo: React.FC<ChangeUserInfoProps> = ({setModalFalse}) => {
  const {gender, id, photo , interests,preferences} = useAppSelector(state => state.User.data);
  const [selectedGender, setSelectedGender] = useState<User['gender'] | null>(gender);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useAppDispatch();
  const netInfo = useNetInfo();
  const realm = useRealm();

  const toggleCheckBox = (gender: User['gender']) => {
    setSelectedGender(gender);
  };

  const handleSubmitChange = async () => {
    console.log('submit')
    if(netInfo.isConnected){
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
      setModalFalse();
    }
  }else{
    console.log('offline mode');
    try{
    realm.write(() => {
      realm.create(
        UserDb,
        {
          id,
          firstName:firstName,
          lastName:lastName,
          gender: selectedGender,
          photo,
          interests,
       preferences
        },
        UpdateMode.Modified 
      );
    });
    console.log('Offline data updated in Realm');
    setModalFalse();
    console.log('ttwywg', profiles)
  }catch(e){
    console.log('eroor with updating data with realm',e)
  }

}

  dispatch(updateUser({firstName,lastName,gender:selectedGender}))
  };
  const profiles= useQuery(UserDb);
  console.log('wejkhrjhwejj',profiles)
  return (
    <View style={styles.container}>
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
      <View style={styles.box}>
        <View style={styles.box2}>
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

export default ChangeUserInfo;