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
      name: 'John Smith',
      location: 'New York, NY',
      rating: 4.9,
      reviews: 127,
      description: 'Professional plumber and carpenter with 8 years of experience. Specializes in bathroom renovations and water damage repair.',
      services: ['Plumbing Services', 'Carpentry Services'],
      experience: 8,
      image: 'assets/app/home/images/i0.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Chicago, IL',
      rating: 4.8,
      reviews: 94,
      description: 'Experienced house cleaner and gardener. Provides eco-friendly cleaning solutions and garden maintenance services.',
      services: ['Home Cleaning', 'Gardening & Landscaping'],
      experience: 5,
      image: 'assets/app/home/images/i2.jpg'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      location: 'Los Angeles, CA',
      rating: 4.7,
      reviews: 112,
      description: 'Licensed electrician specializing in home electrical systems and security installations. Certified in smart home technology.',
      services: ['Electrical Services', 'Home Security'],
      experience: 10,
      image: 'assets/app/home/images/im1.jpg'
    },
    {
      id: 4,
      name: 'Emily Chen',
      location: 'Boston, MA',
      rating: 4.9,
      reviews: 78,
      description: 'Professional painter and interior decorator with an eye for detail. Specializes in modern and minimalist designs.',
      services: ['Painting Services', 'Decoration'],
      experience: 7,
      image: 'assets/app/home/images/im3.png'
    },
    {
      id: 5,
      name: 'David Wilson',
      location: 'Denver, CO',
      rating: 4.6,
      reviews: 106,
      description: 'HVAC technician and plumber with over a decade of experience. Specializes in installation and repair of heating and cooling systems.',
      services: ['HVAC Services', 'Plumbing Services'],
      experience: 12,
      image: 'assets/app/home/images/i0.jpg'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      location: 'Seattle, WA',
      rating: 4.8,
      reviews: 87,
      description: 'Skilled carpenter and painter specializing in custom furniture and cabinetry. Passionate about sustainable materials.',
      services: ['Carpentry Services', 'Painting Services'],
      experience: 6,
      image: 'assets/app/home/images/i2.jpg'
    }
  ];

  serviceCategories: string[] = [
    'All Services',
    'Plumbing Services',
    'Carpentry Services',
    'Home Cleaning',
    'Gardening & Landscaping',
    'Electrical Services',
    'Home Security',
    'Painting Services',
    'Decoration',
    'HVAC Services'
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