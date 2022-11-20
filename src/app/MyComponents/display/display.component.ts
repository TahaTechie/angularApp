import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  username:string ="";
  email:string= "";
  constructor(private shared:SharedService){
    /*
    setTimeout(() => {
      this.title = "My Application"
    }, 2000);
    */
  }
  ngOnInit():void{
    [this.username,this.email] = this.shared.getData();
  }
}
