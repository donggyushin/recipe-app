import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator from "./navigations/TabNavigator";
import { Alert } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    findCoordinates();
  });

  const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);

        console.log(location);
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
