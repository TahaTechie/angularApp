import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  username:string = "";
  email:string = "";
  constructor() {
    
  }
  setData(username:string,email:string){
    this.username = username;
    this.email = email;
  }
  getData(){
    return [this.username , this.email];
  }
}
