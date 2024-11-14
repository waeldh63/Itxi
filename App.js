import React, {useEffect} from 'react';
import MainPage from './src/pages/MainPage';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomePage from './src/pages/WelcomePage';
import CompanyIdPage from './src/pages/CompanyIdPage';
import PickVoicePage from './src/pages/PickVoicePage';

const Stack = createStackNavigator();

function App() {
  // useEffect for the splash screen element
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000); // 3-second delay
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="CompanyIdPage"
          component={CompanyIdPage}
          options={{title: 'Company Id'}}
        />
        <Stack.Screen
          name="PickVoicePage"
          component={PickVoicePage}
          options={{
            title: 'Pick Voice ',
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            headerLeft: () => null,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
