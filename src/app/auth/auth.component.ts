import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registerForm: FormGroup;
  userdata: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'email': ['', Validators.email],
      'password': ['', Validators.minLength(6)]
    })
  }

  onSubmit(){
    this.userdata = this.saveRegister()
    this.authService.RegisterUser(this.userdata)
    this.router.navigate(['/name'])
  } 

  saveRegister(){
    let data = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    }

    return data;
  }

}
