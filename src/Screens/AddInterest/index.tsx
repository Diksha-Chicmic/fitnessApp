// libs
import React, {useRef} from 'react';
import {View, FlatList, ListRenderItem,Text} from 'react-native';
import { STRINGS } from '../../Constants/strings';
//custom
import CustomButton from '../../Components/CustomButton';
import SelectInterest from '../../Components/SelectInterest';
//import {styles} from './styles';
import { AddInterestProps } from '../../Constants/navigation';
import { useAppDispatch } from '../../Redux/Store';
import { updateUser } from '../../Redux/Reducers/currentUser';
import { INTERESETS } from '../../Constants/interestData';
import { styles } from './style';
const renderItem: ListRenderItem<{
  title: string;
  icon: React.ReactNode;
  selected: boolean;
}> = ({item}) => <SelectInterest item={item} />;

const AddInterests: React.FC<AddInterestProps> = ({navigation}) => {
  // redux use
  const dispatch = useAppDispatch();

  // ref use
  const interestsData = useRef(INTERESETS);
  // functions
  const goToAddGender = () => {
    const selectedItems: Array<{title: string; selected: boolean}> =
      interestsData.current
        .map(item => {
          const {title, selected} = item;
          return {title, selected};
        })
        .filter(val => val);
    dispatch(updateUser({interests: selectedItems}));
    navigation.push('AddGender');
  };
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
        />
      </View>
    </View>
  );
};

export default AddInterests;



// import React, { useState } from "react";
// import { Text, View, SafeAreaView, FlatList, Alert } from "react-native";
// import SelectInterest from "../../Components/SelectInterest";
// import { INTERESETS } from "../../Constants/interestData";
// import { ICONS } from "../../Constants/icons";
// import CustomButton from "../../Components/CustomButton";
// import { STRINGS } from "../../Constants/strings";
// import { NAVIGATION,AddInterestProps } from "../../Constants/navigation";
// import { useAppDispatch } from "../../Redux/Store";
// import { updateUser } from "../../Redux/Reducers/currentUser";
// import { styles } from "./style";

// const style = {
//     width: 35,
//     height: 35,
// };

// type Interest = {
//     title: string,
//     icon: any,
//     selected:boolean,
//    // onPress:()=>void
// };


// const AddInterest = ({navigation}:AddInterestProps) => {
//     const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
//     const dispatch = useAppDispatch();
  
//     const handleSelect = (title: string) => {
//         setSelectedInterests(prevState =>
//             prevState.includes(title)
//                 ? prevState.filter(interest => interest !== title)
//                 : [...prevState, title]
//         );
//     };

//     const handlePress = () => {
//         if (selectedInterests.length === 0) {
//             Alert.alert(
//                 "Selection Required",
//                 "Please select at least one interest before proceeding.",
//                 [{ text: "OK" }]
//             );
//         } else {
//             console.log('Proceed to the next step...');
//             dispatch(updateUser({ interests: selectedInterests }));
//             navigation.navigate(NAVIGATION.ADDGENDER);
//         }
//     };
//      console.log(selectedInterests,'see');
//     const renderItem = ({ item }: { item: Interest }) => (
//         <SelectInterest
//             text={item.title}
//             icon={item.icon}
//             selected={selectedInterests.includes(item.title)}
//             onSelect={() => handleSelect(item.title)}
//         />
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.heading}>{STRINGS.INTEREST.HEADING}</Text>
//             <FlatList
//                 data={INTERESETS}
//                 renderItem={renderItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 contentContainerStyle={styles.interestsContainer}
//                 numColumns={3}
//             />
//             <CustomButton title='Continue' onPress={handlePress} />
//         </SafeAreaView>
//     );
// };

// export default AddInterest;
