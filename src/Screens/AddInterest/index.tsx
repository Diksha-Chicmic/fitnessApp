import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList, Alert } from "react-native";
import SelectInterest from "../../Components/SelectInterest";
import { ICONS } from "../../Constants/icons";
import CustomButton from "../../Components/CustomButton";
import { STRINGS } from "../../Constants/strings";
import { NAVIGATION,AddInterestProps } from "../../Constants/navigation";
import { useAppDispatch } from "../../Redux/Store";
import { updateUser } from "../../Redux/Reducers/currentUser";
import { styles } from "./style";

const style = {
    width: 35,
    height: 35,
};

type Interest = {
    title: string,
    icon: any
};

const interests: Interest[] = [
    { title: 'Fashion', icon: ICONS.FASHION(style) },
    { title: 'Organic', icon: ICONS.PLANT(style) },
    { title: 'Meditation', icon: ICONS.MEDITATION(style) },
    { title: 'Fitness', icon: ICONS.FITNESS(style) },
    { title: 'Smoke free', icon: ICONS.NOSMOKING(style) },
    { title: 'Sleep', icon: ICONS.SLEEP(style) },
    { title: 'Health', icon: ICONS.HEALTH(style) },
    { title: 'Running', icon: ICONS.RUNNING(style) },
    { title: 'Vegan', icon: ICONS.VEGAN(style) }
];

const AddInterest = ({navigation}:AddInterestProps) => {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    const handleSelect = (title: string) => {
        setSelectedInterests(prevState =>
            prevState.includes(title)
                ? prevState.filter(interest => interest !== title)
                : [...prevState, title]
        );
    };

    const handlePress = () => {
        if (selectedInterests.length === 0) {
            Alert.alert(
                "Selection Required",
                "Please select at least one interest before proceeding.",
                [{ text: "OK" }]
            );
        } else {
            console.log('Proceed to the next step...');
            dispatch(updateUser({ interests: selectedInterests }));
            navigation.navigate(NAVIGATION.ADDGENDER);
        }
    };

    const renderItem = ({ item }: { item: Interest }) => (
        <SelectInterest
            text={item.title}
            icon={item.icon}
            selected={selectedInterests.includes(item.title)}
            onSelect={() => handleSelect(item.title)}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>{STRINGS.INTEREST.HEADING}</Text>
            <FlatList
                data={interests}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.interestsContainer}
                numColumns={3}
            />
            <CustomButton title='Continue' onPress={handlePress} />
        </SafeAreaView>
    );
};

export default AddInterest;
