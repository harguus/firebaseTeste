import firebase from 'firebase';
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Alert
} from 'react-native';

export default class App extends Component<Props> {

  // constructor(props){
  //   super(props);
  //
  //   this.state = {pontos: 0};
  //
  // }
  constructor(props){
    super(props);

    this.state = {erroMessege: ''};

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

  // salvarDados(){
  //   var funcionarios = firebase.database().ref("funcionarios");
  //   // database.ref("pontuacao").remove();
  //
  //   // funcionarios.child("001").child("nome").set("Jamilton");
  //   // funcionarios.push().child("nome").set("Jamilton");
  //   // funcionarios.push().set(
  //   //   {nome: "Jamilton Damasceno",
  //   //   altura: "1,75",
  //   //   peso: "70kg"}
  //   // );
  // }

  // listarDados(){
  //   var pontuacao = firebase.database().ref("pontuacao");
  //   // adiciona um listener
  //   pontuacao.on('value', (snapshot) => {
  //     this.setState({pontos: snapshot.val()});
  //   });
  // }


  // render() {
  //   return (
  //     <View>
  //
  //       <Button
  //         onPress={() => {this.salvarDados();}}
  //         title="Salvar dados"
  //         color="#841584"
  //         accessibilityLabel="Salvar dados"
  //       />
  //
  //       <Button
  //         onPress={() => {this.listarDados();}}
  //         title="Listar dados"
  //         color="#841584"
  //         accessibilityLabel="Salvar dados"
  //       />
  //       <Text>{this.state.pontos}</Text>
  //     </View>
  //   );

  cadastrarUsuario(){
    var email = "a@aaa.com";
    var senha = "123456";

    const user = firebase.auth();
    user.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (e) => {
        //e.code
        //e.message
        this.setState({erroMessege: e.message});
      }
    );
  }

  verificarUsuarioLogado(){
    const usuario = firebase.auth();

    // método 1
    // const usuarioAtual = usuario.currentUser;
    //
    // if (usuarioAtual) {
    //   // converte obg para string
    //   // const str = JSON.stringify(usuarioAtual);
    //   Alert.alert("usuário logado");
    // }else {
    //   Alert.alert("usuário não está logado");
    // }

    // método 2
    //  recomendado.
    usuario.onAuthStateChanged(
      (usuarioAtual)=> {
        if (usuarioAtual) {
          // converte obg para string
          // const str = JSON.stringify(usuarioAtual);
          Alert.alert("usuário logado");
        }else {
          Alert.alert("usuário não está logado");
        }
      }
    );
  }

  deslogaUsuario(){
    const usuario = firebase.auth();

    usuario.signOut();
  }

  logarUsuario(){
    var email = "a@aaa.com";
    var senha = "123456";

    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(
      email, senha
    ).catch(
      (error) => {
        Alert.alert(error.message);
      }
    );
  }

  render() {
    return (
      <View>

        <Button
          onPress={() => {this.cadastrarUsuario();}}
          title="Cadastrar usuario"
          color="#841584"
          accessibilityLabel="Cadastrar usuario"
        />

        <Button
          onPress={() => {this.verificarUsuarioLogado();}}
          title="Verificar usuário logado"
          color="#841584"
        />

        <Button
          onPress={() => {this.deslogaUsuario();}}
          title="Deslogar usuário"
          color="#841584"
        />

        <Button
          onPress={() => {this.logarUsuario();}}
          title="Logar usuário"
          color="#841584"
        />
        <Text>{this.state.erroMessege}</Text>
      </View>
    );
  }
}
