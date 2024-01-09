import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

const {Navigator, Screen} = createNativeStackNavigator();

const NavigateContiner = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="HomeScreen">
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="DetailsScreen" component={DetailsScreen} />
        <Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default NavigateContiner;
