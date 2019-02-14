import React , { Component} from 'react';
import { Text,TouchableWithoutFeedback, View } from 'react-native';
import { CardSection, Button } from './common';
import { Audio } from 'expo';
import Noise from './Noise';
import Noise2 from './Noise2';
import Space2 from './Space2';
import OneShot from './OneShot';



class Sample extends Component {

	async componentWillMount(){
	  
	  try{
	    await Expo.Audio.setIsEnabledAsync(true);
	    console.log(Expo.Audio.PlaybackStatusToSet);
	  } catch(error) {console.log(error);}
	}	


	// stopRecording(){

	// }	

	// startRecording(){
	// 	const recording = new Expo.Audio.Recording();
	// 	try {
	// 	  await recording.prepareToRecordAsync(Expo.Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
	// 	  await recording.startAsync();
	// 	  // You are now recording!
	// 	} catch (error) {
	// 	  // An error occurred!
	// 	}

	// }

	// renderButtonRecording () {
		 
	//  	if (this.state.isRecording){
	//  		return	(
	//  			<View style={styles.col}>
		 			
	// 	 			<Button2 style={styles.bol} >
	// 	 				Stop Recording
	// 	 			</Button2>
		 			
	// 	 		</View>
	//  		);

	//  	}
	//  	return(
		 	
	// 	 	<View style={styles.col} >	
	// 	 		<Button style={styles.col1}>
	// 	 			Start Recording
	// 	 		</Button>
		 		
		 	
	// 	 	</View>
	//  	);
	//  }

	render(){
		return (
					<TouchableWithoutFeedback style={{flex: 1}}>
						<View style={{justifyContent: 'space-evenly', flex: 1 }}>
								<Noise  style={{justifyContent: 'space-evenly', flex: 1 }}/>

								<Noise2  style={{justifyContent: 'space-evenly', flex: 1 }}/>

								<Space2 style={{justifyContent: 'space-evenly', flex: 1 }}/>

								<OneShot style={{justifyContent: 'space-evenly', flex: 1 }} />

							
						</View>
					</TouchableWithoutFeedback>

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
