import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = environment.BASE_URL

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  login(username, password): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers = headers.append('Authorization','Basic ' + window.btoa(username + ':' + password));

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    var bodyString:string = body.toString();

    sessionStorage.setItem('token', window.btoa(username + ':' + password))

    const url = `${this.BASE_URL}/me/login`
    
    return this.httpClient.post<any>(url,bodyString,{headers})
    .pipe(
      map(
        res =>{
          console.log('Success')
        },
        error =>{
          console.log("Error " +error)
        }
      )
    )

    // if (username && password !== undefined) {
    //   return true;
    // }
    // return false;
  }
}
