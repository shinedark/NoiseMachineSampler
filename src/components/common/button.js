import React from 'react';
import { Text, TouchableOpacity} from 'react-native';


const Button = ({ style, onPressIn, children}) => {
	
	const {buttonStyle, textStyle} = styles;
	
	return (
		<TouchableOpacity  onPressIn={onPressIn} style={[buttonStyle, style]}/>
	);
};

const styles = {
	buttonStyle:{
		flex: 1,
		// paddingTop: 25,
		// paddingBottom: 25,
		// paddingLeft: 5,
		// paddingRight: 5,
		// alignSelf: 'stretch',
		// backgroundColor: 'red',
		borderRadius: 360,
		borderWidth: 1,
		borderColor: 'white',
		marginLeft: 5,
		marginRight: 5,
		// flexDirection: 'row',
		// justifyContent: 'space-between',
	}
};

export { Button };