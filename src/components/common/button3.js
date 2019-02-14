import React from 'react';
import { Text, TouchableOpacity} from 'react-native';


const Button3 = ({ onPressIn, children}) => {
	
	const {buttonStyle, textStyle} = styles;
	
	return (
		<TouchableOpacity  onPressIn={onPressIn} style={buttonStyle}>
			<Text style={textStyle}> 
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle:{
		flex: 1,
		alignSelf: 'center',
		backgroundColor: 'skyblue',
		borderRadius: 360,
		borderWidth: 1,
		borderColor: 'white',
		margin: 5
	},
	textStyle: {
		// justifyContent: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '600',
		padding: 20
	}
};

export { Button3 };