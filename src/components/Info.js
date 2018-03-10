import React, { Component } from 'react';
import {  Text, ScrollView} from 'react-native';
import { CardSection, Card } from './common';




class Info extends Component {

  render(){
    return(
          <ScrollView style={{flex: 1}}>
            	<Card style={{flex: 1}}>
                <CardSection>
                  <Text style={styles.textStyle}> Noise Machine</Text>
                </CardSection>
                <CardSection style={{flexDirection: 'column'}}>
                  <Text style={styles.textStyle4}>
                    Make some noise! You have 18 looped samples ranging from drums,
                    synths, drones, basses and more!
                    You also have 6 One shot samples to play with!
                  </Text>
                  <Text style={styles.textStyle2}>
                    New sounds will arrive every 2 weeks, giving you a whole new set of noises to make.
                    If you want the current samples to make a song or just to play with them. You can download them,
                    It's as easy as press the 🎶 on the top right and you will be taken to them.
                    And don't worry we keep all sample packs available for free. So if you miss to download the past pack, it  will still be available when you press 🎶 on the top right.
                  </Text>
                </CardSection>
                <CardSection>
                  <Text style={styles.textStyle3}>
                    If you don't hear any sound, make sure your phone is not on silent. Also we recommend you to use headphone for better sound quality. 
                  </Text>
                </CardSection>
            	</Card>  
 	
          </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '900',
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle2: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 10 
  },
  textStyle3: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10
  },
   textStyle4: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10
  }
};



export default Info;

