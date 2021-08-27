import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tweet= {
    body: '...',
    likesCount: 0,
    isLiked: false
  }
}


