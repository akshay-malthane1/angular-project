import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(private _http: HttpClient) { } 

  createUser(user){
    return this._http.post("http://localhost:3000/posts", user );
  };
  getAllUser(){
    return this._http.get("http://localhost:3000/posts")
  };
  deleteUser(user){
    return this._http.delete("http://localhost:3000/posts/" +user.id)
  }
  updateUser(user){
    return this._http.put("http://localhost:3000/posts/" +user.id, user)
  }
}