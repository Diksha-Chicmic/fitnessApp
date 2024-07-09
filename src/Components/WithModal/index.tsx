// libs
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
export type WithModalProps = {
    modalVisible: boolean;
    setModalFalse: () => void;
    children: React.ReactElement | null;
    parentStyle?: StyleProp<ViewStyle>;
    barShown?: boolean;
  };
const WithModal: React.FC<WithModalProps> = ({
  modalVisible,
  children,
  setModalFalse,
  parentStyle,
  barShown = true,
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={setModalFalse}
      swipeDirection={'down'}
      avoidKeyboard={false}
      statusBarTranslucent={true}
      style={[styles.parent, parentStyle]}
      propagateSwipe={true}>
      {barShown ? (
        <View style={styles.horizontalLineCtr}>
          <View style={styles.horizontalLine} />
        </View>
      ) : null}
      <View style={styles.modalCtr}>{children}</View>
    </Modal>
  );
};

export default WithModal;