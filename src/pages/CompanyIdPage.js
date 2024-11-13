import React from 'react';
import { View, Text, Button } from 'react-native';

function CompanyIdPage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#4abfdf" }}>
      <Text>Welcome to our App!</Text>
      <Button title="Next" onPress={() => navigation.navigate('PickVoicePage')} />
    </View>
  );
}

export default CompanyIdPage;