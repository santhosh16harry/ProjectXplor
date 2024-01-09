import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Modal, Text} from 'react-native';

import styles from './styles';

const ToastMessage = ({toastMessage, toastType}) => {
  const [showToast, setshowToast] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowToast(false);
    }, 5000);
  }, []);

  return (
    <>
      {showToast && (
        <Modal
          animationType="fade"
          visible={showToast}
          transparent={true}
          onRequestClose={() => console.log('Toast Closed')}>
          <View
            style={[
              styles.container,
              {
                backgroundColor: toastType === 'Success' ? 'green' : 'red',
              },
            ]}>
            <Text style={styles.toastMessage}>{toastMessage}</Text>
          </View>
        </Modal>
      )}
    </>
  );
};

export default ToastMessage;
