import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { screenWidth } from "../constants/Sizes";
import Colors from "../constants/Colors";

const MealItemComponent = ({ meal, navigation }) => {
  const { title, imageUrl, duration } = meal;

  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    Image.getSize(imageUrl, (width, height) => {
      const imageHeight = (screenWidth * height) / width;
      setImageHeight(imageHeight);
    });
  });

  const navigateToDetailPage = () => {
    navigation.navigate("Meal", meal);
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToDetailPage}>
        <Image
          style={{
            width: "100%",
            height: imageHeight,
          }}
          source={{
            uri: imageUrl,
          }}
        />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.duration}>
          about <Text style={styles.minutes}>{duration}</Text>mins
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
  duration: {
    color: "white",
  },
  minutes: {
    color: Colors.mainColor,
  },
  card: {
    padding: 7,
  },
});

export default MealItemComponent;
