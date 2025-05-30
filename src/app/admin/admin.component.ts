import { Component } from '@angular/core';

interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  services: Service[] = [
    {
      id: 1,
      name: 'Cleaning Services',
      description: 'Professional home cleaning services for a spotless environment.',
      icon: 'fas fa-broom'
    },
    {
      id: 2,
      name: 'Plumbing',
      description: '24/7 emergency plumbing services and maintenance.',
      icon: 'fas fa-wrench'
    },
    {
      id: 3,
      name: 'Electrical Work',
      description: 'Licensed electricians for all your electrical needs.',
      icon: 'fas fa-bolt'
    },
    {
      id: 4,
      name: 'Painting',
      description: 'Interior and exterior painting services.',
      icon: 'fas fa-paint-roller'
    },
    {
      id: 5,
      name: 'Gardening',
      description: 'Professional landscaping and garden maintenance.',
      icon: 'fas fa-leaf'
    },
    {
      id: 6,
      name: 'Pest Control',
      description: 'Effective pest control solutions for your home.',
      icon: 'fas fa-bug'
    }
  ];

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  bookService(service: Service) {
    alert(`Booking service: ${service.name}`);
    // Implement actual booking logic here
  }

  onSubmit() {
    console.log('Form submitted:', this.contactData);
    // Implement actual form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    this.contactData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
