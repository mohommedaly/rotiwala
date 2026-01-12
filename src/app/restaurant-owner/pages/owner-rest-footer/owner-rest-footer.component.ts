import { Component } from '@angular/core';

@Component({
  selector: 'app-owner-rest-footer',
  templateUrl: './owner-rest-footer.component.html',
  styleUrl: './owner-rest-footer.component.scss'
})
export class OwnerRestFooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear(); // Dynamically get the current year
  }

}
