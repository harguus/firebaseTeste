import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class App extends Component<Props> {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyAJDDbgQfyepyFYh9ZONUgiSiCn9DVPioU",
      authDomain: "configuracaofirebasereac-a6b5f.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-a6b5f.firebaseio.com",
      projectId: "configuracaofirebasereac-a6b5f",
      storageBucket: "",
      messagingSenderId: "205343649152"
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Text>Meu App</Text>
      </View>
    );
  }
}
