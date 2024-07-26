import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import WithModal from '../WithModal';
import { useAppDispatch, useAppSelector } from '../../Redux/Store';
import { setModalShown } from '../../Redux/Reducers/userHealth';
import { styles } from './style';
import { GoalModalProps } from './types';
import GoalAchieved from '../GoalAchieved';


const GoalModal: React.FC<GoalModalProps> = ({children}) => {
  // state use
  const [modalVisible, setModalVisible] = useState(false);

  // redux use
  const {
    data: {
      totalSteps,
      goals: {stepsGoal},
    },
    goalAchieved: {modalShown},
  } = useAppSelector(state => state.Health);
  const dispatch = useAppDispatch();


 // const handleModalFalse = useCallback(() => setModalVisible(false), []);
   const handleModalFalse=()=>{setModalShown(false)}
  if (totalSteps/ totalSteps >= 1 && modalShown === false) {
    setModalVisible(true);
    dispatch(setModalShown(true));
  }

  return (
    <View style={styles.parent}>
      {children}
      {modalShown ? (
        <WithModal
          modalVisible={modalVisible}
          setModalFalse={handleModalFalse}
          parentStyle={styles.withModalParent}
          barShown={false}>
          <GoalAchieved setModalFalse={handleModalFalse} />
        </WithModal>
      ) : null}
    </View>
  );
};

export default GoalModal;





