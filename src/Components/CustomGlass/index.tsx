import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { ICONS } from "../../Constants/icons";
import { styles } from "./style";
interface GlassProps {
    isFilled: boolean;
    onPress: (isFilled: boolean) => void; // Function to handle press
    disable:boolean
}

interface IconSize {
    height: number;
    width: number;
}

const iconSize: IconSize = {
    height: 42,
    width: 42,
};

const CustomGlass: React.FC<GlassProps> = ({ isFilled, onPress,disable }) => {
    const [filled, setFilled] = useState<boolean>(isFilled);

    const handlePress = () => {
        setFilled(!filled);
        onPress(!filled); // Call parent component's onPress function
    };

    return (

        <View style={styles.container}>
            <TouchableOpacity  onPress={handlePress} >
                {filled ? (
                    ICONS.GLASSFILLED(iconSize)
                ) : (
                    <>
                        {ICONS.EMPTYGLASS(iconSize)}
                        <View style={styles.iconBox}>{ICONS.PLUS({ height: 15, width: 15 })}</View>
                    </>
                )}
            </TouchableOpacity>
        </View>

    );
};



export default CustomGlass;

