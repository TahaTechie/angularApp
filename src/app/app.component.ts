import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-practice-app';
  username:string="";
  email:string="";
  constructor(){
    /*
    setTimeout(() => {
      this.title = "My Application"
    }, 2000);
    */
  }
  ngOnInit():void{
    //this.shared.setData(this.username,this.email);
  }
  
}
