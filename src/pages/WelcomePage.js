import React from 'react';
import { View, Text, Button } from 'react-native';

function WelcomePage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#4abfdf" }}>
      <Button title="Get Started" onPress={() => navigation.navigate('CompanyIdPage')} />
    </View>
  );
}

export default WelcomePage;