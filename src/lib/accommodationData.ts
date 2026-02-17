// Accommodation data for Mpumalanga

export interface Accommodation {
  id: string;
  name: string;
  type: 'hotel' | 'lodge' | 'guesthouse' | 'bnb' | 'camping' | 'resort';
  location: string;
  nearDestination: string[];
  imageUrl: string;
  rating: number;
  pricePerNight: string;
  amenities: string[];
  description: string;
  coordinates: { lat: number; lng: number };
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
}

export const accommodations: Accommodation[] = [
  {
    id: 'acc1',
    name: 'Kruger Shalati Train on the Bridge',
    type: 'lodge',
    location: 'Kruger National Park',
    nearDestination: ['1'],
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsb2RnZSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    pricePerNight: 'R12,000-18,000',
    amenities: ['Pool', 'Restaurant', 'Bar', 'Game Drives', 'Luxury Suites', 'River Views'],
    description: 'Unique luxury train hotel suspended over the Sabie River in Kruger National Park. Experience wildlife from your private suite.',
    coordinates: { lat: -24.9947, lng: 31.5972 },
    contact: {
      phone: '+27 13 735 5000',
      email: 'reservations@shalati.com',
      website: 'www.shalati.com'
    }
  },
  {
    id: 'acc2',
    name: 'Lion Sands River Lodge',
    type: 'lodge',
    location: 'Sabi Sand, near Kruger',
    nearDestination: ['1'],
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsb2RnZSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    pricePerNight: 'R15,000-25,000',
    amenities: ['All-Inclusive', 'Game Drives', 'Spa', 'Pool', 'Fine Dining', 'Private Decks'],
    description: 'Award-winning luxury safari lodge on the banks of the Sabie River with exceptional wildlife viewing.',
    coordinates: { lat: -24.8321, lng: 31.4547 },
    contact: {
      phone: '+27 11 484 9911',
      email: 'res@lionsands.com',
      website: 'www.lionsands.com'
    }
  },
  {
    id: 'acc3',
    name: 'Blyde Canyon Forever Resort',
    type: 'resort',
    location: 'Blyde River Canyon',
    nearDestination: ['2'],
    imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHJvb218ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.3,
    pricePerNight: 'R1,800-3,500',
    amenities: ['Swimming Pool', 'Restaurant', 'Hiking Trails', 'Family Friendly', 'Self-Catering Units'],
    description: 'Family-friendly resort nestled in the Blyde River Canyon with stunning views and outdoor activities.',
    coordinates: { lat: -24.5617, lng: 30.8006 },
    contact: {
      phone: '+27 13 769 8005',
      email: 'blydecanyon@foreverresorts.co.za',
      website: 'www.foreverresorts.co.za'
    }
  },
  {
    id: 'acc4',
    name: 'Graskop Hotel',
    type: 'hotel',
    location: 'Graskop',
    nearDestination: ['3', '7'],
    imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHJvb218ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    pricePerNight: 'R1,200-2,000',
    amenities: ['Restaurant', 'Bar', 'Free WiFi', 'Parking', 'Breakfast Included'],
    description: 'Comfortable hotel in the heart of Graskop, perfect base for exploring the Panorama Route.',
    coordinates: { lat: -24.9331, lng: 30.8500 },
    contact: {
      phone: '+27 13 767 1244',
      email: 'info@graskophotel.co.za',
      website: 'www.graskophotel.co.za'
    }
  },
  {
    id: 'acc5',
    name: 'Royal Hotel Pilgrim\'s Rest',
    type: 'hotel',
    location: 'Pilgrim\'s Rest',
    nearDestination: ['4'],
    imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHJvb218ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    pricePerNight: 'R1,500-2,500',
    amenities: ['Historic Building', 'Restaurant', 'Bar', 'Victorian Decor', 'Garden'],
    description: 'Historic Victorian hotel in the gold rush town of Pilgrim\'s Rest, offering authentic period charm.',
    coordinates: { lat: -24.9025, lng: 30.7517 },
    contact: {
      phone: '+27 13 768 1100',
      email: 'reservations@royalhotel.co.za',
      website: 'www.royalhotel.co.za'
    }
  },
  {
    id: 'acc6',
    name: 'Sabie River Bush Lodge',
    type: 'lodge',
    location: 'Sabie',
    nearDestination: ['6'],
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsb2RnZSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    pricePerNight: 'R2,500-4,000',
    amenities: ['River Views', 'Outdoor Activities', 'Restaurant', 'Pool', 'Nature Walks'],
    description: 'Peaceful lodge on the banks of the Sabie River, surrounded by indigenous forest and waterfalls.',
    coordinates: { lat: -25.1167, lng: 30.7667 },
    contact: {
      phone: '+27 13 737 7700',
      email: 'info@sabieriver.co.za',
      website: 'www.sabieriver.co.za'
    }
  },
  {
    id: 'acc7',
    name: 'Panorama Rest Camp',
    type: 'camping',
    location: 'Panorama Route',
    nearDestination: ['2', '3', '5'],
    imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwc2l0ZSUyMG91dGRvb3JzfGVufDF8fHx8MTc2MDUxMjYyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.2,
    pricePerNight: 'R400-800',
    amenities: ['Camping Sites', 'Ablution Facilities', 'Braai Areas', 'Hiking', 'Scenic Views'],
    description: 'Budget-friendly camping with spectacular panoramic views of the Lowveld and mountains.',
    coordinates: { lat: -24.7761, lng: 30.8314 },
    contact: {
      phone: '+27 13 764 1058',
      email: 'info@panoramacamp.co.za'
    }
  },
  {
    id: 'acc8',
    name: 'The Casterbridge Hollow Boutique Hotel',
    type: 'hotel',
    location: 'White River',
    nearDestination: ['1', '2'],
    imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHJvb218ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    pricePerNight: 'R2,200-3,800',
    amenities: ['Boutique Rooms', 'Restaurant', 'Spa', 'Pool', 'Shopping Centre Access'],
    description: 'Elegant boutique hotel in White River, gateway to Kruger and the Panorama Route.',
    coordinates: { lat: -25.3319, lng: 31.0211 },
    contact: {
      phone: '+27 13 750 0581',
      email: 'info@casterbridge.co.za',
      website: 'www.casterbridge.co.za'
    }
  },
  {
    id: 'acc9',
    name: 'Greenfire Lodge Hazyview',
    type: 'lodge',
    location: 'Hazyview',
    nearDestination: ['1'],
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsb2RnZSUyMGFjY29tbW9kYXRpb258ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    pricePerNight: 'R1,800-3,200',
    amenities: ['Eco-Friendly', 'Pool', 'Restaurant', 'Game Drives Available', 'Mountain Views'],
    description: 'Eco-luxury lodge near Kruger offering comfort and sustainability in a pristine setting.',
    coordinates: { lat: -25.0452, lng: 31.1483 },
    contact: {
      phone: '+27 13 737 8100',
      email: 'reservations@greenfirelodge.com',
      website: 'www.greenfirelodge.com'
    }
  },
  {
    id: 'acc10',
    name: 'Hippo Hollow Country Estate',
    type: 'resort',
    location: 'Hazyview',
    nearDestination: ['1'],
    imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHJvb218ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    pricePerNight: 'R2,000-3,500',
    amenities: ['River Views', 'Golf Course', 'Spa', 'Multiple Restaurants', 'Family Suites'],
    description: 'Upscale country estate on the Sabie River with championship golf and luxury amenities.',
    coordinates: { lat: -25.0389, lng: 31.1364 },
    contact: {
      phone: '+27 13 737 7752',
      email: 'reservations@hippohollow.co.za',
      website: 'www.hippohollow.co.za'
    }
  },
  {
    id: 'acc11',
    name: 'Casa do Sol Hotel',
    type: 'hotel',
    location: 'Hazyview',
    nearDestination: ['1'],
    imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHJvb218ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.3,
    pricePerNight: 'R1,500-2,800',
    amenities: ['Pool', 'Restaurant', 'Bar', 'Conference Facilities', 'Tropical Gardens'],
    description: 'Portuguese-style hotel with lush tropical gardens, ideal for Kruger safari base.',
    coordinates: { lat: -25.0417, lng: 31.1372 },
    contact: {
      phone: '+27 13 737 8111',
      email: 'info@casadosol.co.za',
      website: 'www.casadosol.co.za'
    }
  },
  {
    id: 'acc12',
    name: 'Kruger Park Lodge',
    type: 'resort',
    location: 'Hazyview',
    nearDestination: ['1'],
    imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc29ydCUyMHJvb218ZW58MXx8fHwxNzYwNTEyNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.2,
    pricePerNight: 'R1,200-2,400',
    amenities: ['Self-Catering', 'Golf Course', 'Pool', 'Wildlife', 'Family Friendly'],
    description: 'Self-catering resort with golf course and wildlife, perfect for families and groups.',
    coordinates: { lat: -25.0333, lng: 31.1500 },
    contact: {
      phone: '+27 13 737 6500',
      email: 'reservations@krugerparklodge.co.za',
      website: 'www.krugerparklodge.co.za'
    }
  }
];
