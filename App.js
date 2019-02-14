import React from 'react';
import { View } from 'react-native';
import Sample from './src/components/Sample';
import { Header } from './src/components/common';
import { Audio, Asset, AppLoading } from 'expo';




export default class App extends React.Component {

	state = {
	    isReady: false,
	  };

    componentWillMount() {
    this._cacheResourcesAsync();
    Expo.Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            allowsRecordingIOS: true,
            interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            shouldDuckAndroid: false,
            interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true
    });
  }

    render() {	
    if (!this.state.isReady) {
          return (
            <AppLoading
              startAsync={this._cacheResourcesAsync}
              onFinish={() => this.setState({ isReady: true })}
              onError={console.warn}
            />
          );
        }
    return (
      <View style={{flex: 1 , marginTop: 30, marginBottom: 10}}>
        <Header headerText={'Noise Machine'}/>
          <Sample/>
      </View>
    );
  }
  async _cacheResourcesAsync() {
      const images = [
        require('./assets/images/NmLogo.png'),
        require('./assets/images/splash.png'),
        require('./assets/images/nm.gif'),
      ];

      const cacheImages = images.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });
      return Promise.all(cacheImages)

    }
}

