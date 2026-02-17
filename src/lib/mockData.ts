// Mock data for Gateway Discoveries platform

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  category: string;
  coordinates: { lat: number; lng: number };
  activities: string[];
  bestTime: string;
  avgCost: string;
  rating: number;
  views: number;
  scans: number;
  emailsSent: number;
  hasAnimalTracking?: boolean;
}

export interface AnimalSighting {
  id: string;
  species: string;
  location: string;
  gate: string;
  time: string;
  image: string;
  status: 'recent' | 'active' | 'historical';
  coordinates: { lat: number; lng: number };
  count: number;
  confidence: number;
}

export interface Campaign {
  id: string;
  name: string;
  advertiser: string;
  destinations: string[];
  startDate: string;
  endDate: string;
  status: 'active' | 'scheduled' | 'paused' | 'completed';
  impressions: number;
  clicks: number;
  budget: number;
}

export interface Device {
  id: string;
  name: string;
  type: 'kiosk' | 'signage';
  location: string;
  terminal: string;
  status: 'online' | 'offline' | 'maintenance';
  lastActive: string;
  interactions: number;
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  gate: string;
  status: string;
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Kruger National Park',
    country: 'South Africa - Mpumalanga',
    description: 'Africa\'s premier safari destination. Home to the Big Five and countless other species in one of the largest game reserves in Africa. Real-time animal tracking available.',
    imageUrl: 'https://images.unsplash.com/photo-1727880602536-e53eea480239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcnVnZXIlMjBuYXRpb25hbCUyMHBhcmslMjBzYWZhcml8ZW58MXx8fHwxNzYwNDQzNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wildlife & Safari',
    coordinates: { lat: -23.9884, lng: 31.5547 },
    activities: ['Game Drives', 'Bush Walks', 'Bird Watching', 'Photography', 'Luxury Lodges'],
    bestTime: 'May - September',
    avgCost: 'R3,600-7,200/day',
    rating: 4.9,
    views: 12456,
    scans: 734,
    emailsSent: 412,
    hasAnimalTracking: true
  },
  {
    id: '2',
    name: 'Blyde River Canyon',
    country: 'South Africa - Mpumalanga',
    description: 'One of the largest green canyons in the world, featuring the iconic Three Rondavels rock formation. Part of the spectacular Panorama Route with breathtaking views and hiking trails.',
    imageUrl: 'https://images.unsplash.com/photo-1563810242717-f594259f3cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtcHVtYWxhbmdhJTIwYmx5ZGUlMjBjYW55b258ZW58MXx8fHwxNzYwNDQ0MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Scenic & Nature',
    coordinates: { lat: -24.5617, lng: 30.8006 },
    activities: ['Three Rondavels Viewpoint', 'Hiking Trails', 'Boat Cruises', 'Photography', 'Scenic Drives'],
    bestTime: 'April - September',
    avgCost: 'R1,200-2,400/day',
    rating: 4.9,
    views: 10823,
    scans: 678,
    emailsSent: 412
  },
  {
    id: '3',
    name: 'God\'s Window',
    country: 'South Africa - Mpumalanga',
    description: 'A spectacular viewpoint offering panoramic vistas of the Lowveld, stretching into Mozambique. On clear days, you can see for over 100km across indigenous forests and valleys.',
    imageUrl: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2RzJTIwd2luZG93JTIwbXB1bWFsYW5nYXxlbnwxfHx8fDE3NjA0NDQ2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Scenic & Nature',
    coordinates: { lat: -24.8839, lng: 30.8458 },
    activities: ['Viewpoint Visit', 'Rainforest Walk', 'Photography', 'Craft Shopping', 'Birdwatching'],
    bestTime: 'Year-round',
    avgCost: 'R800-1,500/day',
    rating: 4.8,
    views: 9234,
    scans: 567,
    emailsSent: 334
  },
  {
    id: '4',
    name: 'Pilgrim\'s Rest',
    country: 'South Africa - Mpumalanga',
    description: 'A living museum and historic gold mining town frozen in time. Walk through 1880s streets, visit mining museums, and experience the gold rush era in this charming village.',
    imageUrl: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxncmltcyUyMHJlc3QlMjBnb2xkJTIwdG93bnxlbnwxfHx8fDE3NjA0NDQ2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'History & Culture',
    coordinates: { lat: -24.9025, lng: 30.7517 },
    activities: ['Gold Panning', 'Museum Tours', 'Historic Buildings', 'Craft Markets', 'Victorian Pub Experience'],
    bestTime: 'Year-round',
    avgCost: 'R1,000-1,800/day',
    rating: 4.6,
    views: 7892,
    scans: 445,
    emailsSent: 267
  },
  {
    id: '5',
    name: 'Bourke\'s Luck Potholes',
    country: 'South Africa - Mpumalanga',
    description: 'Spectacular geological formations carved by swirling water and stones over millions of years. Named after gold prospector Tom Bourke, these cylindrical rock sculptures are a natural wonder.',
    imageUrl: 'https://images.unsplash.com/photo-1613326388434-cf78d3cbb762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3Vya2UlMjBsdWNrJTIwcG90aG9sZXN8ZW58MXx8fHwxNzYwNDQ0NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Geological Wonder',
    coordinates: { lat: -24.6531, lng: 30.8119 },
    activities: ['Walkways & Bridges', 'Photography', 'Geology Tour', 'Visitor Centre', 'River Views'],
    bestTime: 'Year-round',
    avgCost: 'R600-1,200/day',
    rating: 4.7,
    views: 8456,
    scans: 523,
    emailsSent: 298
  },
  {
    id: '6',
    name: 'Sabie Waterfalls',
    country: 'South Africa - Mpumalanga',
    description: 'Discover a collection of magnificent waterfalls including Lone Creek, Bridal Veil, Horseshoe, and Mac Mac Falls. Surrounded by indigenous forests and mountain scenery.',
    imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWJpZSUyMHdhdGVyZmFsbCUyMGZvcmVzdHxlbnwxfHx8fDE3NjA0NDQ2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Waterfalls & Nature',
    coordinates: { lat: -25.1167, lng: 30.7667 },
    activities: ['Waterfall Tours', 'Hiking', 'Photography', 'Picnicking', 'Forest Walks'],
    bestTime: 'October - March',
    avgCost: 'R900-1,600/day',
    rating: 4.7,
    views: 7634,
    scans: 434,
    emailsSent: 256
  },
  {
    id: '7',
    name: 'Graskop Gorge Lift',
    country: 'South Africa - Mpumalanga',
    description: 'Descend 51 meters into the indigenous forest below via a glass-fronted lift. Explore the ancient forest floor, suspension bridges, and boardwalks in this unique eco-adventure.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFza29wJTIwZ29yZ2UlMjBsaWZ0fGVufDF8fHx8MTc2MDQ0NDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Adventure & Nature',
    coordinates: { lat: -24.9331, lng: 30.8500 },
    activities: ['Glass Lift Ride', 'Forest Boardwalks', 'Suspension Bridge', 'Zip Line', 'Craft Beer Garden'],
    bestTime: 'Year-round',
    avgCost: 'R800-1,400/day',
    rating: 4.8,
    views: 6987,
    scans: 398,
    emailsSent: 223
  },
  {
    id: '8',
    name: 'Sudwala Caves',
    country: 'South Africa - Mpumalanga',
    description: 'One of the world\'s oldest cave systems, dating back 240 million years. Explore massive chambers with stunning rock formations, stalactites, and stalagmites on guided tours.',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWR3YWxhJTIwY2F2ZXMlMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3NjA0NDQ2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Caves & Geology',
    coordinates: { lat: -25.4250, lng: 30.7200 },
    activities: ['Cave Tours', 'Dinosaur Park', 'Geology Experience', 'Photography', 'Nature Walks'],
    bestTime: 'Year-round',
    avgCost: 'R700-1,300/day',
    rating: 4.5,
    views: 5876,
    scans: 345,
    emailsSent: 187
  }
];

