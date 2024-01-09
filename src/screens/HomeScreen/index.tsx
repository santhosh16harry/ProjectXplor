import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {
  deleteExistingCustomer,
  getCustomerById,
  getCustomerList,
} from '../../network/restAPI/index';
import {
  setcustomerList,
  setSelectedCustomer,
} from '../../redux/slices/homeSlice';
import CustomerList from '../../components/CustomerList';
import CustomerIDModal from '../../components/CustomerIDModal';
import UserIcon from '../../assets/svg/UserIcon';
import HamburgerIcon from '../../assets/svg/HamburgerIcon';

import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(true);
  const [isDeletePressed, setIsDeletePressed] = useState(false);
  const [showUserIDModal, setShowUserIDModal] = useState(false);
  const [customerID, setCustomerID] = useState('');
  const {customersList} = useSelector(state => state.home);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Xplor Home',
      headerTitleStyle: {fontSize: 25},
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            Alert.alert('Functionality yet to be developed');
          }}>
          <HamburgerIcon />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            Alert.alert('Functionality yet to be developed');
          }}>
          <UserIcon />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    getCustomersData();
  }, [isFocused, isDeletePressed]);

  const getCustomersData = async () => {
    const response = await getCustomerList();
    setIsLoading(false);
    dispatch(setcustomerList(response));
  };

  const onUpdateCustomerPress = async (id: string) => {
    setShowUserIDModal(false);
    setIsLoading(true);
    const response = await getCustomerById(id);
    const isResponseEmpty = Object.keys(response).length === 0;
    !isResponseEmpty && dispatch(setSelectedCustomer(response));
    setIsLoading(false);
    !isResponseEmpty && navigation.navigate('DetailsScreen');
  };

  const onDeletePress = (id: string) => {
    setIsDeletePressed(false);
    Alert.alert(
      'User Deletion',
      'Are you sure you want to delete this customer',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            console.log('Delete Pressed');
            setIsLoading(true);
            const deletionStatus = await deleteExistingCustomer(id);
            if (deletionStatus !== '500') {
              setIsDeletePressed(true);
            } else {
              setIsLoading(false);
              Alert.alert(
                'Deletion of the user is unsuccessful. Please try after sometime',
              );
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

  const renderLoader = () => (
    <View style={styles.loaderView}>
      <ActivityIndicator animating={isLoading} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {showUserIDModal && (
        <CustomerIDModal
          title={'Enter User ID'}
          onInputChange={setCustomerID}
          leftButtonTitle={'Back'}
          rightButtonTitle={'Confirm'}
          onLeftButtonPress={() => setShowUserIDModal(false)}
          onRightButtonPress={() => onUpdateCustomerPress(customerID)}
        />
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{'Customers List'}</Text>
      </View>
      {isLoading ? (
        renderLoader()
      ) : (
        <>
          <View style={styles.listContainer}>
            {customersList.length !== 0 && (
              <FlatList
                data={customersList}
                contentContainerStyle={{gap: 16}}
                renderItem={({item}) => (
                  <CustomerList
                    data={item}
                    onEditPress={() => onUpdateCustomerPress(item.id)}
                    onDeletePress={() => onDeletePress(item.id)}
                  />
                )}
              />
            )}
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={[styles.button, {borderRightWidth: 0.25}]}
              onPress={() => {
                dispatch(setSelectedCustomer(null));
                navigation.navigate('DetailsScreen');
              }}>
              <Text style={styles.buttonText}>{'Add new customer'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {borderLeftWidth: 0.25}]}
              onPress={() => setShowUserIDModal(true)}>
              <Text style={styles.buttonText}>{'Update customer'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
