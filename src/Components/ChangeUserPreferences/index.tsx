import React,{useState} from 'react';
import {FlatList, ListRenderItem, View,Text,StyleSheet} from 'react-native';
import SelectPreferences from '../SelectPrefences';
import CustomButton from '../CustomButton';
import { useAppDispatch, useAppSelector } from '../../Redux/Store';
import firestore from '@react-native-firebase/firestore';
import { firebaseDB } from '../../utils/userhandle';
import { SIZES ,COLORS} from '../../Constants/commonStyles';
import { PREEFENCES } from '../../Constants/preferencesData';
import { updateUser } from '../../Redux/Reducers/currentUser';

export interface ChangeUserPreferenceProps{
    setModalFalse:()=>void
}


  
const ChangeUserPreferences: React.FC<ChangeUserPreferenceProps> = ({ setModalFalse }) => {
 
  const { preferences, id } = useAppSelector(state => state.User.data);
  const [preferencesData, setPreferencesData] = useState(preferences);
  const dispatch = useAppDispatch();
   console.log('preference here ', preferences);
  const togglePreference = (index: number) => {
    const newPreferences = preferencesData.map((item,i)=>{
      if(i===index){

        return {...item,selected:!item.selected}
      }
      return item
    });
    console.log('dfjdnsiufnsedifni',newPreferences);
    
    setPreferencesData(newPreferences);
    console.log('Updated preferencesData:', newPreferences);
  };

  const renderItem: ListRenderItem<{ text: string; selected: boolean }> = ({ item, index }) => (
    <SelectPreferences text={item.text} selected={item.selected} onToggle={() => togglePreference(index)} />
  );

  const handleSubmitChange = async () => {
    // const updatedPreferences = preferencesData.map(val => {
    //   const { selected, text } = val;
    //   return { selected, text };
    // });
    console.log('aaaaaaaaaaa',preferencesData)
    await firestore()
      .collection(firebaseDB.collections.users)
      .doc(id!)
      .update({
        preferences: preferencesData,
      });

  // dispatch(updateUser(preferences:preferencesData)); // Update Redux state
  dispatch(updateUser({ preferences: preferencesData }));
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