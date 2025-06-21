import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsAppComponent {
  redirectToWhatsApp(): void {
    window.open('https://wa.me/21693025897?text=Bonjour%2C%20je%20suis%20l%27administrateur%20du%20site.%20N%27h%C3%A9sitez%20pas%20%C3%A0%20me%20poser%20vos%20questions%20concernant%20nos%20services.', '_blank');
  }
}
