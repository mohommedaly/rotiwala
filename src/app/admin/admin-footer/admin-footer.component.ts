import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrl: './admin-footer.component.scss'
})
export class AdminFooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear(); // Dynamically get the current year
  }
}
