import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('isActive') isLiked = false;
  @Input('likesCount') count = 1;
  default = "#ccc";
  deeppink(){
     this.isLiked ? 'deeppink' : '#ccc';
  }

  like() {
    this.isLiked = !this.isLiked;
    this.count += this.isLiked ? 1 : -1; 
  }
}
