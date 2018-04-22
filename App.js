import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Alert
} from 'react-native';

export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {pontos: 0};

  }

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

  salvarDados(){
    var funcionarios = firebase.database().ref("funcionarios");
    // database.ref("pontuacao").remove();

    // funcionarios.child("001").child("nome").set("Jamilton");
    // funcionarios.push().child("nome").set("Jamilton");
    // funcionarios.push().set(
    //   {nome: "Jamilton Damasceno",
    //   altura: "1,75",
    //   peso: "70kg"}
    // );
  }

  listarDados(){
    var pontuacao = firebase.database().ref("pontuacao");
    // adiciona um listener
    pontuacao.on('value', (snapshot) => {
      this.setState({pontos: snapshot.val()});
    });
  }


  render() {
    return (
      <View>

        <Button
          onPress={() => {this.salvarDados();}}
          title="Salvar dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />

        <Button
          onPress={() => {this.listarDados();}}
          title="Listar dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />
        <Text>{this.state.pontos}</Text>
      </View>
    );
  }
}
