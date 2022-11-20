import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  title = 'my-practice-app';
  username:string="";
  email:string="";
  constructor(private shared:SharedService){
  }
  onSubmit(){
    this.username= (<HTMLInputElement>document.getElementById("username")).value;
    this.email= (<HTMLInputElement>document.getElementById("email")).value;
    this.shared.setData(this.username,this.email);
  }
}
