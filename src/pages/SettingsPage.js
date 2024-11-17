import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SettingsPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Page</Text>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() =>
          navigation.navigate('PickVoicePage', {source: 'settingPage'})
        }>
        <Text style={styles.buttonText}>Go to Pick Voice Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('SetCompanyIdPage')}>
        <Text style={styles.buttonText}>Go to Set Company ID</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  buttons: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#d3d3d3',
    borderRadius: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default SettingsPage;
