export interface Professionals {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    phoneNummber?: string; // Kept typo as requested
    photo?: string;
    role?: Role; // Role type defined below
    localisation?: Localisation; // Define this interface separately
    dateCreation: Date;
    experience?: string;
    prixService?: number;
    diplomes: string[];
    moyenneAvis: number;
      nombreEvaluations: number;
      highestRat: number;
  }
  
  export enum Role {
      CLIENT = 'client',
      ADMIN = 'admin',
      PROFESSIONNEL = 'professionnel'
  }

  export interface Localisation {
    id?: number;
    latitude: number;
    longitude: number;
    adresse: string;
  }
  
  