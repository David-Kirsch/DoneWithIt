import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function App() {
  console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <TouchableHighlight onPress={() => console.log("tapped")}>
        <Image
          blurRadius={1}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
