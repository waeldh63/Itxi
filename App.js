import React, {useEffect, useState} from 'react';
import MainPage from './src/pages/MainPage';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import WelcomePage from './src/pages/WelcomePage';
import CompanyIdPage from './src/pages/CompanyIdPage';
import PickVoicePage from './src/pages/PickVoicePage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

// Define deep linking config
const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      MainPage: {
        path: '',
        screens: {
          SettingsPage: 'SettingsPage',
          SetCompanyIdPage: 'set-company-id',
        },
      },
    },
  },
};

function App() {
  const [isSplashDone, setIsSplashDone] = useState(false);

  // useEffect for the splash screen element
  useEffect(() => {
    setTimeout(() => {
      setIsSplashDone(true); // After the delay, mark splash screen as done

      SplashScreen.hide();
    }, 3000); // 3-second delay
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName={isSplashDone ? 'MainPage' : 'WelcomePage'} // Conditional initial screen
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Default animation
          cardStyle: {backgroundColor: 'transparent'}, // Transparent card background
        }}>
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
  options={({route}) => ({
    title: 'Pick Voice',
    // cardStyleInterpolator: ({current, layouts}) => {
    //   const {progress} = current;
    //   // Slide-down animation for leaving PickVoicePage
    //   if (route.params?.source !='CompanyIdPage' ) {
    //     return {
    //       cardStyle: {
    //         transform: [
    //           {
    //             translateY: progress.interpolate({
    //               inputRange: [0, 1],
    //               outputRange: [0, layouts.screen.height], // Slide down
    //             }),
    //           },
    //         ],
    //       },
    //     };
    //   }

    //   // Default slide-in from right animation
    //   return CardStyleInterpolators.forHorizontalIOS;
    // },
     gestureDirection: route.params?.source !='CompanyIdPage' ? 'vertical' : 'horizontal',
  })}
/>
<Stack.Screen
  name="MainPage"
  component={MainPage}
  options={{
    headerLeft: () => null,
    cardStyleInterpolator: () => ({}), // Disable animation
    gestureEnabled: false,
  }}
/>

      </Stack.Navigator>
    </NavigationContainer>
</GestureHandlerRootView>
  );
}

export default App;
