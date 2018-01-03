import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import FBSDK , {LoginManager} from 'react-native-fbsdk';

export default class MainPage extends Component<{}>{

  _fbAuth(){
    LoginManager.logInWithReadPermissions(['public_profile', 'user_photos']).then(function(result){
      if(result.isCancelled){
        console.log('login was cancelled');
      }else{
        console.log('login was success' + result.grantedPermissions.toString());
        Actions.anotherpage();
      }
    })
  }

  render(){
    return(
      <View style= {styles.container} >
        <Text style = {styles.welcome} >
          This is main page!
        </Text>
        <Button title='Login to FB' onPress={this._fbAuth} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
