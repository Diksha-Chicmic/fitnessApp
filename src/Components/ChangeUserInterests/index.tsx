import React from 'react';
import { FlatList, ListRenderItem, View, Text } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { styles } from './style';
import { useRealm } from '@realm/react';
import SelectInterest from '../SelectInterest';
import CustomButton from '../CustomButton';
import { useAppDispatch, useAppSelector } from '../../Redux/Store';
import { INTERESETS } from '../../Constants/interestData';
import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../utils/userhandle';
import { updateUser } from '../../Redux/Reducers/currentUser';
import { ChangeUserInterestsProps } from './types';
import { UserDb } from '../../DbModels /user';
const renderItem: ListRenderItem<{
  title: string;
  icon: React.ReactNode;
  selected: boolean;
}> = ({ item }) => <SelectInterest item={item} />;

const ChangeUserInterests: React.FC<ChangeUserInterestsProps> = ({
  setModalFalse,
}) => {
  const { interests, id, firstName, lastName, gender, photo, preferences } = useAppSelector(state => state.User.data);
  const dispatch = useAppDispatch()
  console.log('iiiiiiiii', interests)
  const interestDataWithIcons = interests.map((val, index) => ({
    ...val,
    icon: INTERESETS[index].icon,
  }));


  const netInfo = useNetInfo();
  const realm = useRealm();
  const handleSubmitChange = async () => {
    if (netInfo.isConnected) {
      await firestore()
        .collection(firebaseDB.collections.users)
        .doc(id!)
        .update({
          interests: interestDataWithIcons.map(val => {
            const { selected, title } = val;
            return { selected, title };
          }),
        });

      setModalFalse();
    } else {
      realm.write(() => {
        realm.create(
          UserDb, {
          interests: interestDataWithIcons.map(val => {
            const { selected, title } = val;
            return { selected, title };
          }),
          id: id!,
          gender,
          firstName,
          lastName,
          photo,
          preferences

        }
        )
      })
      setModalFalse();
    }
    dispatch(updateUser({
      interests: interestDataWithIcons.map(val => {
        const { selected, title } = val;
        return { selected, title };
      }),
    }),
    );
  };


  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Change Interests</Text>
      <View style={styles.flatListCtr}>
        <FlatList
          data={interestDataWithIcons}
          renderItem={renderItem}
          numColumns={3}
        />
      </View>
      <View style={styles.customButtonCtr}>
        <CustomButton title="Change" onPress={handleSubmitChange} />
      </View>
    </View>
  );
};

export default ChangeUserInterests;



