import React from 'react';
import House from './components/House';
import Info from './components/Info';


const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 75}}>
			
			<Scene 
				key="home" 
				component={House} 
				initial={true} 
				title="Noise Machine" 
				titleStyle={{color: 'black', fontSize: 25, fontWeight: 'bold' }}
				navigationBarStyle={{backgroundColor:'white'}}
				navBarButtonColor="white"
				onRight={() => Communications.web('https://shinedarkmusic.com/Samples')}
				rightTitle= "🎶"
				onLeft={() => Actions.info()}
				leftTitle="Info"
				leftButtonTextStyle={{color: 'black', fontSize: 18, fontWeight: 'bold'}}
			>
			</Scene>
			<Scene 
				key="info" 
				component={Info} 
				title="Info" 
				titleStyle={{color: 'black', fontSize: 25, fontWeight: 'bold'}}
				navigationBarStyle={{backgroundColor:'white'}}
				navBarButtonColor="white"
				onRight={() => Communications.web('https://shinedarkmusic.com/Samples')}
				rightTitle= "🎶"
			/>
		</Router>

	);
};



export default RouterComponent;