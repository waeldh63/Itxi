import React from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
const MainPage = () => {
  return (
    <View style={styles.mainPageContainer}>
      <Text style={styles.text}>MainPage</Text>
  </View>

  )
}
const styles = StyleSheet.create({

    mainPageContainer: {
      flex: 1,
      backgroundColor: "#d3d3d3",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#ffffff",
      fontSize: 24,
    },
  });
export default MainPage