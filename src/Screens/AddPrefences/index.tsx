import React, { useState } from "react";
import { View, FlatList, Text, Alert } from "react-native";
import SelectPreferences from "../../Components/SelectPrefences";
import CustomButton from "../../Components/CustomButton";
import { NAVIGATION, AddPrefencesProps } from "../../Constants/navigation";
import { useAppDispatch } from "../../Redux/Store";
import { updateUser } from "../../Redux/Reducers/currentUser";
import { STRINGS } from "../../Constants/strings";
import { styles } from "./style";

type Preference = {
    id: string;
    text: string;
    selected: boolean;
};

const preferencesData: Preference[] = [
    { id: '1', text: 'Weight loss', selected: false },
    { id: '2', text: 'Better sleeping habit', selected: false },
    { id: '3', text: 'Track my nutrition', selected: false },
    { id: '4', text: 'Improve overall fitness', selected: false }
];

const AddPreferences = ({ navigation }: AddPrefencesProps) => {
    const [preferences, setPreferences] = useState<Preference[]>(preferencesData);
    const dispatch = useAppDispatch();

    const handleToggle = (id: string) => {
        setPreferences(prevPreferences =>
            prevPreferences.map(pref =>
                pref.id === id ? { ...pref, selected: !pref.selected } : pref
            )
        );
    };

    const renderItem = ({ item }: { item: Preference }) => (
        <SelectPreferences
            text={item.text}
            selected={item.selected}
            onToggle={() => handleToggle(item.id)}
        />
    );

    const handlePress = () => {
        const isAnySelected = preferences.some(pref => pref.selected);

        if (!isAnySelected) {
            Alert.alert(
                "Selection Required",
                "Please select at least one preference before proceeding.",
                [{ text: "OK" }]
            );
        } else {
            console.log('add preferences');
            dispatch(updateUser({ preferences: preferences }));
            navigation.navigate(NAVIGATION.ADDINTEREST);
        }
    };

    return (
        <View >
            <Text style={styles.heading}>{STRINGS.PREFERENCES.HEADING}</Text>
            <Text style={styles.text}>{STRINGS.PREFERENCES.TEXT}</Text>
            <FlatList
                data={preferences}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={preferences}
            />
            <CustomButton title={STRINGS.BUTTON.TITLE} onPress={handlePress} />
        </View>
    );
};

export default AddPreferences;
