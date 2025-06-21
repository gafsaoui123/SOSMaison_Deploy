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
  services: Service[] = [];
  categories: string[] = ["Tous les services", "Réparations", "Entretien", "Construction", "Décoration", "Extérieur", "Sécurité"];
  selectedCategory = "Tous les services";

  Math: any = Math;

  constructor(
    private router: Router,
    private productService: ProductService,
    private imageProcessingServivce: ImageProcessingService
  ) {}

  currentYear: number = new Date().getFullYear();

  providers: ServiceProvider[] = [
    {
      id: 1,
      name: 'John Smith',
      location: 'New York, NY',
      rating: 4.9,
      reviews: 127,
      description: 'Plombier et menuisier professionnel avec 8 ans d’expérience. Spécialiste des rénovations de salle de bain et réparations de dégâts d’eau.',
      services: ['Services de plomberie', 'Services de menuiserie'],
      experience: 8,
      image: 'assets/app/home/images/im3.png'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Chicago, IL',
      rating: 4.8,
      reviews: 94,
      description: 'Femme de ménage et jardinière expérimentée. Propose des solutions de nettoyage écologiques et un entretien complet du jardin.',
      services: ['Nettoyage à domicile', 'Jardinage & Paysagisme'],
      experience: 5,
      image: 'assets/app/home/images/i2.jpg'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      location: 'Los Angeles, CA',
      rating: 4.7,
      reviews: 112,
      description: 'Électricien agréé spécialisé dans les installations domestiques et les systèmes de sécurité. Certifié en domotique.',
      services: ['Services électriques', 'Sécurité domestique'],
      experience: 10,
      image: 'assets/app/home/images/im1.jpg'
    }
  ];

  testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Lona gharbi',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    text: 'Le plombier que j’ai trouvé via SafeHomeConnect était professionnel, ponctuel et a réparé ma fuite pour un prix raisonnable. Je recommande vivement !'
  },
  {
    id: 2,
    name: 'Ali Kalela',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
    rating: 5,
    text: 'J’avais besoin d’un électricien en urgence après une panne, et SafeHomeConnect m’en a trouvé un en moins d’une heure. Service excellent !'
  },
  {
    id: 3,
    name: 'Bouthaina Maghraoui',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'Le service de nettoyage réservé via cette plateforme a dépassé mes attentes. Ma maison n’a jamais été aussi propre, et le personnel était très professionnel.'
  }
];


  viewAllProviders(): void {
    this.router.navigate(['/providers']);
  }

  ngOnInit(): void {
    this.get3Products();

    this.services = [
      {
        id: 1,
        name: "Services de plomberie",
        category: "Réparations",
        description: "Plombiers experts pour réparations, installations et urgences. Nous répondons à tous vos besoins en plomberie.",
        rating: 4.8,
        reviews: 156,
        priceRange: "50dt-150dt/h",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7TF0ifsTC1D0hygKoaraJvKP0GU7ip-r-Q&s",
        iconClass: "https://icones.pro/wp-content/uploads/2022/02/icone-de-service-orange.png",
        icon: ''
      },
      {
        id: 2,
        name: "Services électriques",
        category: "Réparations",
        description: "Électriciens certifiés pour tous vos besoins : câblage, installations, rénovations.",
        rating: 4.7,
        reviews: 142,
        priceRange: "60dt-180dt/h",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        iconClass: "https://static.vecteezy.com/ti/vecteur-libre/p1/579208-vecteur-de-foudre-icones-flash-power-gratuit-vectoriel.jpg",
        icon: ''
      },
      {
        id: 3,
        name: "Nettoyage à domicile",
        category: "Entretien",
        description: "Service de nettoyage professionnel pour un intérieur impeccable. Programmes de nettoyage régulier disponibles.",
        rating: 4.9,
        reviews: 203,
        priceRange: "25dt-45dt/h",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        iconClass: "https://static.vecteezy.com/ti/vecteur-libre/p1/27680564-maison-nettoyage-logo-sur-lettre-o-concept-avec-nettoyer-brosse-icone-femme-de-menage-un-service-symbole-vectoriel.jpg",
        icon: ''
      },
      {
        id: 4,
        name: "Services de jardinage",
        category: "Jardinage",
        description: "Jardinage professionnel pour l'entretien de votre espace extérieur. Services de tonte, taille et aménagement paysager.",
        rating: 4.6,
        reviews: 98,
        priceRange: "45dt-120dt/h",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GPrLt7rar6P4T6HfW3k9WemkB20y7unNrQ&s",
        iconClass: "https://us.123rf.com/450wm/surfupvector/surfupvector2212/surfupvector221200498/195550697-arrosoir-illustration-vectorielle-outil-agricole-et-arrosoir-isol%C3%A9-sur-fond-blanc-concept-de.jpg?ver=6",
        icon: ''
      }
      
    ];
  }

  filterServices(category: string): void {
    this.selectedCategory = category;
  }

  get filteredServices(): Service[] {
    if (this.selectedCategory === "Tous les services") {
      return this.services;
    }
    return this.services.filter(service => service.category === this.selectedCategory);
  }

  contactProvider(productId: number): void {
    console.log(`Contacter le prestataire avec ID : ${productId}`);
    this.router.navigate(['/userViewMe', { productId: productId }]);
  }

  products: Product[] = [];

  public get3Products() {
    this.productService.get3Products(0)
      .pipe(
        map((x: Product[], i) => x.map((product: Product) => this.imageProcessingServivce.createImages(product)))
      )
      .subscribe(
        (resp: Product[]) => {
          this.products = resp;
          console.log('Produits chargés :', this.products);
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la récupération des produits :', error);
        }
      );
  }

  isProfileModalVisible: boolean = false;

  openProfileModal() {
    this.isProfileModalVisible = true;
  }

  closeProfileModal() {
    this.isProfileModalVisible = false;
  }

  toggleProfileModal() {
    this.isProfileModalVisible = !this.isProfileModalVisible;
  }

  redirectToWhatsApp() {
    this.closeProfileModal();
    window.open('https://wa.me/21693025897?text=Bonjour%2C%20je%20suis%20l%27administrateur%20du%20site.%20N%27h%C3%A9sitez%20pas%20%C3%A0%20me%20poser%20vos%20questions%20concernant%20nos%20services.', '_blank');
  }
}
