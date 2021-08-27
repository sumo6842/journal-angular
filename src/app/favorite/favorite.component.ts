import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input('isFavorite') isFavorite= true;
  @Output() change = new EventEmitter();
  
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}
