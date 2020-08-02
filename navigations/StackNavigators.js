import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategorieMealScreen from "../screens/CategoryMealScreen";
import MealScreen from "../screens/MealScreen";
import FavoritesScreen from "../screens/FavotitesScreen";
import Colors from "../constants/Colors";
const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.backgroundColor,
        },
        headerTintColor: Colors.mainColor,
      }}
      initialRouteName="Categories"
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="Category"
        options={({ route }) => ({
          title: route.params.title,
        })}
        component={CategorieMealScreen}
      />
      <Stack.Screen name="Meal" component={MealScreen} />
    </Stack.Navigator>
  );
};

export const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.backgroundColor,
        },
        headerTintColor: Colors.mainColor,
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Meal" component={MealScreen} />
    </Stack.Navigator>
  );
};
