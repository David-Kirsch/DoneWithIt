import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View>
      <View style={styles.delete} />
      <View style={styles.close} />
      <Image style={styles.photo} source={require("../assets/chair.jpg")} />
    </View>
  );
}
const styles = StyleSheet.create({
  photo: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  close: {
    width: 100,
    height: 100,
    color: "green",
    position: "absolute",
    top: 150,
  },
  delete: {
    width: 100,
    height: 100,
    color: "red",
    position: "absolute",
    top: 150,
  },
});

export default ViewImageScreen;
