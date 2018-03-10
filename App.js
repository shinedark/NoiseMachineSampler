import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';
import { Audio, Asset, AppLoading } from 'expo';



export default class App extends React.Component {

	state = {
	    isReady: false,
	  };

    componentWillMount() {
    this._cacheResourcesAsync();
    Expo.Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            allowsRecordingIOS: false,
            interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            shouldDuckAndroid: false,
            interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
  }

    render() {	
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

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
      <Provider store = {store}>
        <Router/>
      </Provider>
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

