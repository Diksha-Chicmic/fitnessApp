import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import InstaStory, { IUserStory } from 'react-native-insta-story';
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../Constants/commonStyles";
import { AppNavigationProps } from "../../Constants/navigation";
import { StoryData } from "../../utils/common";
import { IMAGES } from "../../Constants/images";
import { useAppSelector } from '../../Redux/Store';



     
   
const Story = () => {
  const navigation = useNavigation<AppNavigationProps>();

  
  const [stories, setStories] = useState<IUserStory[]>([]);
  const { id: userId } = useAppSelector((state) => state.User.data);

  const fetchStories = async () => {
    try {
      const snapshot = await firestore().collection('stories').get();
      const storiesData = snapshot.docs.map(doc => doc.data());

      setStories([...storiesData]);
      console.log('Fetched stories:', storiesData);
    } catch (error) {
      console.error('Error fetching stories:', error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);
  console.log('adad', stories)

  return (
    <View>
      {
        stories.length > 0 &&
        <InstaStory
          data={stories}
          duration={10}
          avatarSize={55}
          pressedBorderColor={COLORS.SECONDARY.GREY}
          unPressedBorderColor={COLORS.PRIMARY.PURPLE}
          avatarImageStyle={styles.avatarImage}
        />
      }


    </View>
  );
};

const styles = StyleSheet.create({
  avatarImage: {
    height: '90%',
    width: '90%'
  },


})
export default Story