import React , { Component} from 'react';
import { Text,TouchableWithoutFeedback, View } from 'react-native';
import { Card, Button3, Header } from './common';
import { Audio } from 'expo';
import Noise from './Noise';
import Noise2 from './Noise2';
import Space2 from './Space2';
import OneShot from './OneShot';



class Sample extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      newSamples: false
	    }
	  }

	async componentWillMount(){
	  
	  try{
	    await Expo.Audio.setIsEnabledAsync(true);
	    console.log(Expo.Audio.PlaybackStatusToSet);
	  } catch(error) {console.log(error);}
	}	

	refreshSounds = () =>{
		if (!this.state.newSamples) {
			this.setState({newSamples: true});
		} else {
			this.setState({newSamples: false});
		}
		
	}

	renderSetSamples(){
		if (!this.state.newSamples) {
		return(
			<Button3 onPressIn={this.refreshSounds}>Search Samples</Button3>
			)	
		} else {
			return (
				<Button3 onPressIn={this.refreshSounds}>Set Samples</Button3>
			)
		}
	}

	render(){
		
		return (
				<View style={{flex: 1 , flexDirection: 'row' }}>
				
					<TouchableWithoutFeedback style={{flex: 1}}>
						<View style={{ flex: 1,  flexDirection: 'column' , marginBottom: 30, marginTop: 30 }}>
							<Noise propNewSample={this.state.newSamples} />

							<Noise2 propNewSample={this.state.newSamples} />

							<Space2 propNewSample={this.state.newSamples} />

							<OneShot propNewSample={this.state.newSamples} />
							{this.renderSetSamples()}
						</View>
					</TouchableWithoutFeedback>
				</View>

		);

	}
}


// const styles =  {
// 	text: {
//     color: 'black',
//     fontSize: 23,
//     fontWeight: 'bold',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     position: 'relative',
//     paddingTop: 5
//   },
//   col: {
//   	flex: 2,
//   	flexDirection: 'row'
//   }, 
//   col1:{
//   	backgroundColor: 'rgba(10, 146, 10, 1.0)'
//   },
//   bol:{
//   	// flex: 1,
//   	flexDirection: 'column'
//   }
// }



export default Sample;


// onTouchStart={ this.handleRecording.bind(this)
// onPressIn={this.stopRecording.bind(this)}
