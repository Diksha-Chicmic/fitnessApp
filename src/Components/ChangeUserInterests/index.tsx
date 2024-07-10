import React from 'react';
import {FlatList, ListRenderItem, View,Text} from 'react-native';
import { styles } from './style';
import SelectInterest from '../SelectInterest';
import CustomButton from '../CustomButton';
import { useAppDispatch, useAppSelector } from '../../Redux/Store';
import { INTERESETS } from '../../Constants/interestData';
// import {ChangeUserInterestsProps} from './type';
import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../utils/userhandle';
import { updateUser } from '../../Redux/Reducers/currentUser';

const renderItem: ListRenderItem<{
  title: string;
  icon: React.ReactNode;
  selected: boolean;
}> = ({item}) => <SelectInterest item={item} />;
export interface ChangeUserInterestsProps{
  setModalFalse:()=>void
}
const ChangeUserInterests: React.FC<ChangeUserInterestsProps> = ({
  setModalFalse,
}) => {
  const {interests, id} = useAppSelector(state => state.User.data);
  const dispatch= useAppDispatch()
    console.log('iiiiiiiii',interests)
  const interestDataWithIcons = interests.map((val, index) => ({
    ...val,
    icon: INTERESETS[index].icon,
  }));
  

  // functions
  const handleSubmitChange = async () => {
    await firestore()
      .collection(firebaseDB.collections.users)
      .doc(id!)
      .update({
        interests: interestDataWithIcons.map(val => {
          const {selected, title} = val;
          return {selected, title};
        }),
      });
   dispatch(updateUser({interests:interestDataWithIcons}))
    setModalFalse();
  };

  return (
    <View style={styles.parent}>
       <Text style={styles.title}>Change Interests</Text>
      <View style={styles.flatListCtr}>
        <FlatList
          data={interestDataWithIcons}
          renderItem={renderItem}
          numColumns={3}
         // style={styles.flatListStyle}
        />
      </View>
      <View style={styles.customButtonCtr}>
        <CustomButton title="Change" onPress={handleSubmitChange} />
      </View>
    </View>
  );
};

export default ChangeUserInterests;



