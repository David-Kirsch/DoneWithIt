import React from "react";
import { Alert, Button, View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function WelcomeBtn(props) {
  return (
    <View style={styles.login} backgroundColor={props.color}>
      <Button title={props.title} color="white" onPress={props.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    width: "90%",
    borderRadius: 20,
    height: 40,
    bottom: 20,
    margin: 10,
  },
});

export default WelcomeBtn;
