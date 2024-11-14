import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

const MainPage = () => {
  const [isVoicebotVisible, setIsVoicebotVisible] = useState(false);

  const openVoicebot = () => {
    setIsVoicebotVisible(true);
  };

  const closeVoicebot = () => {
    setIsVoicebotVisible(false);
  };

  return (
    <View style={styles.mainPageContainer}>
      <Text style={styles.text}>MainPage</Text>
      
      <Button
        title="Launch Voicebot screen"
        onPress={openVoicebot}  
      />
      
      
      <Modal
        visible={isVoicebotVisible}
        transparent={true}   
        animationType="slide" 
        onRequestClose={closeVoicebot} 
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.voicebotText}>Voicebot Screen</Text>
            <Button title="Close Voicebot" onPress={closeVoicebot} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPageContainer: {
    flex: 1,
    backgroundColor: "#4abfdf",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voicebotText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default MainPage;
