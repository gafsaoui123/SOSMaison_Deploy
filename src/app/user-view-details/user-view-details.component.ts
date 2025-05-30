import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ProfileData {
  id: string;
  name: string;
  profession: string;
  imageUrl: string;
  location: string;
  verified: boolean;
  stats: {
    messages: number;
    views: number;
    notes: number;
    calls: number;
  };
  phoneNumber: string;
  photos: string[];
  description: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
  services: {
    name: string;
    icon: string;
  }[];
  qualification: {
    experience: string;
    certification: string;
  };
  rating: {
    average: number;
    politesse: number;
    qualite: number;
    cout: number;
    ponctualite: number;
  };
}

interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  verified: boolean;
  comment: string;
  date: string;
}

interface RelatedProfessional {
  id: string;
  name: string;
  image: string;
  verified: boolean;
  distance: number;
  rating: number;
  quote?: string;
  quoteAuthor?: string;
}

@Component({
  selector: 'app-user-view-details',
  templateUrl: './user-view-details.component.html',
  styleUrls: ['./user-view-details.component.css']
})
export class UserViewDetailsComponent implements OnInit {
  profileData: ProfileData | null = null;
  reviews: Review[] = [];
  relatedPros: RelatedProfessional[] = [];
  selectedPhoto: string | null = null;
  showPhone: boolean = false;

  ngOnInit(): void {
    // Initialize with mock data
    this.loadMockData();
  }

  loadMockData(): void {
    // Mock profile data
    this.profileData = {
      id: '1',
      name: 'Slim Riahi',
      profession: 'Plombier',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      location: 'El Mourouj 6, Tunis',
      verified: true,
      stats: {
        messages: 24,
        views: 112,
        notes: 7,
        calls: 35
      },
      phoneNumber: '+216 98 765 432',
      photos: [
        'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1575911283171-4a981415bc84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
      ],
      description: {
        line1: 'Dépannage, entretien, installation',
        line2: 'Plomberie, chauffage central, climatisation',
        line3: 'Service rapide et motorisé',
        line4: '7j/7j 24h/24h'
      },
      services: [
        { name: 'Plomberie', icon: 'bi bi-tools' },
        { name: 'Bricolage et montage', icon: 'bi bi-screwdriver' },
        { name: 'Climatisation', icon: 'bi bi-snow' },
        { name: 'Machine à laver', icon: 'bi bi-washing-machine' },
        { name: 'Chauffage & chauffe-eau', icon: 'bi bi-fire' }
      ],
      qualification: {
        experience: '+10 Ans',
        certification: 'Technicien Professionnel'
      },
      rating: {
        average: 4.8,
        politesse: 5.0,
        qualite: 5.0,
        cout: 4.7,
        ponctualite: 5.0
      }
    };

    // Mock reviews
    this.reviews = [
      {
        id: '1',
        userName: 'Ahmed Mohamed',
        userImage: 'https://randomuser.me/api/portraits/men/42.jpg',
        rating: 5,
        verified: true,
        comment: 'Excellent travail, rapide et professionnel. Je recommande vivement!',
        date: '12 Oct 2023'
      },
      {
        id: '2',
        userName: 'Fatma Ben Ali',
        userImage: 'https://randomuser.me/api/portraits/women/65.jpg',
        rating: 4.5,
        verified: true,
        comment: 'Très satisfaite du service. Travail propre et prix raisonnable.',
        date: '5 Oct 2023'
      },
      {
        id: '3',
        userName: 'Karim Salah',
        userImage: 'https://randomuser.me/api/portraits/men/22.jpg',
        rating: 5,
        verified: false,
        comment: 'A réparé ma fuite d\'eau en moins d\'une heure. Très compétent!',
        date: '28 Sept 2023'
      }
    ];

    // Mock related professionals
    this.relatedPros = [
      {
        id: '1',
        name: 'Hatem Gharbi',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        verified: true,
        distance: 2.5,
        rating: 4.9,
        quote: 'Je résous tous les problèmes de plomberie rapidement et efficacement.',
        quoteAuthor: 'Hatem'
      },
      {
        id: '2',
        name: 'Sami Trabelsi',
        image: 'https://randomuser.me/api/portraits/men/67.jpg',
        verified: true,
        distance: 3.2,
        rating: 4.7
      },
      {
        id: '3',
        name: 'Mohamed Ayari',
        image: 'https://randomuser.me/api/portraits/men/33.jpg',
        verified: false,
        distance: 4.1,
        rating: 4.5,
        quote: 'Plus de 15 ans d\'expérience en plomberie et chauffage.',
        quoteAuthor: 'Mohamed'
      }
    ];

    // Set the first photo as selected by default
    if (this.profileData.photos && this.profileData.photos.length > 0) {
      this.selectedPhoto = this.profileData.photos[0];
    }
  }

  selectPhoto(photoUrl: string): void {
    this.selectedPhoto = photoUrl;
  }

  showPhoneNumber(): void {
    this.showPhone = !this.showPhone;
  }

  getRatingPercentage(rating: number): string {
    return (rating * 20) + '%';  // Convert rating out of 5 to percentage
  }
}