export const campaigns: Campaign[] = [
  {
    id: 'c1',
    name: 'Kruger Safari Adventure',
    advertiser: 'Mpumalanga Tourism Authority',
    destinations: ['1'],
    startDate: '2025-10-01',
    endDate: '2026-03-31',
    status: 'active',
    impressions: 45678,
    clicks: 2341,
    budget: 25000
  },
  {
    id: 'c2',
    name: 'Panorama Route Discovery',
    advertiser: 'Mpumalanga Tourism Authority',
    destinations: ['2', '3', '5'],
    startDate: '2025-09-15',
    endDate: '2026-09-30',
    status: 'active',
    impressions: 38902,
    clicks: 1987,
    budget: 18000
  },
  {
    id: 'c3',
    name: 'Waterfall Wonders Package',
    advertiser: 'Sabie Tourism',
    destinations: ['6'],
    startDate: '2025-11-01',
    endDate: '2026-05-31',
    status: 'active',
    impressions: 32456,
    clicks: 1654,
    budget: 15000
  },
  {
    id: 'c4',
    name: 'Gold Rush Heritage Tour',
    advertiser: 'Pilgrim\'s Rest Heritage',
    destinations: ['4'],
    startDate: '2025-12-01',
    endDate: '2026-02-28',
    status: 'scheduled',
    impressions: 0,
    clicks: 0,
    budget: 12000
  },
  {
    id: 'c5',
    name: 'Adventure Mpumalanga',
    advertiser: 'Mpumalanga Adventure Co.',
    destinations: ['7', '8'],
    startDate: '2025-08-01',
    endDate: '2025-10-13',
    status: 'completed',
    impressions: 28934,
    clicks: 1432,
    budget: 14000
  }
];

