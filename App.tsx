import React from 'react';
import SplashScreen from './src/pages/SplashScreen';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import Profile from './src/pages/Profile';
import Home from './src/pages/home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentMethod from './src/pages/PaymentMethod';
import FlashMessage from 'react-native-flash-message';

import Chatpage from './src/pages/Chatpage';
import History from './src/pages/History';
import CheckoutScreen from './src/pages/CheckoutScreen';
import ChartPage from './src/pages/CartPage';
import ProductPage from './src/pages/ProductPage';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chatpage"
          component={Chatpage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartPage"
          component={ChartPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductPage"
          component={ProductPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
