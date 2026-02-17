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
