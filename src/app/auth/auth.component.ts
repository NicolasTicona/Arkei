import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
      'email': '',
      'password': ''
    })
  }

  onSubmit(){
    this.userdata = this.saveRegister(); 
  }

  saveRegister(){
    let data = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    }

    return data;
  }

}
