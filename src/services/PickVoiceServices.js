import {VoiceOptions} from '../data/PickVoiceData';

export const PickVoice = id => {
  try {
    VoiceOptions.map(voice =>
      voice.voiceId === id
        ? {...voice, selected: true}
        : {...voice, selected: false},
    );
  } catch (error) {
    console.log(error);
  }
};
