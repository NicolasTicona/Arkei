import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }

  isUser(){
    let user = firebase.auth().currentUser;
    if(user != null){
      return user;
    }else{
      return 'No user';
    }
  }

  EnterNameUser(name){
    let user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL: ''
    })
      .catch((err)=>{
        console.log(err)
      })
  }

  RegisterUser(userdata){
    firebase.auth().createUserWithEmailAndPassword(userdata.email,userdata.password)
      .catch(err => {
        console.log(err)
    })
  }

  LoginUser(userdata){
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
    .catch(err => {
      console.log(err)
    })
  }

  CloseSession(){
    firebase.auth().signOut()
      .then(() =>{
        console.log('Sesion cerrada')
      })
      .catch((err) =>{
        console.log(err)
      })
  }

}
