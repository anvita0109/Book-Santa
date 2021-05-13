import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import firebase from 'firebase'
import db from '../config'
import LottieView from 'lottie-react-native'

export default class WelcomeScreen extends React.Component {
  
    constructor(){
        super();
        this.state = {
            emailBox: '',
            passwordBox: ''
        }
    }

    userSignUp = (email, password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then((response)=>{
            return(Alert.alert("user added succesfully"))
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return(
                Alert.alert(errorMessage)
            )
        })
    }

    userLogin = (email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then((response)=>{
            return(Alert.alert("user logged in succesfully"))
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return(
                Alert.alert(errorMessage)
            )
        })
    }


    render(){
      return (
        <View style={styles.container}>
          <View>
              <LottieView
                        style= {{width:'50%', height: '50%'}} 
                        source = {require('../assets/42321-santa-surprise-gift.json')}
                        autoplay loop
            />
              <Text>Book Santa</Text>
          </View>

          <View>
            <TextInput
                style = {styles.loginBox}
                placeholder = "abc@example.com"
                keyboardType = "email-address"
                onChangeText = {(text)=>
                    {this.setState({
                        emailBox: text
                    })}}
            />

            <TextInput
                style = {styles.loginBox}
                placeholder = "password"
                secureTextEntry = {true}
                onChangeText = {(text)=>
                    {this.setState({
                        passwordBox: text
                    })}}
            />

            <TouchableOpacity 
                    style={styles.button}
                    onPress= {()=>{
                        this.userLogin(this.state.emailBox, this.state.passwordBox);
                    }}
                    >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                    style={styles.button}
                    onPress= {()=>{
                        this.userSignUp(this.state.emailBox, this.state.passwordBox);
                    }}
                    >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>



          
        </View>
    );}
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{

    },
    buttonText:{

    },
    loginBox:{

    },
  });
  