export const devices: Device[] = [
  {
    id: 'k1',
    name: 'Kiosk - Terminal 1A',
    type: 'kiosk',
    location: 'Arrivals Hall',
    terminal: 'Terminal 1',
    status: 'online',
    lastActive: '2025-10-14T10:45:00',
    interactions: 234
  },
  {
    id: 'k2',
    name: 'Kiosk - Terminal 1B',
    type: 'kiosk',
    location: 'Departures Hall',
    terminal: 'Terminal 1',
    status: 'online',
    lastActive: '2025-10-14T10:44:00',
    interactions: 189
  },
  {
    id: 'k3',
    name: 'Kiosk - Terminal 2A',
    type: 'kiosk',
    location: 'Arrivals Hall',
    terminal: 'Terminal 2',
    status: 'online',
    lastActive: '2025-10-14T10:43:00',
    interactions: 156
  },
  {
    id: 'k4',
    name: 'Kiosk - Terminal 2B',
    type: 'kiosk',
    location: 'Gate Lounge',
    terminal: 'Terminal 2',
    status: 'maintenance',
    lastActive: '2025-10-14T08:20:00',
    interactions: 0
  },
  {
    id: 's1',
    name: 'Signage - Terminal 1 Main',
    type: 'signage',
    location: 'Main Concourse',
    terminal: 'Terminal 1',
    status: 'online',
    lastActive: '2025-10-14T10:45:00',
    interactions: 0
  },
  {
    id: 's2',
    name: 'Signage - Terminal 2 Gates',
    type: 'signage',
    location: 'Gate Area',
    terminal: 'Terminal 2',
    status: 'online',
    lastActive: '2025-10-14T10:45:00',
    interactions: 0
  },
  {
    id: 's3',
    name: 'Signage - Baggage Claim',
    type: 'signage',
    location: 'Baggage Claim',
    terminal: 'Terminal 1',
    status: 'offline',
    lastActive: '2025-10-14T06:15:00',
    interactions: 0
  },
  {
    id: 's4',
    name: 'Signage - Food Court',
    type: 'signage',
    location: 'Food Court',
    terminal: 'Terminal 2',
    status: 'online',
    lastActive: '2025-10-14T10:44:00',
    interactions: 0
  }
];

