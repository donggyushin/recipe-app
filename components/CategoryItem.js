import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const CategoryItem = ({ category, navigation }) => {
  const navigateToCategoryScreen = () => {
    navigation.navigate("Category", category);
  };

  return (
    <TouchableOpacity
      onPress={navigateToCategoryScreen}
      style={styles.container}
    >
      <View>
        <Text style={styles.categoryTitle}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  categoryTitle: {
    color: Colors.textColor,
  },
});

export default CategoryItem;
