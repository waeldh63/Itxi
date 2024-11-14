import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import MainPage from './src/pages/MainPage';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomePage from './src/pages/WelcomePage';
import CompanyIdPage from './src/pages/CompanyIdPage';
import PickVoicePage from './src/pages/PickVoicePage';

import {IconButton} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsPage from './src/pages/SettingsPage';

const Stack = createStackNavigator();

function App() {
  const bottomSheetRef = useRef(null);

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
            headerLeft: () => (
              <IconButton
                icon={() => (
                  <MaterialCommunityIcons
                    name="cog-outline"
                    size={40}
                    color="black"
                  />
                )}
                size={40}
                color="black"
                onPress={() => bottomSheetRef.current?.open()}
              />
            ),
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="SettingsPage"
          component={SettingsPage}
          options={{title: 'Settings'}}
        />
      </Stack.Navigator>

      <RBSheet
        ref={bottomSheetRef}
        height={400}
        openDuration={250}
        customStyles={{container: styles.bottomSheetContainer}}>
        <SettingsPage />
      </RBSheet>
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
  bottomSheetContainer: {padding: 10},
});

export default App;
