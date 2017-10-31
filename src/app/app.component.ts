import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit(){
    var config = {
      apiKey: "AIzaSyC5MRVx_Sxs3TYDiRb6dEukHPwJR3bbFkI",
      authDomain: "arkei-project.firebaseapp.com",
      databaseURL: "https://arkei-project.firebaseio.com",
      projectId: "arkei-project",
      storageBucket: "arkei-project.appspot.com",
      messagingSenderId: "689852721677"
    };
    firebase.initializeApp(config);
  }
}
