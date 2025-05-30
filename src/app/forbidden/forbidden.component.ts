import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent {
  show403 = false;

  @ViewChild('first') firstDot!: ElementRef;
  @ViewChild('second') secondDot!: ElementRef;
  @ViewChild('third') thirdDot!: ElementRef;
  @ViewChild('redirectBtn') redirectBtn!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  reconnect(): void {
    setTimeout(() => {
      this.firstDot.nativeElement.classList.toggle('num-four');
      this.secondDot.nativeElement.classList.toggle('num-zero');
      this.thirdDot.nativeElement.classList.toggle('num-three');
      this.container.nativeElement.classList.toggle('_403');
      this.redirectBtn.nativeElement.classList.toggle('visible');
    }, 1500);
  }
}

