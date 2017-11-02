import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../services/publications.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  publication: any;
  publicationForm: FormGroup;

  userdata: any;

  constructor(private formBuilder: FormBuilder,
              private publicationsService: PublicationsService,
              private router: Router, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.publicationForm = this.formBuilder.group({
      'publication': ''
    })
  }

  onSubmit(){
    this.publication = this.savePublication()
    this.publicationsService.postPublication(this.publication)
      .subscribe(newp =>{

      })
    this.router.navigate(['/'])
  } 

  savePublication(){
    let user = firebase.auth().currentUser;
    this.userdata = user.providerData;

    let data = {
      text: this.publicationForm.get('publication').value,
      name: user.displayName,
      email: user.email
    }

    return data;
  }

}
