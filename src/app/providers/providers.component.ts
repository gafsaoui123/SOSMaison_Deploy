import { Component, OnInit } from '@angular/core';

interface ServiceProvider {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  description: string;
  services: string[];
  experience: number;
  image: string;
}

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
 providers: ServiceProvider[] = [
  {
    id: 1,
    name: 'Ali Ben Youssef',
    location: 'Tunis, Tunisie',
    rating: 4.9,
    reviews: 127,
    description: 'Plombier et menuisier professionnel avec 8 ans d\'expérience. Spécialisé dans la rénovation de salles de bain et la réparation des dégâts des eaux.',
    services: ['Services de plomberie', 'Services de menuiserie'],
    experience: 8,
    image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg'
  },
  {
    id: 2,
    name: 'Nour El Houda',
    location: 'Alger, Algérie',
    rating: 4.8,
    reviews: 94,
    description: 'Femme de ménage et jardinière expérimentée. Propose des solutions de nettoyage écologiques et des services d\'entretien de jardin.',
    services: ['Nettoyage de maison', 'Jardinage et aménagement paysager'],
    experience: 5,
    image: 'https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg'
  },
  {
    id: 3,
    name: 'Omar Farhat',
    location: 'Casablanca, Maroc',
    rating: 4.7,
    reviews: 112,
    description: 'Électricien agréé spécialisé dans les systèmes électriques domestiques et les installations de sécurité. Certifié en technologie de maison intelligente.',
    services: ['Services électriques', 'Sécurité domestique'],
    experience: 10,
    image: 'https://images.pexels.com/photos/5433913/pexels-photo-5433913.jpeg'
  },
  {
    id: 4,
    name: 'Yasmine Chaabane',
    location: 'Sfax, Tunisie',
    rating: 4.9,
    reviews: 78,
    description: 'Peintre professionnelle et décoratrice d\'intérieur avec un grand sens du détail. Spécialisée dans les designs modernes et minimalistes.',
    services: ['Services de peinture', 'Décoration'],
    experience: 7,
    image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg'
  },
  {
    id: 5,
    name: 'Ahmed Nasri',
    location: 'Rabat, Maroc',
    rating: 4.6,
    reviews: 106,
    description: 'Technicien CVC et plombier avec plus de dix ans d\'expérience. Spécialisé dans l\'installation et la réparation des systèmes de chauffage et de climatisation.',
    services: ['Services CVC', 'Services de plomberie'],
    experience: 12,
    image: 'https://images.pexels.com/photos/3779832/pexels-photo-3779832.jpeg'
  },
  {
    id: 6,
    name: 'Layla Bensaid',
    location: 'Beyrouth, Liban',
    rating: 4.8,
    reviews: 87,
    description: 'Menuisière et peintre qualifiée spécialisée dans le mobilier sur mesure et la fabrication d\'armoires. Passionnée par les matériaux durables.',
    services: ['Services de menuiserie', 'Services de peinture'],
    experience: 6,
    image: 'https://images.pexels.com/photos/7249217/pexels-photo-7249217.jpeg'
  }
];



  serviceCategories: string[] = [
  'Tous les services',
  'Services de plomberie',
  'Services de menuiserie',
  'Nettoyage de maison',
  'Jardinage et aménagement paysager',
  'Services électriques',
  'Sécurité domestique',
  'Services de peinture',
  'Décoration',
  'Services CVC'
];


  selectedCategory: string = 'All Services';
  searchTerm: string = '';
// Add this to both component classes
  Math: any = Math;

  constructor() { }

  ngOnInit(): void {
    // This is where you would typically fetch data from an API
    // this.loadProviders();
  }

  // Method to search providers
  searchProviders(): void {
    console.log(`Searching for: ${this.searchTerm} in category: ${this.selectedCategory}`);
    // Implement your search logic here
    // This would typically filter the providers based on search term and category
  }

  // Method to contact a provider
  contactProvider(providerId: number): void {
    console.log(`Contacting provider with ID: ${providerId}`);
    // Implement your contact logic here
  }

  // This method would be used when implementing API calls
  // private loadProviders(): void {
  //   this.providerService.getAllProviders().subscribe(
  //     (data) => {
  //       this.providers = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching providers:', error);
  //     }
  //   );
  // }
}