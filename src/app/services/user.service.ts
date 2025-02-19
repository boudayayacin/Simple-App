import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  })
  }

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string ='https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<UserModel[]> {
  return this.http.get<UserModel[]>(this.usersUrl)
  }
}
