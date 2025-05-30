import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../_model/product.model';
import { map } from 'rxjs';
import { ImageProcessingService } from '../services/image-processing.service';
import { HttpErrorResponse } from '@angular/common/http';




interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}


interface Service {
  iconClass: any;
    id: number;
    name: string;
    category: string;
    description: string;
    rating: number;
    reviews: number;
    priceRange: string;
    image: string;
    icon: string;
  }

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: Service[] = []
  categories: string[] = ["All Services", "Repairs", "Maintenance", "Construction", "Decoration", "Outdoor", "Security"]
  selectedCategory = "All Services"
// Add this to both component classes
Math: any = Math;  

  constructor(private router: Router,private productService: ProductService,private imageProcessingServivce: ImageProcessingService) {}
 
  currentYear: number = new Date().getFullYear();
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
      image: 'src/app/home/images/im3.png'
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
    }
  ];
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Amanda Thompson',
      image: 'assets/images/testimonials/amanda.jpg',
      rating: 5,
      text: 'The plumber I found through SafeHomeConnect was professional, punctual, and fixed my leaky faucet for a reasonable price. Highly recommend!'
    },
    {
      id: 2,
      name: 'Robert Johnson',
      image: 'assets/images/testimonials/robert.jpg',
      rating: 5,
      text: 'I needed an emergency electrician after a power outage, and SafeHomeConnect connected me with someone who arrived within an hour. Excellent service!'
    },
    {
      id: 3,
      name: 'Jennifer Lee',
      image: 'assets/images/testimonials/jennifer.jpg',
      rating: 5,
      text: 'The cleaning service I booked through this platform exceeded my expectations. My home has never looked better, and the staff was friendly and professional.'
    }
  ];

  viewAllProviders(): void {
    this.router.navigate(['/providers']);
  }

  
  ngOnInit(): void {

    this.getallProducts();
    this.services = [
      {
        id: 1,
        name: "Plumbing Services",
        category: "Repairs",
        description: "Expert plumbers for repairs, installations, and emergencies. We handle all your plumbing needs.",
        rating: 4.8,
        reviews: 156,
        priceRange: "$50-$150/hr",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        iconClass: "fa-wrench",
        icon: ''
      },
      {
        id: 2,
        name: "Electrical Services",
        category: "Repairs",
        description: "Licensed electricians for all your electrical needs. From rewiring to installations.",
        rating: 4.7,
        reviews: 142,
        priceRange: "$60-$180/hr",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        iconClass: "fa-bolt",
        icon: ''
      },
      {
        id: 3,
        name: "Home Cleaning",
        category: "Maintenance",
        description: "Professional cleaning services to keep your home spotless. Regular cleaning schedules available.",
        rating: 4.9,
        reviews: 203,
        priceRange: "$25-$45/hr",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        iconClass: "fa-star",
        icon: ''
      },
      {
        id: 4,
        name: "Carpentry Services",
        category: "Construction",
        description: "Skilled carpenters for furniture assembly, repairs, custom woodwork, and more.",
        rating: 4.6,
        reviews: 98,
        priceRange: "$45-$120/hr",
        // Updated with a better carpentry image showing woodworking/carpentry tools
        image: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        iconClass: "fa-hammer",
        icon: ''
      },
    ]
  }

  

  filterServices(category: string): void {
    this.selectedCategory = category
  }

  get filteredServices(): Service[] {
    if (this.selectedCategory === "All Services") {
      return this.services
    }
    return this.services.filter((service) => service.category === this.selectedCategory)
  }

  contactProvider(productId: number): void {
    console.log(`Contacting provider with ID: ${productId}`);
    this.router.navigate(['/userViewMe', {productId: productId}]);}

  
    products: Product[] = [];
    public getallProducts() {
        this.productService.getAllProducts()
        .pipe(
          map((x: Product[], i)=>x.map((product: Product) => this.imageProcessingServivce.createImages(product)))
        )
        .subscribe(
          (resp: Product[]) => {
            this.products = resp;
            console.log('Products loaded:', this.products);
          },
          (error: HttpErrorResponse) => {
            console.error('Error fetching products:', error);
          }
        );
      }

}
