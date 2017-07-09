import { Injectable } from '@angular/core';
import {Headers,Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class AssociateService {
  private associateDetailsUrl='api/associateDetails' //URL to web API

  constructor(private http:Http) { }

  getAssociate(){
   // const url=`${this.associateDetailsUrl}/${id}`;
    return this.http
    .get('./data.json')
   // .toPromise().then(response=>response.json().data as AssociateDetails)
    .map((response:Response)=>response.json());
    
//return this.http.get(url).toPromise()
//.then(response=>response.json().data as Hero)
//.catch(this.handleError);
    //this.http.get('src/data/associatedetails.json').map((response)=>response.json).subscribe(
    //  (data)=>console.log(data)
   // )
  }

}
