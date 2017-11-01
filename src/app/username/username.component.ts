import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import{ AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  dataForm: FormGroup;
  username: any;

  constructor(private authService: AuthService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      'name': ''
    })
  }

  onSubmit(){
    this.username = this.SaveName();
    this.authService.EnterNameUser(this.username.name);
    let status = firebase.auth().currentUser;
    console.log(status);
    this.router.navigate(['/'])
  }

  SaveName(){
    let data = {
      name: this.dataForm.get('name').value
    }

    return data;
  }

}
