import React, {useRef} from 'react';
import {View, FlatList, ListRenderItem,Text, Alert} from 'react-native';
import { STRINGS } from '../../Constants/strings';
import CustomButton from '../../Components/CustomButton';
import SelectInterest from '../../Components/SelectInterest';
import { AddInterestProps } from '../../Constants/navigation';
import { useAppDispatch } from '../../Redux/Store';
import { updateUser } from '../../Redux/Reducers/currentUser';
import { ICONS } from '../../Constants/icons';
import { styles } from './style';

const iconSizeInterests = {
  width: 35,
  height: 35,
};

const AddInterests: React.FC<AddInterestProps> = ({navigation}) => {
  
  const dispatch = useAppDispatch();

  const  interestsData = useRef([
    {
      title: 'Fashion',
      icon: ICONS.FASHION(iconSizeInterests),
      selected: false,
    },
    {
      title: 'Organic',
      icon: ICONS.PLANT(iconSizeInterests),
      selected: false,
    },
    {
      title: 'Meditation',
      icon: ICONS.MEDITATION(iconSizeInterests),
      selected: false,
    },
    {
      title: 'Fitness',
      icon: ICONS.FITNESS(iconSizeInterests),
      selected: false,
    },
    {
      title: 'Smoke Free',
      icon: ICONS.NOSMOKING(iconSizeInterests),
      selected: false,
    },
    {
        title: 'Sleep', 
        icon: ICONS.SLEEP(iconSizeInterests), 
        selected: false
    },
    {title: 'Health', 
    icon: ICONS.HEALTH(iconSizeInterests), 
    selected: false},
    {
      title: 'Running',
      icon: ICONS.RUNNING(iconSizeInterests),
      selected: false,
    },
    {title: 'Vegan',
     icon: ICONS.VEGAN(iconSizeInterests),
     selected: false},
  ]);

  // functions
  const goToAddGender = () => {
    const selectedItems: Array<{title: string; selected: boolean}> = interestsData.current .map(item => {
        const {title, selected} = item;
        return {title, selected};
      }).filter(item => item.selected);
    if (selectedItems.length===0) {
      Alert.alert(
          "Selection Required",
          "Please select at least one interest before proceeding.",
          [{ text: "OK" }]
      );
  } else {
      console.log('add preferences');
      dispatch(updateUser({ interests:selectedItems }));
      navigation.push('AddGender');
  }
  };

  const renderItem: ListRenderItem<{
    title: string;
    icon: React.ReactNode;
    selected: boolean;
  }> = ({item}) => <SelectInterest item={item} />;
  return (
    <View style={styles.parent}>
       <Text style={styles.heading}>{STRINGS.INTEREST.HEADING}</Text>
      <FlatList
        data={interestsData.current}
        renderItem={renderItem}
        numColumns={3}
        style={styles.flatListStyle}
      />
      <View style={styles.buttonStyle}>
        <CustomButton
          title='Continue'
          onPress={goToAddGender}
          parentStyle={styles.but}
        />
      </View>
    </View>
  );
}



export default AddInterests;

