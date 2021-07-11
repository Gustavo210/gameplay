import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  ModalProps
} from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void
}

export function ModalAlertView({ children, closeModal, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            {children}
          </Background>
        </View>
      </View>
      {/* <TouchableWithoutFeedback onPress={closeModal} >
      </TouchableWithoutFeedback> */}
    </Modal>
  );
}