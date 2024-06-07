import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../Constants/commonStyles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: SIZES.font24,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: COLORS.SECONDARY.GREY,
        textAlign: 'center',
        marginHorizontal: 80,
        fontSize: SIZES.font13,
        
    },
    text2: {
        color: COLORS.PRIMARY.PURPLE,
        textAlign: 'center',
        fontSize: SIZES.font17,
        paddingTop: 20,
        fontWeight: '600',
        marginBottom: 40,
    },
 
        modalContainer: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 20,
            paddingHorizontal: 20,
        },
        modalButton: {
            backgroundColor: COLORS.PRIMARY.PURPLE,
            padding: 15,
            marginVertical: 10,
            borderRadius: 10,
            alignItems: 'center',
        },
        modalButtonText: {
            color: COLORS.SECONDARY.WHITE,
            fontSize: SIZES.font17,
        },
        modalBackground: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
    });
    

