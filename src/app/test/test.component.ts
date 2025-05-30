import { Component, OnInit } from '@angular/core';

// Define the Service interface

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  

  constructor() {}

  
  showPhone = false;
  phoneNumber = '+216 55 123 456';

  ratingCriteria = [
    { label: 'Politesse', value: 5.0 },
    { label: 'Qualité', value: 5.0 },
    { label: 'Coût', value: 5.0 },
    { label: 'Ponctualité', value: 5.0 }
  ];

  togglePhone() {
    this.showPhone = !this.showPhone;
    if (!this.showPhone) return;
  }

  copyNumber() {
    navigator.clipboard.writeText(this.phoneNumber).then(() => {
      alert('Numéro copié !');
    });
  }

  callNow() {
    window.location.href = `tel:${this.phoneNumber.replace(/\s/g, '')}`;
  }
}