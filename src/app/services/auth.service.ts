import { Injectable } from '@angular/core';
import { LocalStorageService, ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private localStorageService: LocalStorageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) { }

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
        this.router.navigate(['/auth'])
    })
  }

  LoginUser(userdata){
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password)
    .then(()=>{
      this.router.navigate(['/login'])
    })
    .catch(err => {
      console.log(err)
      this.router.navigate(['/login'])
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

    this.localStorageService.clearAll();
    this.router.navigate(['/auth']) 
  }

}
