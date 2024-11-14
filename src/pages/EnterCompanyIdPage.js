import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function EnterCompanyIdPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Company ID Page</Text>


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

export default EnterCompanyIdPage;
