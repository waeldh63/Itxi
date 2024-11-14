import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Button, Modal} from 'react-native';

import {IconButton} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheetNavigationStack from './BottomSheetNavigationStack';
const MainPage = () => {
  const [isVoicebotVisible, setIsVoicebotVisible] = useState(false);
  const bottomSheetRef = useRef(null);

  const openVoicebot = () => {
    setIsVoicebotVisible(true);
  };

  const closeVoicebot = () => {
    setIsVoicebotVisible(false);
  };

  return (
    <View style={styles.mainPageContainer}>
      <IconButton
        icon={() => (
          <MaterialCommunityIcons name="cog-outline" size={40} color="black" />
        )}
        size={40}
        color="black"
        onPress={() => bottomSheetRef.current?.open()}
      />
      <RBSheet
        ref={bottomSheetRef}
        height={500} 
        closeOnPressMask={true}>
        <BottomSheetNavigationStack />
      </RBSheet>
      <Text style={styles.text}>MainPage</Text>

      <Button title="Launch Voicebot screen" onPress={openVoicebot} />

      <Modal
        visible={isVoicebotVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeVoicebot}>
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
    backgroundColor: '#4abfdf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
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
