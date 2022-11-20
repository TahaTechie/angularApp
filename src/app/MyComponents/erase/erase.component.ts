import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-erase',
  templateUrl: './erase.component.html',
  styleUrls: ['./erase.component.css']
})
export class EraseComponent {
  constructor(private shared:SharedService){

  }
  onClick(){
    this.shared.setData("","");
  }
}
