import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsPage from './SettingsPage';
import SetCompanyIdPage from './SetCompanyIdPage';
import PickVoicePage from './PickVoicePage';
import CompanyIdPage from './CompanyIdPage';
import { CardStyleInterpolators } from '@react-navigation/stack';

const BottomSheetStack = createStackNavigator();

const BottomSheetNavigationStack = () => (
  <BottomSheetStack.Navigator    screenOptions={{
    // Default transition behavior (slide from right to left)
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
    <BottomSheetStack.Screen
      name="SettingsPage"
      component={SettingsPage}
      options={{
        headerLeft: () => null,
        gestureEnabled: false,
      }}
    />
    <BottomSheetStack.Screen
      name="SetCompanyIdPage"
      component={SetCompanyIdPage}
      options={{
        title: 'SetCompanyIdPage',
        presentation: 'modal',
      }}
    />
    <BottomSheetStack.Screen
      name="PickVoicePage"
      component={PickVoicePage}
      options={{
        title: 'Pick Voice ',
        presentation: 'modal',
      }}
    />
    <BottomSheetStack.Screen
      name="CompanyIdPage"
      component={CompanyIdPage}
      options={{
        title: 'Enter Company Id Page',
        presentation: 'modal',
      }}
    />
  </BottomSheetStack.Navigator>
);

export default BottomSheetNavigationStack;
