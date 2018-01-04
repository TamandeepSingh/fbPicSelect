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
//import FacebookLogin from 'react-native-android-facebook-login';

export default class MainPage extends Component<{}>{

/*  constructor(nativeProps) {
    super(nativeProps)

    this.state = {
      profile: null,
      didCancelled: false
    }
  }

  async getUserProfileAndSetState() {
    const profile = await FacebookLogin.getLoggedInUserProfile()

    if (profile) {
      this.setState({
        profile
      })
    }
  }

  async logIn() {
    const loggedIn = FacebookLogin.isLoggedIn()

    if (loggedIn) {
        this.getUserProfileAndSetState()
        return
    }

    const loginResult = await FacebookLogin.logInWithReadPermissions(['public_profile'])

    if (loginResult.isCancelled) {
        this.setState({
          didCancelled: true
        })

      return
    }

      this.getUserProfileAndSetState()
  }user_photos
*/

  _fbAuth() {
      console.log("heelloo");
      LoginManager.logOut();
      console.log("logged out");
      LoginManager.logInWithReadPermissions(['public_profile']).then(
          function(result) {
              if (result.isCancelled) {
                  console.log('Login cancelled');
              } else {
                  console.log('Login success with permissions: ' +
                      result.grantedPermissions.toString());
                  Actions.anotherpage();    
              }
          },
          function(error) {
              console.log('Login fail with error: ' + error);
          }
      );
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
