import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const CategorieMealScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>CategorieMealScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
});

export default CategorieMealScreen;
