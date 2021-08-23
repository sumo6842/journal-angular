import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private _author: string[];
  constructor() {
    this._author = ['Duc', 'Conan Doylce', 'Joshua Bloch'];
  }

  get author() {return this._author;}

}
