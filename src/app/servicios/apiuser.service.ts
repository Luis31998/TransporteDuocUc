import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Iusuarios } from '../interfaces/iusuarios';

@Injectable({
  providedIn: 'root'
})
export class ApiuserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  // Se establece la base url del API a consumir
  apiURL = 'https://nancyb3a.github.io/Test/usuarios_PGY4121_09.json';

  constructor(private http: HttpClient) { }



  getUsers(): Observable<any> {
    return this.http.get<Iusuarios>(this.apiURL).pipe(
      retry(3)
    );
  }

  // getUser(userId): Observable<any> {
  //   return this.http.get(this.apiURL + '/users/' + userId).pipe(
  //     retry(3)
  //   );
  // }

  
}
