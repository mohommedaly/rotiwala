import { Component } from '@angular/core';

@Component({
  selector: 'app-owner-rest-nav',
  templateUrl: './owner-rest-nav.component.html',
  styleUrl: './owner-rest-nav.component.scss'
})
export class OwnerRestNavComponent {

  clearLocal(){
    localStorage.clear();
  }
}
