import React , { Component} from 'react';
import { Text, View , Image } from 'react-native';
import { CardSection, Button, Button2 } from './common';
import { Audio, Asset, AppLoading } from 'expo';






class Noise2 extends Component {

	state = {
		playing1: false, 
		playing2: false, 
		playing3: false, 
		playing4: false,
		playing5: false,
		playing6: false 
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
	    		await soundObject.loadAsync(require('../sounds/synth/s1.wav'));
	    	{ shouldPlay: true }
	    	this.audioPlayer1  = soundObject;
	    		this.audioPlayer1.playAsync();
	    		this.audioPlayer1.setPositionAsync(0);
	    		this.audioPlayer1.setIsLoopingAsync(true);
	    		this.audioPlayer1.setVolumeAsync(0.6);
	    			
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}


	stopMusic1 = async () => {
		const { playing1 } = this.state;
		this.setState({ playing1: false});
	   	this.audioPlayer1.stopAsync();
	 }  


	handlePLay2 = async () => {
		const { playing2 } = this.state;
		this.setState({ playing2: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(require('../sounds/synth/s2.wav'));
	    	{ shouldPlay: true }
	    	this.audioPlayer2  = soundObject;
	    		this.audioPlayer2.playAsync();
	    		this.audioPlayer2.setPositionAsync(0);
	    		this.audioPlayer2.setIsLoopingAsync(true);
	    		this.audioPlayer2.setVolumeAsync(0.5);
	    			
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}

	stopMusic2 = async () => {
		const { playing2 } = this.state;
		this.setState({ playing2: false});
	    this.audioPlayer2.stopAsync();
	 } 

	handlePLay3 = async () => {
		const { playing3 } = this.state;
		this.setState({ playing3: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(require('../sounds/synth/s3.wav'));
	    	{ shouldPlay: true }
	    	this.audioPlayer3  = soundObject;
	    		this.audioPlayer3.playAsync();
	    		this.audioPlayer3.setPositionAsync(0);
	    		this.audioPlayer3.setIsLoopingAsync(true);
	    		this.audioPlayer3.setVolumeAsync(0.7);
	    			
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}

	stopMusic3 = async () => {
		const { playing3 } = this.state;
		this.setState({ playing3: false});
	   	this.audioPlayer3.stopAsync();
	 } 



	handlePLay4 = async () => {
		const { playing4 } = this.state;
		this.setState({ playing4: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(require('../sounds/synth/s4.wav'));
	    	{ shouldPlay: true }
	    	this.audioPlayer4  = soundObject;
	    		this.audioPlayer4.playAsync();
	    		this.audioPlayer4.setPositionAsync(0);
	    		this.audioPlayer4.setIsLoopingAsync(true);
	    		this.audioPlayer4.setVolumeAsync(0.3);
	    			
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}

	stopMusic4 = async () => {
		const { playing4 } = this.state;
		this.setState({ playing4: false});
	   	this.audioPlayer4.stopAsync();
	 } 


	handlePLay5 = async () => {
		const { playing5 } = this.state;
		this.setState({ playing5: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(require('../sounds/synth/s5.wav'));
	    	{ shouldPlay: true }
	    	this.audioPlayer5  = soundObject;
	    		this.audioPlayer5.playAsync();
	    		this.audioPlayer5.setPositionAsync(0);
	    		this.audioPlayer5.setIsLoopingAsync(true);
	    		this.audioPlayer5.setVolumeAsync(0.5);
	    			
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}

	stopMusic5 = async () => {
		const { playing5 } = this.state;
		this.setState({ playing5: false});
	   	this.audioPlayer5.stopAsync();
	 } 

	handlePLay6 = async () => {
		const { playing6 } = this.state;
		this.setState({ playing6: true});
	  	const soundObject = new Expo.Audio.Sound();
	  		try {
	    		await soundObject.loadAsync(require('../sounds/synth/s6.wav'));
	    	{ shouldPlay: true }
	    	this.audioPlayer6  = soundObject;
	    		this.audioPlayer6.playAsync();
	    		this.audioPlayer6.setPositionAsync(0);
	    		this.audioPlayer6.setIsLoopingAsync(true);
	    		this.audioPlayer6.setVolumeAsync(0.5);
	    			
	   		 // Your sound is playing!
	  		} catch (error) {
	    	// An error occurred!
	    	
	  		} 
	}

	stopMusic6 = async () => {
		const { playing6 } = this.state;
		this.setState({ playing6: false});
	    this.audioPlayer6.stopAsync();
	 } 

	renderButton1 () {
		 
	 	if (this.state.playing1){
	 		return	(
	 			<View style={styles.col} >
		 			<Button2 style={styles.bol} onPressIn={this.stopMusic1.bind(this)}>
		 				■
		 			</Button2>
		 		</View>
	 		);

	 	}
	 	return(
		 	
		 	<View style={styles.col} onTouchStart={ this.handlePLay1.bind(this)}>	
		 		<Button style={styles.col1} >
		 			▶︎
		 		</Button>
		 	</View>
	 	);
	 }
	 renderButton2 () {
	 	 
	  	if (this.state.playing2){
	  		return	(
	  			<View style={styles.col}>
	 	 			
	 	 			<Button2 style={styles.bol} onPressIn={this.stopMusic2.bind(this)}>
	 	 				■
	 	 			</Button2>
	 	 			
	 	 		</View>
	  		);

	  	}
	  	return(
	 	 	
	 	 	<View style={styles.col} onTouchStart={ this.handlePLay2.bind(this)}>	
	 	 		<Button style={styles.col1} >
	 	 			▶︎
	 	 		</Button>
	 	 		
	 	 	
	 	 	</View>
	  	);
	  }

	renderButton3 () {
		 
	 	if (this.state.playing3){
	 		return	(
	 			<View style={styles.col}>
		 			
		 			<Button2 style={styles.bol} onPressIn={this.stopMusic3.bind(this)}>
		 				■
		 			</Button2>
		 			
		 		</View>
	 		);

	 	}
	 	return(
		 	
		 	<View style={styles.col} onTouchStart={ this.handlePLay3.bind(this)}>	
		 		<Button style={styles.col1} >
		 			▶︎
		 		</Button>
		 		
		 	
		 	</View>
	 	);
	 }

	 renderButton4 () {
	 	 
	  	if (this.state.playing4){
	  		return	(
	  			<View style={styles.col}>
	 	 			
	 	 			<Button2 style={styles.bol} onPressIn={this.stopMusic4.bind(this)}>
	 	 				■
	 	 			</Button2>
	 	 			
	 	 		</View>
	  		);

	  	}
	  	return(
	 	 	
	 	 	<View style={styles.col} onTouchStart={ this.handlePLay4.bind(this)}>	
	 	 		<Button style={styles.col1} >
	 	 			▶︎
	 	 		</Button>
	 	 		
	 	 	
	 	 	</View>
	  	);
	  }

	renderButton5 () {
		 
	 	if (this.state.playing5){
	 		return	(
	 			<View style={styles.col}>
		 			
		 			<Button2 style={styles.bol} onPressIn={this.stopMusic5.bind(this)}>
		 				■
		 			</Button2>
		 			
		 		</View>
	 		);

	 	}
	 	return(
		 	
		 	<View style={styles.col} onTouchStart={ this.handlePLay5.bind(this)}>	
		 		<Button style={styles.col1} >
		 			▶︎
		 		</Button>
		 		
		 	
		 	</View>
	 	);
	 }

	renderButton6 () {
		 
	 	if (this.state.playing6){
	 		return	(
	 			<View style={styles.col}>
		 			
		 			<Button2 style={styles.bol} onPressIn={this.stopMusic6.bind(this)}>
		 				■
		 			</Button2>
		 			
		 		</View>
	 		);

	 	}
	 	return(
		 	
		 	<View style={styles.col} onTouchStart={ this.handlePLay6.bind(this)}>	
		 		<Button style={styles.col1}>
		 			▶︎
		 		</Button>
		 		
		 	
		 	</View>
	 	);
	 }

	 async _cacheResourcesAsync() {
	     const samples = [
	       require('../sounds/synth/s1.wav'),
	       require('../sounds/synth/s2.wav'),
	       require('../sounds/synth/s3.wav'),
	       require('../sounds/synth/s4.wav'),
	       require('../sounds/synth/s5.wav'),
	       require('../sounds/synth/s6.wav'),
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
					{this.renderButton1()}
					{this.renderButton2()}
					{this.renderButton3()}
					{this.renderButton4()}
					{this.renderButton5()}
					{this.renderButton6()}
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
		backgroundColor: 'rgba(44, 62, 80,1.0)'
	},
	bol:{
		// flex: 3,
		flexDirection: 'column'
	}
}


export default Noise2;



