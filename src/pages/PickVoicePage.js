import React, {useState, useEffect} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import {VoiceOptions} from '../data/PickVoiceData';
import {PickVoice} from '../services/PickVoiceServices';

function PickVoicePage({navigation, route}) {
  const source = route.params.source;
  const [voiceOption, setVoiceOptions] = useState(VoiceOptions);
  const [anySelected, setAnySelected] = useState(false);

  const toggleSelection = voiceId => {
    setVoiceOptions(prevOptions =>
      prevOptions.map(
        option =>
          option.voiceId === voiceId
            ? {...option, selected: true} // Set selected to true for the given id
            : {...option, selected: false}, // Set selected to false for all others
      ),
    );
    PickVoice(voiceId);
  };

  // useEffect to update anySelected when voiceOptions change
  useEffect(() => {
    const selectedOption = voiceOption.find(option => option.selected);
    setAnySelected(selectedOption ? selectedOption.voiceName : null);
  }, [voiceOption]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4abfdf',
      }}>
      <Text>Pick Voice Page</Text>
      <View
        style={{
          height: 150,
          width: '80%',
          borderColor: '#000',
          borderWidth: 2,
          borderRadius: 15,
          marginBottom: 20,
        }}>
        <ScrollView contentContainerStyle={{padding: 5}}>
          {VoiceOptions.map(item => (
            <TouchableOpacity
              key={item.voiceId}
              onPress={() => toggleSelection(item.voiceId)}>
              <Text key={item.voiceId} style={{marginVertical: 5}}>
                {item.voiceId}, {item.voiceName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {anySelected && (
        <Text style={{marginVertical: 5}}>selected voice : {anySelected}</Text>
      )}
      {source == 'CompanyIdPage' && (
        <Button
          title="Dismiss"
          onPress={() => navigation.navigate('MainPage', {fromMainPage: true})
        }
        />
      )}
    </View>
  );
}

export default PickVoicePage;
