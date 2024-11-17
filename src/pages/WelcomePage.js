import React from 'react';
import {View, Button} from 'react-native';

function WelcomePage({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4abfdf',
      }}>
      <Button
        title="Get Started"
        onPress={() =>
          navigation.navigate('CompanyIdPage', {source: 'onBoarding'})
        }
      />
    </View>
  );
}

export default WelcomePage;
