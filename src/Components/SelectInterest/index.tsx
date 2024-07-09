import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./style";
interface SelectInterestProps {
    text: string;
    icon: React.ReactNode;
    selected: boolean;
    onSelect: () => void;
}

const SelectInterest: React.FC<SelectInterestProps> = ({ text, icon, selected, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect} >
            <View style={styles.contentContainer}>
                <View style={[styles.iconContainer, selected && styles.selected]}>
                    {icon}
                </View>
                <Text style={[styles.text, selected && styles.selectedText]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


export default SelectInterest;
