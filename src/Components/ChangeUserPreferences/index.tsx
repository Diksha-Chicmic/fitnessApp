import React from 'react';
import {FlatList, ListRenderItem, View,Text,StyleSheet} from 'react-native';
import SelectPreferences from '../SelectPrefences';
import CustomButton from '../CustomButton';
import { useAppSelector } from '../../Redux/Store';
import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../utils/userhandle';
import { SIZES ,COLORS} from '../../Constants/commonStyles';
import { PREEFENCES } from '../../Constants/preferencesData';


export interface ChangeUserPreferenceProps{
    setModalFalse:()=>void
}

const renderItem: ListRenderItem<{ text: string; selected: boolean; }> = ({ item }) => (
    <SelectPreferences text={item.text}  selected={item.selected} onToggle={() => {}} />
  );
  
const ChangeUserPreferences: React.FC<ChangeUserPreferenceProps> = ({ setModalFalse }) => {
  const {preferences, id} = useAppSelector(state => state.User.data);

  const preferencesData = PREEFENCES.map((val, index) => ({
    ...val,
  }));

  
  const handleSubmitChange = async () => {
    await firestore()
      .collection(firebaseDB.collections.users)
      .doc(id!)
      .update({
        preferences: preferencesData.map(val => {
          const {selected, text,id} = val;
          return {selected, text,id};
        }),
      });
    setModalFalse();
  };

  return (
    <View style={styles.parent}>
    <Text style={{fontSize:SIZES.font24,fontWeight:'bold',textAlign:'center'}}>Change Preferences</Text>
      <View style={styles.flatListCtr}>
        <FlatList
          data={preferencesData}
          renderItem={renderItem}
         // numColumns={4}
          style={styles.flatListStyle}
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
    flatListStyle: {
    //   ...SPACING.mt3,
    //   ...SPACING.mh1,
    },
    flatListCtr: {
      flex: 5,
      //...SPACING.mt2,
    },
    customButtonCtr: {
      flex: 1,
      alignItems: 'center',
     paddingTop: '10%',
    },
});
export default ChangeUserPreferences;