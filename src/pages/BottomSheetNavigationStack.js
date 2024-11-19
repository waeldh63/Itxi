import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsPage from './SettingsPage';
import SetCompanyIdPage from './SetCompanyIdPage';
import PickVoicePage from './PickVoicePage';
import CompanyIdPage from './CompanyIdPage';
import { CardStyleInterpolators } from '@react-navigation/stack';
import {IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomSheetStack = createStackNavigator();

const BottomSheetNavigationStack = ({ bottomSheetRef }) => (
  <BottomSheetStack.Navigator    screenOptions={{
    // Default transition behavior (slide from right to left)
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
<BottomSheetStack.Screen
      name="SettingsPage"
      component={SettingsPage}
      options={{
        headerLeft: () => (
          <IconButton
            icon={() => <MaterialCommunityIcons name="arrow-left" size={30} color="black" />}
            onPress={() => bottomSheetRef.current?.close()} // Close bottom sheet
            size={30}
            color="black"
            style={{ marginLeft: 10 }}
          />
        ),
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
