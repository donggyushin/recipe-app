import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Colors from "../constants/Colors";
import Spinner from "react-native-loading-spinner-overlay";
import { MEALS } from "../datas/dummy_data";
import MealItemComponent from "../components/MealItemComponent";

const CategorieMealScreen = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const category = route.params;
  const { allData } = route.params;

  useEffect(() => {
    fetchingMeals();
    navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: false,
    });

    return function cleanup() {
      navigation.dangerouslyGetParent().setOptions({
        tabBarVisible: true,
      });
    };
  }, []);

  const fetchingMeals = () => {
    if (allData) {
      setMeals(MEALS);
      setLoading(false);
      return;
    }

    const meals = MEALS.filter((meal) => {
      if (meal.categoryIds.includes(category.id)) {
        return true;
      } else {
        return false;
      }
    });
    setMeals(meals);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={"Fetching meals..."}
        textStyle={styles.spinnerTextStyle}
      />
      <FlatList
        data={meals}
        keyExtractor={(item, _) => item.id}
        renderItem={(item) => (
          <MealItemComponent navigation={navigation} meal={item.item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default CategorieMealScreen;
