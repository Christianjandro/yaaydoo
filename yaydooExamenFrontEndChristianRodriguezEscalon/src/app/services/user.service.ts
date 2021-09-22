import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../users/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getListUsers(): Observable<any>{

    return this.http.get(this.url + "getListUsers");
  }

  deleteUsers(id:any): Observable<any>{

    return this.http.get(this.url + "deleteUsers",{
      params: {"id": id}
    });
  }

  saveUsers(usr:any): Observable<any>{
    return this.http.get(this.url + "saveUser",{
      params: usr
    });
  }
}
