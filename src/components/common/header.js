import React from 'react';
import { Text , View, Linking, TouchableOpacity, Modal , Button} from 'react-native';



const url = "https://shinedarkmusic.com/Samples";

class GifOverlay extends React.Component {
  state = {
    visible: true,
  }

  render() {
    return this.state.visible ? (
      <TouchableOpacity style={styles.touchable} onPress={() => Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err))}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>🎹</Text>
      </View>
      </TouchableOpacity>
    ) : null;
  }

  setVisible(visible) {
    this.setState({ visible });
  }
}

class GifOverlay2 extends React.Component {
  state = {
    visible: true,
    isVisible: false
  }

  render() {
    return this.state.visible ? (
      <TouchableOpacity style={styles.touchable2} onPress={() => this.setState({ isVisible: true })}>
      <View style={styles.container}>
        <Text style={styles.paragraph2}>Info</Text>
        <Modal
          visible={this.state.isVisible}
          transparent
          animationType="slide"
          
        >
            <View style={styles.container2}>
              <Text style={styles.textStyle2}>
                There are 12 slots available to  loaded. Each slot has 6 sounds to pick from.

                To Load slots click on Search Samples then press each slot you want to load. 

                As you press each slot samples will play, if you like what you hear press Set samples.

                Make Noise !!!
              </Text>
              <Button style={{fontSize: 26}} title='close' onPress={() => this.setState({isVisible: false})} />
            </View>
        </Modal>
      </View>
      </TouchableOpacity>
    ):null;
  }

  setVisible(visible) {
    this.setState({ visible });
  }
}

const styles = {
    touchable: {
        position: 'absolute',
        bottom: 18,
        right: 18,
    },
    touchable2: {
        position: 'absolute',
        bottom: 18,
        left: 18,
    },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 4    
  },
  container2: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    padding: 30
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  paragraph2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  viewStyle:{
  	backgroundColor: '#F8F8F8',
  	justifyContent: 'center',
  	alignItems: 'center',
  	height: 60,
  	shadowColor: '#000',
  	shadowOffset: {width: 0 , height: 2},
  	shadowOpacity: 0.2,
  	elevation: 2,
  	position: 'relative'

  },
  textStyle:{
  	fontSize: 25,
  	justifyContent: 'center',
    fontFamily: 'DamascusBold'
  },
  textStyle2:{
    fontSize: 25,
    justifyContent: 'center',
    fontFamily: 'Damascus',
    color: 'white',

  }
};

const Header = (props) => {
	const {textStyle , viewStyle} = styles;

	return (
		<View style={viewStyle}>
      <GifOverlay2/>
			<Text style={textStyle}>{props.headerText}</Text>
			<GifOverlay/>
		</View>
	);
};


export { Header };