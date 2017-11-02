import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PublicationsService {

  URL = 'https://arkei-project.firebaseio.com/publications.json';
  
  constructor(private http: Http) { }

  postPublication(data: any){
    const newPublication = JSON.stringify(data);
    const headers = new Headers({
      'Content-Type': 'application/json' 
    })

    return this.http.post(this.URL, newPublication, {headers})
      .map(res=> {
        console.log(res.json())
        return res.json();
      })
  }

  getPublications(){
    return this.http.get( this.URL )
      .map(res => res.json())
  }

}
