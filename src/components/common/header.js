import React from 'react';
import { Text , View, Linking, TouchableOpacity} from 'react-native';



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

const styles = {
    touchable: {
        position: 'absolute',
        bottom: 18,
        right: 18,
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
  paragraph: {
    fontSize: 30,
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
  }
};

const Header = (props) => {
	const {textStyle , viewStyle} = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
			<GifOverlay/>
		</View>
	);
};


export { Header };