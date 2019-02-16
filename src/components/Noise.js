import React , { Component} from 'react';
import { View , Image } from 'react-native';
import { Button } from './common';
import {  Audio, Asset, AppLoading } from 'expo';


const wave1 = new Array();
wave1[0] = require('../sounds/oneshot/lol.wav');
wave1[1] = require('../sounds/oneshot/sd.wav');
wave1[2] = require('../sounds/oneshot/help.wav');
wave1[3] = require('../sounds/oneshot/please.wav');
wave1[4] = require('../sounds/oneshot/go.wav');
wave1[5] = require('../sounds/oneshot/mind.wav');

const wave2 = new Array();
wave2[0] = require('../sounds/oneshot/1.wav');
wave2[1] = require('../sounds/oneshot/2.wav');
wave2[2] = require('../sounds/oneshot/3.wav');
wave2[3] = require('../sounds/oneshot/4.wav');
wave2[4] = require('../sounds/oneshot/5.wav');
wave2[5] = require('../sounds/oneshot/6.wav');

const wave3 = new Array();
wave3[0] = require('../sounds/oneshot/7.wav');
wave3[1] = require('../sounds/oneshot/8.wav');
wave3[2] = require('../sounds/oneshot/9.wav');
wave3[3] = require('../sounds/oneshot/10.wav');
wave3[4] = require('../sounds/oneshot/11.wav');
wave3[5] = require('../sounds/oneshot/12.wav');



class Noise extends Component {

	constructor(props) {
	    super(props);
	    this.index = 0;
	    this.state = {
	      samplesR: null,
	      isReady: false
	    }
	  }
	
	async componentWillMount(){
		this._cacheResourcesAsync();
	  try{
	    await Expo.Audio.setIsEnabledAsync(true);
	  } catch(error) {console.log(error);}
	}

	componentWillUpdate(nextProps, nextState) {
	    nextState.samplesR = nextProps.propNewSample;
	}

	async _cacheResourcesAsync() {
	    const samples = [
	      require('../sounds/oneshot/1.wav'),
	      require('../sounds/oneshot/2.wav'),
	      require('../sounds/oneshot/3.wav'),
	      require('../sounds/oneshot/4.wav'),
	      require('../sounds/oneshot/5.wav'),
	      require('../sounds/oneshot/6.wav'),
	      require('../sounds/oneshot/7.wav'),
	      require('../sounds/oneshot/8.wav'),
	      require('../sounds/oneshot/9.wav'),
	      require('../sounds/oneshot/10.wav'),
	      require('../sounds/oneshot/11.wav'),
	      require('../sounds/oneshot/12.wav'),
	      require('../sounds/oneshot/mind.wav'),
	      require('../sounds/oneshot/lol.wav'),
	      require('../sounds/oneshot/sd.wav'),
	      require('../sounds/oneshot/help.wav'),
	      require('../sounds/oneshot/go.wav'),
	      require('../sounds/oneshot/please.wav'),
	    ];

	    const cacheSamples = samples.map((samples) => {
	      return Asset.fromModule(samples).downloadAsync();
	    });
	    return Promise.all(cacheSamples)

	  }
	

	y(forward){ this.index = (this.index + (forward ? 1 : wave1.length - 1)) % wave1.length;};

	handlePLay1 = async () => {
		const { samplesR } = this.state;
		if (samplesR) {
			this.y()

		} 
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave1[this.index])
	    	{ shouldPlay: true }

	    	this.audioPlayer1  = soundObject;
	    		await this.audioPlayer1.playAsync();
	    		await this.audioPlayer1.setPositionAsync(0);
	    		await this.audioPlayer1.setVolumeAsync(1);
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}

	y2(forward){ this.index = (this.index + (forward ? 1 : wave2.length - 1)) % wave2.length;};

	handlePLay2 = async () => {
		const { samplesR } = this.state;
		if (samplesR) {
			this.y2()

		} 
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave2[this.index]);
	    	{ shouldPlay: true }
	    	this.audioPlayer2  = soundObject;
		    	await this.audioPlayer2.playAsync();
		    	await this.audioPlayer2.setPositionAsync(0);
		    	await this.audioPlayer2.setVolumeAsync(0.9);	
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}

	y3(forward){ this.index = (this.index + (forward ? 1 : wave3.length - 1)) % wave3.length;};

	handlePLay3 = async () => {
		const { samplesR } = this.state;
		if (samplesR) {
			this.y3()

		} 
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave3[this.index]);
	    	{ shouldPlay: true }
	    	this.audioPlayer3  = soundObject;
		    	await this.audioPlayer3.playAsync();
		    	await this.audioPlayer3.setPositionAsync(0);
		    	await this.audioPlayer3.setVolumeAsync(0.8);
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}



	render(){

		if (!this.state.isReady) {
		      return (
		             	<View> 
		       	        <AppLoading
		       	          startAsync={this._cacheResourcesAsync}
		       	          onFinish={() => this.setState({ isReady: true })}
		       	          onError={console.warn}
		       	        />
		               	<Image 	
		                 		source={require('../../assets/images/nm.gif')}
		                 		style={{flex:1, height:100, width: 350, padding: 1}}
		                 		
		                 	/>
		               
		               </View>
		          	
		        
		      );
		    }
		
		return (
			<View style={{flex: 2}}>
				<View style={styles.col}>
					<View style={styles.col} onTouchStart={ this.handlePLay1}>	
						<Button style={styles.col1}/>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay2}>	
						<Button style={styles.col1}/>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay3}>	
						<Button style={styles.col1}/>
					</View>
				</View>
			</View>

		);

	}
}


const styles =  {
	col: {
		flexDirection: 'row',
		flex: 2
	}, 
	col1:{
		backgroundColor: 'rgba(255, 221, 0, 1)'
	},
	bol:{
		// flex: 1,
		flexDirection: 'column'
	}
}


export default Noise;



