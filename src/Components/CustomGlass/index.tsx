

import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { ICONS } from "../../Constants/icons";

interface GlassProps {
    isFilled: boolean;
    onPress: (isFilled: boolean) => void; // Function to handle press
}

interface IconSize {
    height: number;
    width: number;
}

const iconSize: IconSize = {
    height: 42,
    width: 42,
};

const CustomGlass: React.FC<GlassProps> = ({ isFilled, onPress }) => {
    const [filled, setFilled] = useState<boolean>(isFilled);

    const handlePress = () => {
        setFilled(!filled);
        onPress(!filled); // Call parent component's onPress function
    };

    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} >
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

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,


    },
    glassBox: {
        position: "relative"
    },

    iconBox: {
        position: "absolute",
        left: 16,
        top: 20,
    },
});

export default CustomGlass;
