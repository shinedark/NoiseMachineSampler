import React from 'react';
import { TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';


const Button = ({ style, onPressIn, children}) => {
	
	const {buttonStyle, buttonStyle1} = styles;
	
	return (
		<LinearGradient
          colors={[ '#ffffff', '#07234f']}
          style={buttonStyle}>
          <TouchableOpacity  onPressIn={onPressIn} style={buttonStyle1}/>
        </LinearGradient>
	);
};

const styles = {
	buttonStyle:{
		flex: 1,
		borderRadius: 360,
		borderWidth: 1,
		borderColor: '#e6f9ff',
		marginLeft: 2,
		marginRight: 2,
	},
	buttonStyle1:{
		flex: 1,
		backgroundColor: 'transparent',
		borderRadius: 360,
		borderWidth: 3,
		borderColor: '#9b9b9b',
	},
};

export { Button };