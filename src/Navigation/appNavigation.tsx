import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect,useState } from "react";
import { View,Modal } from "react-native";
import { TouchableOpacity } from "react-native";
import AuthNavigator from "./authNavigation";
import { useAppSelector, useAppDispatch } from "../Redux/Store";
import Steps from "../Screens/MainScreens/Steps";
import Water from "../Screens/MainScreens/Water";
import Nutrition from "../Screens/MainScreens/Nutrition ";
import Home from "../Screens/MainScreens/Home";
import PostDetails from "../Components/PostDetails";
import { homeStackParamList } from "../Constants/navigation";
import { COLORS } from "../Constants/commonStyles";
import { ICONS } from "../Constants/icons";
import ChooseFood from "../Components/AddDishes";
const Stack = createNativeStackNavigator<homeStackParamList>();



const AppNavigator = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);
    };
  
    const closeModal = () => {
      setModalVisible(false);
    };
  
    return (
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="HomeNavigator"
          screenOptions={{
            headerBackTitle: 'Back',
            headerShadowVisible: false,
            headerShown: true,
            headerTitle: "",
            headerStyle: { backgroundColor: COLORS.PRIMARY.GREY },
          }}
        >
          <Stack.Screen
            name="HomeNavigator"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Nutrition"
            component={Nutrition}
            options={{
              headerRight: () => (
                <TouchableOpacity onPress={openModal}>
                  {ICONS.PLUS({ height: 18, width: 18 })}
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="DailySteps" component={Steps} />
          <Stack.Screen name="WaterIntake" component={Water} />
          <Stack.Screen name="PostDetails" component={PostDetails} />
        </Stack.Navigator>
  
        <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <ChooseFood setModalFalse={closeModal} />
        </Modal>
      </View>
    )
};

export default AppNavigator;
