import * as React from 'react';
import {useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import CustomerList from '../../components/CustomerList';
import Confirmation from './../../assets/svg/Confirmation';

import styles from './styles';

const ConfirmationScreen = () => {
  const navigation = useNavigation();

  const {selectedCustomer} = useSelector(state => state.home);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Confirmation screen',
      headerTitleStyle: {fontSize: 20},
      headerLeft: () => <></>,
    });
  }, []);

  const handleButtonPress = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.confirmationIcon}>
        <Confirmation />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {'Customer details added or updated successfully'}
        </Text>
      </View>
      <View style={styles.customerCard}>
        <CustomerList data={selectedCustomer} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.button]} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>{'Back to Home'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
