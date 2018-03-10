import React , { Component} from 'react';
import { Text,TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';
import { Audio } from 'expo';
import * as actions from '../actions';
import Noise from './Noise';
import Noise2 from './Noise2';
import Space2 from './Space2';
import OneShot from './OneShot';



class Sample extends Component {

	render(){
		const { library  } = this.props;
		return (
			<TouchableWithoutFeedback>
				<View>
					<View style={{alignItems: 'center' }}>
						<Text style={styles.text}>Drums</Text>
					</View>
					<CardSection>
						<Noise  library={library}/>
					</CardSection>
					<View style={{alignItems: 'center'}}>
						<Text style={styles.text}>Textures</Text>
					</View>
					<CardSection>
						<Noise2  library={library}/>
					</CardSection>
					<View style={{alignItems: 'center'}}>
						<Text style={styles.text}>Random</Text>
					</View>
					<CardSection>
						<Space2 library={library}/>
					</CardSection>
					<View style={{alignItems: 'center'}}>
						<Text style={styles.text}>One Shot</Text>
					</View>
					<CardSection>
						<OneShot library={library}/>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>

		);

	}
}


const styles =  {
	text: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 5
  }
}





const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded  };
	
};


export default connect(mapStateToProps, actions)(Sample);

