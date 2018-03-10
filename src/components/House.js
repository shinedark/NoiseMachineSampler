import React, { Component } from 'react';
import {  ListView , View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { CardSection } from './common';
import { connect } from 'react-redux';
import Sample from './Sample';



class House extends Component {



  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1 , r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return <Sample  library={library} />;
  }


  render(){
    return(
          <View style={{flex: 1}}>
            	<CardSection style={{flex: 3}}>
                <ListView 
                  dataSource={this.dataSource} 
                  renderRow={this.renderRow}
                  style={{alignSelf: 'stretch'}}
                />
            	</CardSection>  
 	
          </View>
    );
  }
}


const mapStateToProps = state => {
  return { libraries: state.libraries };
  
};

export default connect(mapStateToProps)(House);

