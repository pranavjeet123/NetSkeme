import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netSkeme';
  value: boolean = false;
  color1:any;
  color2:any;
  color3:any;
  color4:any;
  color5:any;
  color6:any;
  color7:any;
  color8:any;
  color9:any;

  changeText() {
    this.value= !this.value
  }

  retainDiv(){
    this.value = true;
  }
}
