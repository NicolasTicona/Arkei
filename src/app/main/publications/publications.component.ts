import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsernameComponent } from '../../username/username.component'
import{ AuthService } from '../../services/auth.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  user: any = {
    displayName: '',
    email: '',
    photoUrl: ''
  };

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  loadData(){
    let status = firebase.auth().currentUser;
    this.user = status;
    console.log(status);
  }

  CloseSession(){
    this.authService.CloseSession();
    this.router.navigate(['/auth'])
  }

}
