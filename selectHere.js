import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FBSDK , {LoginManager , AccessToken, GraphRequestManager, GraphRequest} from 'react-native-fbsdk';

export default class ShowPics extends Component<{}>{

  _picSelect(){
    console.log("in picselect");
    const responseInfoCallback = (error, result) => {
                if (error) {
                  console.log(error)
                  console.log('Error fetching data: ' + error.toString());
                } else {
                  console.log(result)
                  console.log('Success fetching data: ' + result.toString());
                }
              }
    console.log("after reasp feawfnjn");
    const infoRequest = new GraphRequest(
    '/me/photos',
    {parameters: {
                    fields: {
                      string: 'email,name,link,picture,webp_images'
                    }
                  }
            },
                responseInfoCallback
    );
    console.log("after user id req");
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
    console.log("after graph req");

  }

  render(){
    return(
      <View style= {styles.container}  >
        <Text style = {styles.welcome} >
          You are logged in!
        </Text>
        <Button title="Select your Photos" onPress={this._picSelect}  />
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
