import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { COLORS, SIZES } from '../../Constants/commonStyles'
import { SettingsProps } from './types'
import { styles } from './style'

const Settings: React.FC<SettingsProps> = ({ title, onPress, toggle = false }) => {
    const [isSwitch, setIsSwitch] = useState<boolean>(false)
    return (

        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
            {toggle ? (
                <View style={[ styles.toggleStyles,isSwitch ? null: { borderColor: COLORS.SECONDARY.LIGHTGREY,},]}>

                    <ToggleSwitch
                        isOn={isSwitch}
                        onColor="green"
                        offColor="white"
                        size="medium"
                        onToggle={()=>setIsSwitch(!isSwitch)}
                    />
                </View> ) : null
            }
        </TouchableOpacity>


    )
}


export default Settings