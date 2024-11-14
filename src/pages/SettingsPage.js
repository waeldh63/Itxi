import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const SettingsPage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Page</Text>

      <Button
        title="Go to Pick Voice Screen"
        onPress={() => navigation.navigate('PickVoicePage', { source: 'settingPage' })} 
      />

      <Button
        title="Go to Set Company ID"
        onPress={() => navigation.navigate('SetCompanyIdPage')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SettingsPage;
