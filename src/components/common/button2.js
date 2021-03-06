import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button2 = ({ style, onPressIn,  children}) => {
	
	const {buttonStyle, textStyle} = styles;
	
	return (
		
		<TouchableOpacity  onPressIn={onPressIn}  style={[buttonStyle, style]}>
			<Text style={textStyle}> 
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle:{
		flex: 1,
		paddingTop: 25,
		paddingBottom: 25,
		// paddingLeft: 25,
		// paddingRight: 25,
		// alignSelf: 'stretch',
		backgroundColor: 'red',
		borderRadius: 13,
		borderWidth: 1,
		borderColor: 'white',
		marginLeft: 5,
		marginRight: 5,
		flexDirection: 'column',
		// justifyContent: 'space-between',
	},
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
		// paddingLeft: 25,
		// paddingRight: 25,
	}
};

export { Button2 };