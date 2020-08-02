import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { CATEGORIES } from "../datas/dummy_data";
import CategoryItem from "../components/CategoryItem";
import Colors from "../constants/Colors";

const CategoriesScreen = ({ navigation }) => {
  const navigateToCategoryMealScreen = () => {
    navigation.navigate("Category", {
      allData: true,
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item, _) => item.id}
          numColumns={2}
          renderItem={(item) => {
            return (
              <CategoryItem navigation={navigation} category={item.item} />
            );
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.seeAllMealsButton}>
          <Button
            onPress={navigateToCategoryMealScreen}
            color={Colors.backgroundColor}
            title={"See all meals"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  seeAllMealsButton: {
    marginTop: 40,
    width: "80%",
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.textColor,
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default CategoriesScreen;
