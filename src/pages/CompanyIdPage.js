import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {checkValidCompanyId} from '../services/CompanyIdServices';
import CustomTextInput from '../component/CustomTextInput';

function CompanyIdPage({navigation}) {
  const [companyId, setCompanyId] = useState(false);
  const [companyIdError, setCompanyIdError] = useState(false);
  const handleCompanyIdChange = text => {
    setCompanyId(text); 
  };

  const onContinuePress = () => {
    try {
      const result = checkValidCompanyId(companyId);
      if (result) {
        navigation.navigate('PickVoicePage', {source: 'CompanyIdPage'});
        setCompanyIdError(false);
      } else {
        alert('Invalid Company ID');
        setCompanyIdError(true);
      }
    } catch (error) {
      console.error(
        'file CompanyIdPage: Error checking companyId in checkValidCompanyId function :',
        error,
      );
    }
  };
  return (
    <View style={styles.MainContainer}>
      <Text>Enter A Valid Company Id </Text>
      <CustomTextInput
        placeholder="Company Id"
        value={companyId}
        onChangeText={handleCompanyIdChange} // Update state when text changes
        keyboardType="numeric"
        error={companyIdError}
      />
      <Button title="Continue" onPress={onContinuePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4abfdf',
  },
});
export default CompanyIdPage;
