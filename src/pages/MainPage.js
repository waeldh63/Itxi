import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View, Button, Modal} from 'react-native';
import {IconButton} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheetNavigationStack from './BottomSheetNavigationStack';
import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';

const MainPage = () => {
  const [isVoicebotVisible, setIsVoicebotVisible] = useState(false);
  const bottomSheetRef = useRef(null);

  const openVoicebot = () => {
    setIsVoicebotVisible(true);
  };

  const closeVoicebot = () => {
    setIsVoicebotVisible(false);
  };
  const navigation = useNavigation();

  const handleDeepLink = event => {
    const url = event.url;
    console.log('Deep link received:', url);
    if (url.includes('set-company-id')) {
      bottomSheetRef.current?.open();
      setTimeout(() => {
        navigation.navigate('SetCompanyIdPage');
      }, 500);
    }
  };

  useEffect(() => {
    const subscription = Linking.addEventListener('url', handleDeepLink);
    Linking.getInitialURL().then(url => {
      if (url && url.includes('set-company-id')) {
        bottomSheetRef.current?.open();
        setTimeout(() => {
          navigation.navigate('SetCompanyIdPage');
        }, 500);
      }
    });
    return () => {
      subscription.remove();
    };
  }, [navigation]);

  return (
    <View style={styles.mainPageContainer}>
      <IconButton
        icon={() => (
          <MaterialCommunityIcons name="cog-outline" size={40} color="black" />
        )}
        size={40}
        color="black"
        onPress={() => bottomSheetRef.current?.open()}
        style={styles.iconButton}
      />
      <RBSheet ref={bottomSheetRef} height={500} closeOnPressMask={true}>
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
  iconButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default MainPage;
