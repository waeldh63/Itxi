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


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/pages/WelcomePage';
import CompanyIdPage from './src/pages/CompanyIdPage';
import PickVoicePage from './src/pages/PickVoicePage';



const Stack = createStackNavigator();

function App(): React.JSX.Element {


  //  useEffect for the splash screen element
  // hide splash screen after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000); // 3-second delay
  }, []);

  return (
    // <SafeAreaView style={styles.safeArea}>
    //   <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollView}>

    //     <MainPage/>
        
    //   </ScrollView>
    // </SafeAreaView>

<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen 
    name="WelcomePage" 
    component={WelcomePage} 
    options={{ title: 'Welcome' }} 
  />
  <Stack.Screen 
    name="CompanyIdPage" 
    component={CompanyIdPage} 
    options={{ title: 'Company Id' }} 
  />
  <Stack.Screen 
    name="PickVoicePage" 
    component={PickVoicePage} 
    options={{
      title: 'Pick Voice ' ,
      presentation: 'modal'
    }} 
  />
  <Stack.Screen 
    name="MainPage" 
    component={MainPage} 
    options={{ headerShown: false }} 
  />
</Stack.Navigator>
</NavigationContainer>




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
