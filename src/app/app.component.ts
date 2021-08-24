import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any;
  isSelected= true;

  onClick() {
    this.isSelected = !this.isSelected;
  }

}
