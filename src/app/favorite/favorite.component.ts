import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isClicked = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeStatusOfClicked() {
    this.isClicked = !this.isClicked;
  }

}
