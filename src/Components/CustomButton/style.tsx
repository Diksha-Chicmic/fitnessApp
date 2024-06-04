import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, SIZES } from '../../Constants/commonStyles';

export const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.PRIMARY.PURPLE,
        height: RFValue(42),
        width: RFValue(225),
        borderRadius: SIZES.rounding3,
    },
    text: {
        color: COLORS.SECONDARY.WHITE,
        fontSize: SIZES.font14,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40
    }
});
