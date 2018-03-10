import React , { Component} from 'react';
import { Text, View , Image } from 'react-native';
import { CardSection, Button, Button2 } from './common';
import {  Audio, Asset, AppLoading } from 'expo';






class OneShot extends Component {

	state = {
			isReady: false
		};

	async componentWillMount(){
	  
	  try{
	    await Expo.Audio.setIsEnabledAsync(true);
	  } catch(error) {console.log(error);}
	}
	

	handlePLay1 = async () => {
		const { playing1 } = this.state;
		this.setState({ playing1: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(require('../sounds/oneshot/o1.wav'));
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
	    		await soundObject.loadAsync(require('../sounds/oneshot/o2.wav'));
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
	    		await soundObject.loadAsync(require('../sounds/oneshot/o3.wav'));
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
	    		await soundObject.loadAsync(require('../sounds/oneshot/o4.wav'));
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
	    		await soundObject.loadAsync(require('../sounds/oneshot/o5.wav'));
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
	    		await soundObject.loadAsync(require('../sounds/oneshot/o6.wav'));
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
						<Button style={styles.col1}>
							▶︎
						</Button>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay2}>	
						<Button style={styles.col1}>
							▶︎
						</Button>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay3}>	
						<Button style={styles.col1}>
							▶︎
						</Button>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay4}>	
						<Button style={styles.col1}>
							▶︎
						</Button>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay5}>	
						<Button style={styles.col1}>
							▶︎
						</Button>
					</View>
					<View style={styles.col} onTouchStart={ this.handlePLay6}>	
						<Button style={styles.col1}>
							▶︎
						</Button>
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



