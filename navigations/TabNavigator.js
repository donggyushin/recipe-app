import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, FavoriteStackNavigator } from "./StackNavigators";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Favorite" component={FavoriteStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