export const flights: Flight[] = [
  {
    id: 'f1',
    airline: 'South African Airways',
    flightNumber: 'SA342',
    origin: 'Johannesburg (JNB)',
    destination: 'Cape Town (CPT)',
    departureTime: '11:30',
    gate: 'B12',
    status: 'Boarding'
  },
  {
    id: 'f2',
    airline: 'British Airways',
    flightNumber: 'BA456',
    origin: 'Johannesburg (JNB)',
    destination: 'London (LHR)',
    departureTime: '12:45',
    gate: 'A3',
    status: 'On Time'
  },
  {
    id: 'f3',
    airline: 'Emirates',
    flightNumber: 'EK761',
    origin: 'Johannesburg (JNB)',
    destination: 'Dubai (DXB)',
    departureTime: '13:20',
    gate: 'C8',
    status: 'On Time'
  },
  {
    id: 'f4',
    airline: 'Mango',
    flightNumber: 'JE234',
    origin: 'Johannesburg (JNB)',
    destination: 'Durban (DUR)',
    departureTime: '14:00',
    gate: 'B5',
    status: 'On Time'
  }
];

export const analyticsData = {
  totalInteractions: 15234,
  totalScans: 3737,
  totalEmails: 2056,
  avgEngagementTime: '3m 42s',
  dailyInteractions: [
    { date: 'Oct 7', value: 1890 },
    { date: 'Oct 8', value: 2134 },
    { date: 'Oct 9', value: 1967 },
    { date: 'Oct 10', value: 2345 },
    { date: 'Oct 11', value: 2201 },
    { date: 'Oct 12', value: 2467 },
    { date: 'Oct 13', value: 2230 }
  ],
  deviceStatus: {
    online: 6,
    offline: 1,
    maintenance: 1
  },
  topDestinations: [
    { name: 'Kruger National Park', percentage: 28 },
    { name: 'Blyde River Canyon', percentage: 24 },
    { name: 'God\'s Window', percentage: 18 },
    { name: 'Bourke\'s Luck Potholes', percentage: 16 },
    { name: 'Sabie Waterfalls', percentage: 14 }
  ]
};

export const users = [
  {
    id: '1',
    name: 'John Admin',
    email: 'admin@gatewaydiscoveries.com',
    role: 'Administrator',
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Manager',
    email: 'sarah@gatewaydiscoveries.com',
    role: 'Administrator',
    status: 'active'
  },
  {
    id: '3',
    name: 'Mpumalanga Tourism Authority',
    email: 'marketing@mpumalangatourism.com',
    role: 'Advertiser',
    status: 'active'
  },
  {
    id: '4',
    name: 'Sabie Tourism',
    email: 'info@sabietourism.co.za',
    role: 'Advertiser',
    status: 'active'
  },
  {
    id: '5',
    name: 'Mpumalanga Adventure Co.',
    email: 'contact@mpumalangaadventures.com',
    role: 'Advertiser',
    status: 'active'
  },
  {
    id: '6',
    name: 'Pilgrim\'s Rest Heritage',
    email: 'info@pilgrimsrest.co.za',
    role: 'Advertiser',
    status: 'active'
  }
];

