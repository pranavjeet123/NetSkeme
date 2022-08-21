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

  changeText() {
    this.value= !this.value
  }

  retainDiv(){
    this.value = true;
  }
}
