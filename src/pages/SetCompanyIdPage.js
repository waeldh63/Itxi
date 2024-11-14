import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function SetCompanyIdPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Set Company ID Page</Text>

      <Button
        title="Go to Enter Company ID"
        onPress={() => navigation.navigate('EnterCompanyIdPage')} 
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

export default SetCompanyIdPage;
