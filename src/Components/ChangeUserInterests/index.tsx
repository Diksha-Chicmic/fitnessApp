import React from 'react';
import {FlatList, ListRenderItem, View,Text,StyleSheet} from 'react-native';
import SelectInterest from '../SelectInterest';
import CustomButton from '../CustomButton';
import { useAppSelector } from '../../Redux/Store';
import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../utils/userhandle';
import { SIZES ,COLORS} from '../../Constants/commonStyles';
import { INTERESETS } from '../../Constants/interestData';


export interface ChangeUserInterestsProps{
    setModalFalse:()=>void
}

const renderItem: ListRenderItem<{ title: string; icon: React.ReactNode; selected: boolean; }> = ({ item }) => (
    <SelectInterest text={item.title} icon={item.icon} selected={item.selected} onSelect={() => {}} />
  );
  
const ChangeUserInterests: React.FC<ChangeUserInterestsProps> = ({ setModalFalse }) => {
  const {interests, id} = useAppSelector(state => state.User.data);

  const interestDataWithIcons = interests.map((val, index) => ({
    ...val,
    icon: INTERESETS[index].icon,
  }));

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
    setModalFalse();
  };

  return (
    <View style={styles.parent}>
    <Text style={{fontSize:SIZES.font24,fontWeight:'bold',textAlign:'center'}}>Change Interest</Text>
      <View style={styles.flatListCtr}>
        <FlatList
          data={INTERESETS}
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
export const styles = StyleSheet.create({
    parent: {
      flex: 1,
      backgroundColor: COLORS.PRIMARY.DIMGREY,
    },
    flatListCtr: {
      flex: 4,
      marginVertical:'15%',
      marginLeft:'-4%'
    },
    customButtonCtr: {
      flex: 1,
      alignItems: 'center',
      paddingTop: '10%',
    },
});
export default ChangeUserInterests;