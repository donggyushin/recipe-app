import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../datas/dummy_data";
import CategoryItem from "../components/CategoryItem";
import Colors from "../constants/Colors";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item, _) => item.id}
        numColumns={2}
        renderItem={(item) => {
          return <CategoryItem navigation={navigation} category={item.item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});

export default CategoriesScreen;
