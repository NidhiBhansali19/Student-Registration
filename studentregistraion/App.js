
import React, { Component } from "react";
import {Text} from "react-native";
import SignIn from './src/Signin';
import SignUp from './src/Signup';
import Home from './src/Dashboard';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: Home
  }
},{
        initialRouteName: "SignUp"
});
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;  


