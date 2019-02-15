import React , { Component} from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import {  Button3, CardSection } from './common';
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
							<CardSection  style={{ flex: 2}}>
							<Noise propNewSample={this.state.newSamples} />
							</CardSection>
							<CardSection  style={{ flex: 2}}>
							<Noise2 propNewSample={this.state.newSamples} />
							</CardSection>
							<CardSection  style={{ flex: 2}}>
							<Space2 propNewSample={this.state.newSamples} />
							</CardSection>
							<CardSection  style={{ flex: 2}}>
							<OneShot propNewSample={this.state.newSamples} />
							</CardSection>
							{this.renderSetSamples()}
						</View>
					</TouchableWithoutFeedback>
				</View>

		);

	}
}

export default Sample;
