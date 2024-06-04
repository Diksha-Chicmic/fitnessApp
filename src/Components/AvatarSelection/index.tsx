import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { AVATARS, AvatarKey } from '../../Constants/icons';
import { styles } from './style';
interface AvatarSelectorProps {
    onSelect: (avatar: AvatarKey) => void;
}

const avatarsList: AvatarKey[] = ['AVATAR1', 'AVATAR2', 'AVATAR3', 'AVATAR4'];

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ onSelect }) => {
    const [selectedAvatar, setSelectedAvatar] = useState<AvatarKey | null>(null);

    const handleSelect = (avatar: AvatarKey) => {
        setSelectedAvatar(avatar);
        onSelect(avatar);
    };

    const renderItem = ({ item }: { item: AvatarKey }) => {
        const AvatarComponent = AVATARS[item];
        return (
            <TouchableOpacity
                style={[
                    styles.avatarContainer,
                    selectedAvatar === item && styles.selected
                ]}
                onPress={() => handleSelect(item)}
            >
                <AvatarComponent />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.conatiner}>
            <FlatList
                data={avatarsList}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContentContainer}
            />
        </View>
    );
};



export default AvatarSelector;
