import React from 'react';
import { View, Text, Button } from 'react-native';

function PickVoicePage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#4abfdf" }}>
      <Text>Welcome to our App!</Text>
      <Button title="Next" onPress={() => navigation.navigate('MainPage')} />
    </View>
  );
}

export default PickVoicePage;