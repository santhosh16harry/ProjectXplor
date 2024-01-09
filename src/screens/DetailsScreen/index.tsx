import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {
  createNewCustomer,
  updateExistingCustomer,
} from '../../network/restAPI/index';
import {setSelectedCustomer} from '../../redux/slices/homeSlice';
import BackIcon from './../../assets/svg/BackIcon';
import {customerDataMock} from '../../utils/mockData';
import ToastMessage from '../../components/Toast';

import styles from './styles';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const height = Dimensions.get('screen').height;

  const {selectedCustomer, customersList} = useSelector(state => state.home);
  const isAddCustomer = selectedCustomer === null;

  const [isLoading, setIsLoading] = useState(false);
  const [salutation, setSalutation] = useState(
    !isAddCustomer ? selectedCustomer.salutation : '',
  );
  const [initials, setInitials] = useState(
    !isAddCustomer ? selectedCustomer.initials : '',
  );
  const [firstName, setFirstName] = useState(
    !isAddCustomer ? selectedCustomer.firstname : '',
  );
  const [lastName, setLastName] = useState(
    !isAddCustomer ? selectedCustomer.lastname : '',
  );
  const [gender, setGender] = useState(
    !isAddCustomer ? selectedCustomer.gender : '',
  );
  const [countryName, setCountryName] = useState(
    !isAddCustomer ? selectedCustomer.country_name : '',
  );
  const [language, setLanguage] = useState(
    !isAddCustomer ? selectedCustomer.primary_language : '',
  );
  const [email, setEmail] = useState(
    !isAddCustomer ? selectedCustomer.email : '',
  );
  const [phoneNumber, setPhoneNumber] = useState(
    !isAddCustomer ? selectedCustomer.phone_Number : '',
  );
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Details screen',
      headerTitleStyle: {fontSize: 25},
      headerLeft: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
      ),
    });
  }, []);

  const renderLoader = () => (
    <View style={styles.loaderView}>
      <ActivityIndicator animating={isLoading} />
    </View>
  );

  const detailInput = (placeholder, value, setValue) => {
    const check =
      (value === '' || (placeholder === 'Email' && emailError)) && isError;
    return (
      <View style={styles.detailInputContainer}>
        <Text style={styles.detailInputTitle}>{`${placeholder}:`}</Text>
        <View
          style={[
            styles.textInput,
            {height: height * 0.05, borderWidth: check ? 0.2 : 0},
          ]}>
          <TextInput
            style={styles.container}
            placeholder={`Enter ${placeholder}`}
            value={value}
            onChangeText={setValue}
            onFocus={() => isError && setIsError(!isError)}
          />
        </View>
        {check && (
          <View style={{height: height * 0.025}}>
            <Text style={styles.errorText}>
              {placeholder === 'Email'
                ? 'Enter valid Email ID'
                : 'This field cant be empty'}
            </Text>
          </View>
        )}
      </View>
    );
  };

  const handleButtonPress = async () => {
    let checkList = [
      initials,
      firstName,
      lastName,
      gender,
      countryName,
      language,
      email,
      phoneNumber,
    ];

    if (isAddCustomer) checkList = [...checkList, password, confirmPassword];

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailCheck = emailRegex.test(email);
    setEmailError(!emailCheck);
    const error = checkList?.some(check => check === '');

    if (error) setIsError(error);
    else {
      const customerID = isAddCustomer
        ? String(Number(customersList[customersList.length - 1].id + 1))
        : selectedCustomer.id;
      const apiObject = {
        ...customerDataMock,
        id: customerID,
        salutation: salutation,
        initials: initials,
        gender: gender,
        firstname: firstName,
        lastname: lastName,
        country_name: countryName,
        primary_language: language,
        email: email,
        phone_Number: phoneNumber,
        rowKey: customerID,
      };
      let response;
      setIsLoading(true);
      if (isAddCustomer) {
        response = await createNewCustomer({...apiObject, password});
      } else {
        response = await updateExistingCustomer(apiObject);
      }
      setIsLoading(false);
      if (response !== '500') {
        dispatch(setSelectedCustomer(apiObject));
        navigation.navigate('ConfirmationScreen');
      } else {
        setShowToast(true);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {showToast && (
        <ToastMessage
          toastMessage={'Some error occured. Please try after sometime'}
          toastType={'Failure'}
        />
      )}
      {isLoading ? (
        renderLoader()
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {isAddCustomer
                ? 'Enter New Customer Details:'
                : 'Update existing details'}
            </Text>
          </View>
          <ScrollView style={styles.scrollView}>
            {detailInput('Salutation', salutation, setSalutation)}
            {detailInput('Initials', initials, setInitials)}
            {detailInput('Firstname', firstName, setFirstName)}
            {detailInput('LastName', lastName, setLastName)}
            {detailInput('Gender', gender, setGender)}
            {detailInput('Country Name', countryName, setCountryName)}
            {detailInput('Language', language, setLanguage)}
            {detailInput('Email', email, setEmail)}
            {detailInput('Phone number', phoneNumber, setPhoneNumber)}
            {isAddCustomer && detailInput('Password', password, setPassword)}
            {isAddCustomer &&
              detailInput(
                'Confirm password',
                confirmPassword,
                setConfirmPassword,
              )}
          </ScrollView>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={handleButtonPress}>
              <Text style={styles.buttonText}>
                {isAddCustomer ? 'Add Customer' : 'Update Customer'}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default DetailsScreen;
