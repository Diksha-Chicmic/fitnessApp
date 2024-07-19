import React, { useCallback, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker';
import { useQuery, useRealm } from '@realm/react';
import { useNetInfo } from '@react-native-community/netinfo';
import { useAppSelector, useAppDispatch } from '../../../Redux/Store';
import { UpdateMode } from 'realm';
import { COLORS } from '../../../Constants/commonStyles';
import { ICONS } from '../../../Constants/icons';
import { SIZES } from '../../../Constants/commonStyles';
import ChangeUserInfo from '../../../Components/ChangeUserInfo';
import ChangeUserInterests from '../../../Components/ChangeUserInterests';
import ChangeUserPreferences from '../../../Components/ChangeUserPreferences';
import WithModal from '../../../Components/WithModal';
import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../../utils/userhandle';
import storage from '@react-native-firebase/storage';
import { IMAGES } from '../../../Constants/images';
import { styles } from './style';
import { updateUser } from '../../../Redux/Reducers/currentUser';
import { UserDb } from '../../../DbModels /user';
const iconSize = {
  height: 40,
  width: 40,
  color: COLORS.PRIMARY.PURPLE,
};
const EditProfile = () => {
  const [activeModal, setActiveModal] = useState<'userInfo' | 'preferences' | null | 'interests'>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [photoModalVisible, setPhotoModalVisible] = useState(false);
  const { photo, firstName, lastName, email, interests, preferences, gender, id } = useAppSelector(state => state.User.data);
  const realm = useRealm();
  const dispatch = useAppDispatch();
  const netInfo = useNetInfo()

  const uploadAndSetPhoto = async (uri: string) => {
    if (!netInfo.isConnected) {
      if (id) {
        try {
          console.log('Starting realm write');
          realm.write(() => {
            realm.create(
              UserDb,
              {
                firstName,
                lastName,
                id,
                photo:uri,
                interests,
                gender,
                preferences
        
              },
              UpdateMode.Modified
            );
          });
          console.log('Realm write successful');
          //dispatch(updateUser({ photo: uri }));
        } catch (e) {
          console.error('Error during realm write:', e);
        }
      } else {
        console.warn('ID is missing');
      }
    }
    else {
      console.log('else wala ')
      try {
        const reference = storage().ref('media/' + id + '/' + 'photo');
        await reference.putFile(uri);
        const url = await reference.getDownloadURL();
        await firestore().collection(firebaseDB.collections.users).doc(id!).update({ photo: url });
      } catch (e) {
        console.log(e);
      }

    };
    dispatch(updateUser({ photo: uri }));
  }

  // const profiles = useQuery(UserDb);
  // console.log('hhhyrtryyrry', profiles)
  const openImagePicker = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    let response: any = await launchImageLibrary(options);
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      uploadAndSetPhoto(response.assets[0].uri)
      setModalVisible(false);
    }
  };

  const openCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    let response: any = await launchCamera(options);
    if (!response.didCancel && response.assets && response.assets.length > 0) {
      uploadAndSetPhoto(response.assets[0].uri)
      setModalVisible(false);
    }
  };
  const setModalFalse = () => setActiveModal(null);
  const getActiveModalComp = useCallback(() => {
    if (activeModal === 'userInfo') {
      return <ChangeUserInfo setModalFalse={setModalFalse} />;
    } else if (activeModal === 'preferences') {
      return <ChangeUserPreferences setModalFalse={setModalFalse} />;
    } else if (activeModal === 'interests') {
      return <ChangeUserInterests setModalFalse={setModalFalse} />;
    } else {
      return null;
    }
  }, [activeModal]);
  const ActiveModalComponent = getActiveModalComp();

  return (
    <View style={styles.parent}>
      <Text style={styles.cardsHeadingText}>User Info</Text>
      <View style={styles.userInfoCtr}>
        <View style={styles.userPhotoCtr} >
          <Image source={{ uri: photo }} style={{ height: '60%', width: '60%', borderRadius: 50 }} />
          <TouchableOpacity
            style={styles.pencilPhotoCtr}
            onPress={() => setModalVisible(true)}>
            <View style={styles.pencilBackCtr}>
              {ICONS.PLUS({ width: 10, height: 10, color: 'pink' })}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.genderCtr}>
          <View style={styles.nameAndGenderCtr}>
            <Text style={styles.infoTextHeading}>Name :</Text>
            <Text style={styles.infoTextHeading}>Email :</Text>
            {gender ? (
              <Text style={styles.infoTextHeading}>Gender :</Text>
            ) : null}
          </View>
          <View style={styles.firstNameAndLastNameCtr}>
            <Text style={styles.infoText}>
              {`${firstName} ${lastName ?? ''}`}
            </Text>
            <Text style={styles.infoText}>{`${email.slice(0, 14)}${email.length > 14 ? '...' : ''
              }`}</Text>
            {gender ? <Text style={styles.infoText}>{gender}</Text> : null}
          </View>
        </View>
        <TouchableOpacity
          style={styles.pencilCtr}
          onPress={() => setActiveModal('userInfo')}>
          <View style={styles.pencilBackCtr}>
            {ICONS.PLUS({ width: 10, height: 10, color: 'pink' })}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.otherCtr}>
        <Text style={styles.cardsHeadingText}>Preferences</Text>
        <View style={styles.cardCtr}>
          {preferences.some(val => val.selected) ? (
            preferences
              .filter(val => val.selected === true)
              .map((val, index) => (
                <Text key={index} style={styles.infoText}>
                  {val.text}
                </Text>
              ))
          ) : (
            <Text style={styles.infoText}>No Preferences selected</Text>
          )}
          <TouchableOpacity
            style={styles.pencilCtr}
            onPress={() => setActiveModal('preferences')}>
            <View style={styles.pencilBackCtr}>
              {ICONS.PLUS({ width: 10, height: 10, color: 'white' })}
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.cardsHeadingText}>Interests</Text>
        <View style={styles.cardCtr}>
          {interests.some(val => val.selected) ? (
            interests.map((val, index) => {
              if (val.selected) {
                return (
                  <Text key={index} style={styles.infoText}>
                    {val.title}
                  </Text>
                );
              }
            })
          ) : (
            <Text style={styles.infoText}>No Interests selected</Text>
          )}
          <TouchableOpacity
            style={styles.pencilCtr}
            onPress={() => setActiveModal('interests')}>
            <View style={styles.pencilBackCtr}>
              {ICONS.PLUS({ width: 10, height: 10, color: 'pink' })}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <WithModal
        modalVisible={activeModal !== null}
        setModalFalse={() => setActiveModal(null)}
        parentStyle={{ backgroundColor: COLORS.PRIMARY.DIMGREY }}>
        {ActiveModalComponent}
      </WithModal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={openImagePicker}>
              <View>{ICONS.ADDIMAGE(iconSize)}</View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
              <View>{ICONS.ADDPHOTO(iconSize)}</View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );

};
export default EditProfile