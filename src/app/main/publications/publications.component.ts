import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService, ILocalStorageServiceConfig } from 'angular-2-local-storage';
import{ AuthService } from '../../services/auth.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  user: any = {
    'providerData': '',
  };

  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  // loadData(){
  //   let status = firebase.auth().currentUser;
  //   this.user = status;
  //   console.log(status);
  // }

  CloseSession(){
    this.authService.CloseSession()
  }

}
