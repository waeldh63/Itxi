import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, ScrollView} from 'react-native';
import {addCompanyId, checkValidCompanyId} from '../services/CompanyIdServices';
import CustomTextInput from '../component/CustomTextInput';
import { CompanyId } from '../data/CompanyIdData';

function CompanyIdPage({navigation,route}) {
  const [companyId, setCompanyId] = useState(false);
  const [companyIdError, setCompanyIdError] = useState(false);
  const handleCompanyIdChange = text => {
    setCompanyId(text); 
  };
  const source = route.params.source

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



  const onSubmitPress = ()=>{
    try {
      const result =  addCompanyId(companyId)
      if (result) {
        navigation.goBack()
        setCompanyIdError(false);
      } else {
        alert('Company ID already exist');
        setCompanyIdError(true);
      }
    } catch (error) {
      console.error(
        'file CompanyIdPage: Error checking companyId in onSubmitPress function :',
        error,
      );
    }


  }
  return (
    <View style={styles.MainContainer}>

      <Text style={{marginTop:20,marginLeft:50}}>Enter A Valid Company Id </Text>
      <CustomTextInput
        placeholder="Company Id"
        value={companyId}
        onChangeText={handleCompanyIdChange} // Update state when text changes
        keyboardType="numeric"
        error={companyIdError}
      />

      {source == 'onBoarding' &&
      <Button title="Continue" onPress={onContinuePress} />
      }
      {source == 'setCompanyIDPage' &&
      <Button title="submit" onPress={onSubmitPress} />
      }
      {source === 'setCompanyIDPage' && (
              <ScrollView contentContainerStyle={{ padding: 5 }}>
                {CompanyId.map((companyId) => (
                  <Text key={companyId.id} style={{ marginVertical: 5 }}>
                    {companyId.companyId}, {companyId.companyName}
                  </Text>
                ))}
              </ScrollView>
            )}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4abfdf',
  },
});
export default CompanyIdPage;
