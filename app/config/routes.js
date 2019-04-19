import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import getSlideFromRightTransition from "react-navigation-slide-from-right-transition";
import SplashScreen from "../screens/Splash";
import Home from "../screens/Home";

const App = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        title: "SplashScreen",
        header: () => null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        header: () => null
      }
    }
  },
  {
    transitionConfig: getSlideFromRightTransition
  },
  {
    initialRouteName: "SplashScreen"
  }
);

const RootNavigator = createAppContainer(App);

export default RootNavigator;
