import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Settings from '../../../Components/Premium';
import { IMAGES } from '../../../Constants/images';
import { COLORS ,SIZES} from '../../../Constants/commonStyles';
import CustomButton from '../../../Components/CustomButton';
const screenWidth = Dimensions.get('screen').width;

const data = [
  {
    image: IMAGES.SETTINGS_PREM2,
    heading: 'Get a Personal Trainer',
    text: 'Our premium package includes a weekly 1-hour session with a personal trainer',
  },
  {
    image: IMAGES.SETTINGS,
    heading: 'Go premium, get unlimited access',
    text: 'When you subscribe, you get instant unlimited access to all resources',
  },
  {
    image: IMAGES.SETTINGS_PREM,
    heading: 'Personalised Plans, workout routine',
    text: 'Custom workout routines tailored to your fitness level and goals',
  },
];
function Premium(){
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = () => {
    console.log('press');
  };

  const renderCarouselItem = ({ item }: any) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.imageCon} />
      <Text style={styles.heading}>{item.heading}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        height={screenWidth / 2 + 160} // Adjust height to accommodate text
        autoPlay
        data={data}
        scrollAnimationDuration={2000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={renderCarouselItem}
      />
      <View style={styles.dotContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: currentIndex === index ? COLORS.SECONDARY.WHITE : COLORS.SECONDARY.GREY},
              {height: currentIndex === index ? 13:8},
              {width: currentIndex === index ? 13:8}

            ]}
          />
        ))}
      </View>
   <View style={{flex:1,marginTop:'-18%'}}>
      <Settings text={4.99} textY='/month' />
      <Settings text={89.99} textY='/year' />
      <Text style={styles.text2}>Recurring billing, cancel anytime</Text>
      <Text style={styles.text3}>
        Contrary to what many people think, eating healthy is not easier than said than done. Just a few good habits
        can make a great difference.
      </Text>
      <CustomButton title='Purchase' onPress={handlePress} />
      </View>
    </View>
  );
}


export default Premium

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    alignItems: 'center',
    paddingBottom: 10, // Add padding to space out the text
  },
  imageCon: {
    width: screenWidth,
    height: screenWidth / 2,
  },
  heading: {
    fontSize: SIZES.fontH3,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10, // Adjust margin to space out from the image
  },
  text: {
    fontSize: SIZES.font14,
    color: COLORS.SECONDARY.GREY,
    textAlign: 'center',
    marginHorizontal: '9%',
  },
  text2: {
    textAlign: 'center',
    fontSize: SIZES.font13,
    fontWeight: 'bold',
    marginTop: '3%',
  },
  text3: {
    textAlign: 'center',
    fontSize: SIZES.font11,
    marginHorizontal: '8%',
    marginBottom: '2%',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   // marginVertical: 10,
   position:'absolute',
   top:screenWidth/2.3,
   left:screenWidth/2.5
  },
  dot: {
   
    borderRadius: 6,
    marginHorizontal: 2,
  },
});

