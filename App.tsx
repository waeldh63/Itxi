/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MainPage from './src/pages/MainPage';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {


  //  useEffect for the splash screen element
  // hide splash screen after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000); // 3-second delay
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollView}>

        <MainPage/>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default App;
