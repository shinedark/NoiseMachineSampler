import React , { Component} from 'react';
import { Text, View , Image } from 'react-native';
import { CardSection, Button, Button2 } from './common';
import {  Audio, Asset, AppLoading } from 'expo';


const wave1 = new Array();
wave1[0] = require('../sounds/oneshot/o1.wav');
wave1[1] = require('../sounds/oneshot/o2.wav');
wave1[2] = require('../sounds/oneshot/o3.wav');
wave1[3] = require('../sounds/oneshot/o4.wav');
wave1[4] = require('../sounds/oneshot/o5.wav');
wave1[5] = require('../sounds/oneshot/o6.wav');
const size = wave1.length;
const x = Math.floor(size*Math.random());

const wave2 = new Array();
wave2[0] = require('../sounds/oneshot/o1.wav');
wave2[1] = require('../sounds/oneshot/o2.wav');
wave2[2] = require('../sounds/oneshot/o3.wav');
wave2[3] = require('../sounds/oneshot/o4.wav');
wave2[4] = require('../sounds/oneshot/o5.wav');
wave2[5] = require('../sounds/oneshot/o6.wav');
const size2 = wave2.length;
const x2 = Math.floor(size2*Math.random());

const wave3 = new Array();
wave3[0] = require('../sounds/oneshot/o1.wav');
wave3[1] = require('../sounds/oneshot/o2.wav');
wave3[2] = require('../sounds/oneshot/o3.wav');
wave3[3] = require('../sounds/oneshot/o4.wav');
wave3[4] = require('../sounds/oneshot/o5.wav');
wave3[5] = require('../sounds/oneshot/o6.wav');
const size3 = wave3.length;
const x3 = Math.floor(size3*Math.random());

const wave4 = new Array();
wave4[0] = require('../sounds/oneshot/o1.wav');
wave4[1] = require('../sounds/oneshot/o2.wav');
wave4[2] = require('../sounds/oneshot/o3.wav');
wave4[3] = require('../sounds/oneshot/o4.wav');
wave4[4] = require('../sounds/oneshot/o5.wav');
wave4[5] = require('../sounds/oneshot/o6.wav');
const size4 = wave4.length;
const x4 = Math.floor(size4*Math.random());

const wave5 = new Array();
wave5[0] = require('../sounds/oneshot/o1.wav');
wave5[1] = require('../sounds/oneshot/o2.wav');
wave5[2] = require('../sounds/oneshot/o3.wav');
wave5[3] = require('../sounds/oneshot/o4.wav');
wave5[4] = require('../sounds/oneshot/o5.wav');
wave5[5] = require('../sounds/oneshot/o6.wav');
const size5 = wave5.length;
const x5 = Math.floor(size5*Math.random());

const wave6 = new Array();
wave6[0] = require('../sounds/oneshot/o1.wav');
wave6[1] = require('../sounds/oneshot/o2.wav');
wave6[2] = require('../sounds/oneshot/o3.wav');
wave6[3] = require('../sounds/oneshot/o4.wav');
wave6[4] = require('../sounds/oneshot/o5.wav');
wave6[5] = require('../sounds/oneshot/o6.wav');
const size6 = wave6.length;
const x6 = Math.floor(size6*Math.random());

class OneShot extends Component {

	state = {
			isReady: false,
		};

	async componentWillMount(){
		this._cacheResourcesAsync();
	  
	  try{
	    await Expo.Audio.setIsEnabledAsync(true);
	  } catch(error) {console.log(error);}
	}

	async _cacheResourcesAsync() {
	    const samples = [
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
		const { playing1 } = this.state;
		this.setState({ playing1: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave1[x])
	    	{ shouldPlay: true }

	    	this.audioPlayer1  = soundObject;
	    		await this.audioPlayer1.playAsync();
	    		await this.audioPlayer1.setPositionAsync(0);
	    		await this.audioPlayer1.setVolumeAsync(0.8);
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}

	handlePLay2 = async () => {
		const { playing2 } = this.state;
		this.setState({ playing2: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave2[x2]);
	    	{ shouldPlay: true }
	    	this.audioPlayer2  = soundObject;
		    	await this.audioPlayer2.playAsync();
		    	await this.audioPlayer2.setPositionAsync(0);
		    	await this.audioPlayer2.setVolumeAsync(0.7);	
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}


	handlePLay3 = async () => {
		const { playing3 } = this.state;
		this.setState({ playing3: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave3[x3]);
	    	{ shouldPlay: true }
	    	this.audioPlayer3  = soundObject;
		    	await this.audioPlayer3.playAsync();
		    	await this.audioPlayer3.setPositionAsync(0);
		    	await this.audioPlayer3.setVolumeAsync(0.5);
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}



	handlePLay4 = async () => {
		const { playing4 } = this.state;
		this.setState({ playing4: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave4[x4]);
	    	{ shouldPlay: true }
	    	this.audioPlayer4  = soundObject;
		    	await this.audioPlayer4.playAsync();
		    	await this.audioPlayer4.setPositionAsync(0);
		    	await this.audioPlayer4.setVolumeAsync(0.6);	
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}


	handlePLay5 = async () => {
		const { playing5 } = this.state;
		this.setState({ playing5: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave5[x5]);
	    	{ shouldPlay: true }
	    	this.audioPlayer5  = soundObject;
		    	await this.audioPlayer5.playAsync();
		    	await this.audioPlayer5.setPositionAsync(0);
		    	await this.audioPlayer5.setVolumeAsync(0.7);	
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}


	handlePLay6 = async () => {
		const { playing6 } = this.state;
		this.setState({ playing6: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(wave6[x6]);
	    	{ shouldPlay: true }
	    	this.audioPlayer6  = soundObject;
		    	await this.audioPlayer6.playAsync();
		    	await this.audioPlayer6.setPositionAsync(0);
		    	await this.audioPlayer6.setVolumeAsync(0.4);		
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
					<View style={styles.col} onTouchStart={ this.handlePLay4}>	
						<Button style={styles.col1}/>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay5}>	
						<Button style={styles.col1}/>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay6}>	
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


export default OneShot;



