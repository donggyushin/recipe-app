import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import { MainStackNavigator, FavoriteStackNavigator } from "./StackNavigators";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.mainColor,
        inactiveTintColor: Colors.textColor,
        style: {
          backgroundColor: Colors.tabBarBackgroundColor,
        },
      }}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Favorite" component={FavoriteStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
