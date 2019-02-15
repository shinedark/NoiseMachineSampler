import React , { Component} from 'react';
import { View , Image } from 'react-native';
import { Button } from './common';
import {  Audio, Asset, AppLoading } from 'expo';


const wave1 = new Array();
wave1[0] = require('../sounds/oneshot/1.wav');
wave1[1] = require('../sounds/oneshot/2.wav');
wave1[2] = require('../sounds/oneshot/3.wav');
wave1[3] = require('../sounds/oneshot/4.wav');
wave1[4] = require('../sounds/oneshot/5.wav');
wave1[5] = require('../sounds/oneshot/6.wav');
const size = wave1.length;
const y = () => { x= Math.floor(size*Math.random())};

const wave2 = new Array();
wave2[0] = require('../sounds/oneshot/7.wav');
wave2[1] = require('../sounds/oneshot/8.wav');
wave2[2] = require('../sounds/oneshot/9.wav');
wave2[3] = require('../sounds/oneshot/10.wav');
wave2[4] = require('../sounds/oneshot/11.wav');
wave2[5] = require('../sounds/oneshot/12.wav');
const size2 = wave2.length;
const y2 = () => { x2= Math.floor(size2*Math.random())};

const wave3 = new Array();
wave3[0] = require('../sounds/oneshot/13.wav');
wave3[1] = require('../sounds/oneshot/14.wav');
wave3[2] = require('../sounds/oneshot/15.wav');
wave3[3] = require('../sounds/oneshot/16.wav');
wave3[4] = require('../sounds/oneshot/17.wav');
wave3[5] = require('../sounds/oneshot/18.wav');
const size3 = wave3.length;
const y3 = () => { x3= Math.floor(size3*Math.random())};


class Space extends Component {

	constructor(props) {
	    super(props);
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
	      require('../sounds/oneshot/13.wav'),
	      require('../sounds/oneshot/14.wav'),
	      require('../sounds/oneshot/15.wav'),
	      require('../sounds/oneshot/16.wav'),
	      require('../sounds/oneshot/17.wav'),
	      require('../sounds/oneshot/18.wav'),
	      require('../sounds/oneshot/19.wav'),
	      require('../sounds/oneshot/20.wav'),
	      require('../sounds/oneshot/21.wav'),
	      require('../sounds/oneshot/22.wav'),
	      require('../sounds/oneshot/23.wav'),
	      require('../sounds/oneshot/24.wav'),
	      require('../sounds/oneshot/25.wav'),
	      require('../sounds/oneshot/26.wav'),
	      require('../sounds/oneshot/o1.wav'),
	      require('../sounds/oneshot/o2.wav'),
	      require('../sounds/oneshot/o3.wav'),
	      require('../sounds/oneshot/o4.wav'),
	      require('../sounds/oneshot/o5.wav'),
	      require('../sounds/oneshot/o6.wav'),
	    ];

	    const cacheSamples = samples.map((samples) => {
	      return Asset.fromModule(samples).downloadAsync();
	    });
	    return Promise.all(cacheSamples)

	  }
	


	handlePLay1 = async () => {
		const { samplesR } = this.state;
		if (samplesR) {
			y()

		} 
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave1[x])
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

	handlePLay2 = async () => {
		const { samplesR } = this.state;
		if (samplesR) {
			y2()

		} 
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave2[x2]);
	    	{ shouldPlay: true }
	    	this.audioPlayer2  = soundObject;
		    	await this.audioPlayer2.playAsync();
		    	await this.audioPlayer2.setPositionAsync(0);
		    	await this.audioPlayer2.setVolumeAsync(1);	
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}


	handlePLay3 = async () => {
		const { samplesR } = this.state;
		if (samplesR) {
			y3()

		} 
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave3[x3]);
	    	{ shouldPlay: true }
	    	this.audioPlayer3  = soundObject;
		    	await this.audioPlayer3.playAsync();
		    	await this.audioPlayer3.setPositionAsync(0);
		    	await this.audioPlayer3.setVolumeAsync(1);
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


export default Space;



