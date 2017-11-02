import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService, ILocalStorageServiceConfig } from 'angular-2-local-storage';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userdata: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.email],
      'password': ['', Validators.minLength(6)]
    })
  }

  onSubmit(){
    this.userdata = this.saveRegister()
    this.authService.LoginUser(this.userdata)
    this.router.navigate(['/'])
  }

  saveRegister(){
    let data = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }

    return data;
  }

}
