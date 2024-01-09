import * as React from 'react';
import {Modal, View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

interface Props {
  title: String;
  onInputChange: (text:string) => void;
  leftButtonTitle: String;
  rightButtonTitle: String;
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
}

const CustomerIDModal = ({
  title,
  onInputChange,
  leftButtonTitle,
  rightButtonTitle,
  onLeftButtonPress,
  onRightButtonPress,
}: Props) => {
  const renderButton = (isLeft: boolean) => (
    <TouchableOpacity
      style={styles.button}
      onPress={isLeft ? onLeftButtonPress : onRightButtonPress}>
      <Text style={styles.buttontext}>
        {isLeft ? leftButtonTitle : rightButtonTitle}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType={'fade'}
      visible={true}
      transparent={true}
      onRequestClose={() => console.log('Toast Closed')}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          <TextInput style={styles.input} onChangeText={onInputChange} />
          <View style={styles.buttonContainer}>
            {renderButton(true)}
            {renderButton(false)}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomerIDModal;