// Animal tracking data for Kruger National Park
export const animalSightings: AnimalSighting[] = [
  {
    id: 'a1',
    species: 'African Lion',
    location: 'Skukuza Rest Camp Area',
    gate: 'Paul Kruger Gate',
    time: '23 minutes ago',
    image: 'https://images.unsplash.com/photo-1548417154-5818b3d63a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTIwc2FmYXJpJTIwYWZyaWNhfGVufDF8fHx8MTc2MDQ0NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'recent',
    coordinates: { lat: -24.9947, lng: 31.5972 },
    count: 3,
    confidence: 95
  },
  {
    id: 'a2',
    species: 'African Elephant',
    location: 'Lower Sabie River',
    gate: 'Crocodile Bridge Gate',
    time: '1 hour ago',
    image: 'https://images.unsplash.com/photo-1670259182436-049da7055bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMHdpbGRsaWZlJTIwYWZyaWNhfGVufDF8fHx8MTc2MDQ0NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'recent',
    coordinates: { lat: -25.1197, lng: 31.9147 },
    count: 12,
    confidence: 98
  },
  {
    id: 'a3',
    species: 'Leopard',
    location: 'Timbavati Area',
    gate: 'Orpen Gate',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1734860402876-14610c0daa90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW9wYXJkJTIwd2lsZGxpZmUlMjBhZnJpY2F8ZW58MXx8fHwxNzYwNDQ0MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'active',
    coordinates: { lat: -24.4553, lng: 31.3092 },
    count: 1,
    confidence: 87
  },
  {
    id: 'a4',
    species: 'Cape Buffalo',
    location: 'Satara Camp Vicinity',
    gate: 'Phalaborwa Gate',
    time: '3 hours ago',
    image: 'https://images.unsplash.com/photo-1727880602536-e53eea480239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcnVnZXIlMjBuYXRpb25hbCUyMHBhcmslMjBzYWZhcml8ZW58MXx8fHwxNzYwNDQzNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'active',
    coordinates: { lat: -24.5228, lng: 31.7742 },
    count: 45,
    confidence: 92
  },
  {
    id: 'a5',
    species: 'White Rhinoceros',
    location: 'Pretoriuskop Waterhole',
    gate: 'Numbi Gate',
    time: '4 hours ago',
    image: 'https://images.unsplash.com/photo-1548417154-5818b3d63a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTIwc2FmYXJpJTIwYWZyaWNhfGVufDF8fHx8MTc2MDQ0NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'active',
    coordinates: { lat: -25.1704, lng: 31.2711 },
    count: 2,
    confidence: 89
  },
  {
    id: 'a6',
    species: 'Cheetah',
    location: 'Open Plains near Orpen',
    gate: 'Orpen Gate',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1734860402876-14610c0daa90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW9wYXJkJTIwd2lsZGxpZmUlMjBhZnJpY2F8ZW58MXx8fHwxNzYwNDQ0MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'active',
    coordinates: { lat: -24.4719, lng: 31.3672 },
    count: 2,
    confidence: 85
  },
  {
    id: 'a7',
    species: 'Giraffe',
    location: 'Throughout Park',
    gate: 'Malelane Gate',
    time: '1 hour ago',
    image: 'https://images.unsplash.com/photo-1670259182436-049da7055bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMHdpbGRsaWZlJTIwYWZyaWNhfGVufDF8fHx8MTc2MDQ0NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'recent',
    coordinates: { lat: -24.8321, lng: 31.5547 },
    count: 8,
    confidence: 94
  },
  {
    id: 'a8',
    species: 'Wild Dogs',
    location: 'Northern Kruger',
    gate: 'Punda Maria Gate',
    time: '6 hours ago',
    image: 'https://images.unsplash.com/photo-1548417154-5818b3d63a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTIwc2FmYXJpJTIwYWZyaWNhfGVufDF8fHx8MTc2MDQ0NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'historical',
    coordinates: { lat: -23.5892, lng: 31.2453 },
    count: 6,
    confidence: 78
  }
];

// Kruger National Park Gates
export const krugerGates = [
  'Paul Kruger Gate',
  'Phabeni Gate',
  'Numbi Gate',
  'Malelane Gate',
  'Crocodile Bridge Gate',
  'Orpen Gate',
  'Phalaborwa Gate',
  'Punda Maria Gate',
  'Pafuri Gate'
];
