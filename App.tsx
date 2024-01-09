/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  createNewCustomer,
  deleteExistingCustomer,
  getCustomerById,
  getCustomerList,
  updateExistingCustomer,
} from './src/network/restAPI/index';
import NavigateContiner from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <View style={backgroundStyle}>
        <NavigateContiner />
      </View>
    </Provider>
  );
}

export default App;
