import { Component, OnInit } from '@angular/core';
import { LocalStorageService} from 'angular-2-local-storage';
import { AuthService } from '../../services/auth.service';
import { PublicationsService } from '../../services/publications.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications: any = [];

  constructor(private authService: AuthService,
              private publicationsService: PublicationsService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {

    this.publicationsService.getPublications()
      .subscribe(publications =>{
        for(const id in publications){
          this.publications.unshift(publications[id]);
        }
      })
  }


  CloseSession(){
    this.authService.CloseSession()
  }

}
