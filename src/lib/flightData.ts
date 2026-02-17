// Flight data for South African routes

export interface FlightRoute {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: string;
  aircraft: string;
  status: 'On Time' | 'Delayed' | 'Boarding' | 'Departed' | 'Cancelled';
  gate?: string;
  terminal?: string;
  frequency: string;
}

export const southAfricanAirports = [
  { code: 'JNB', name: 'OR Tambo International', city: 'Johannesburg' },
  { code: 'CPT', name: 'Cape Town International', city: 'Cape Town' },
  { code: 'DUR', name: 'King Shaka International', city: 'Durban' },
  { code: 'MQP', name: 'Kruger Mpumalanga International', city: 'Nelspruit' },
  { code: 'PLZ', name: 'Port Elizabeth International', city: 'Gqeberha' },
  { code: 'BFN', name: 'Bram Fischer International', city: 'Bloemfontein' },
  { code: 'GRJ', name: 'George Airport', city: 'George' },
  { code: 'ELS', name: 'East London Airport', city: 'East London' },
  { code: 'HDS', name: 'Hoedspruit Airport', city: 'Hoedspruit' },
  { code: 'UTN', name: 'Pilanesberg Airport', city: 'Sun City' }
];

export const airlines = [
  'South African Airways',
  'FlySafair',
  'Airlink',
  'CemAir',
  'British Airways (Comair)',
  'Lift Airline'
];

export const flights: FlightRoute[] = [
  // Johannesburg to Mpumalanga/Kruger
  {
    id: 'f1',
    airline: 'Airlink',
    flightNumber: 'SA8151',
    origin: 'Johannesburg',
    originCode: 'JNB',
    destination: 'Nelspruit (Kruger)',
    destinationCode: 'MQP',
    departureTime: '06:00',
    arrivalTime: '07:15',
    duration: '1h 15m',
    price: 'R1,850',
    aircraft: 'Embraer E190',
    status: 'On Time',
    gate: 'B12',
    terminal: 'Terminal B',
    frequency: 'Daily'
  },
  {
    id: 'f2',
    airline: 'Airlink',
    flightNumber: 'SA8153',
    origin: 'Johannesburg',
    originCode: 'JNB',
    destination: 'Nelspruit (Kruger)',
    destinationCode: 'MQP',
    departureTime: '11:30',
    arrivalTime: '12:45',
    duration: '1h 15m',
    price: 'R1,950',
    aircraft: 'Embraer E190',
    status: 'Boarding',
    gate: 'B14',
    terminal: 'Terminal B',
    frequency: 'Daily'
  },
  {
    id: 'f3',
    airline: 'Airlink',
    flightNumber: 'SA8155',
    origin: 'Johannesburg',
    originCode: 'JNB',
    destination: 'Hoedspruit (Kruger)',
    destinationCode: 'HDS',
    departureTime: '09:15',
    arrivalTime: '10:25',
    duration: '1h 10m',
    price: 'R2,100',
    aircraft: 'Embraer E170',
    status: 'On Time',
    gate: 'B16',
    terminal: 'Terminal B',
    frequency: 'Daily'
  },
  {
    id: 'f4',
    airline: 'Airlink',
    flightNumber: 'SA8157',
    origin: 'Johannesburg',
    originCode: 'JNB',
    destination: 'Hoedspruit (Kruger)',
    destinationCode: 'HDS',
    departureTime: '15:45',
    arrivalTime: '16:55',
    duration: '1h 10m',
    price: 'R2,250',
    aircraft: 'Embraer E170',
    status: 'On Time',
    gate: 'B18',
    terminal: 'Terminal B',
    frequency: 'Daily'
  },
  // Cape Town routes
  {
    id: 'f5',
    airline: 'FlySafair',
    flightNumber: 'FA201',
    origin: 'Cape Town',
    originCode: 'CPT',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '06:30',
    arrivalTime: '08:45',
    duration: '2h 15m',
    price: 'R1,499',
    aircraft: 'Boeing 737-800',
    status: 'On Time',
    gate: 'A3',
    terminal: 'Terminal 1',
    frequency: 'Daily (Multiple)'
  },
  {
    id: 'f6',
    airline: 'South African Airways',
    flightNumber: 'SA301',
    origin: 'Cape Town',
    originCode: 'CPT',
    destination: 'Durban',
    destinationCode: 'DUR',
    departureTime: '07:00',
    arrivalTime: '09:20',
    duration: '2h 20m',
    price: 'R2,100',
    aircraft: 'Airbus A320',
    status: 'On Time',
    gate: 'A5',
    terminal: 'Terminal 1',
    frequency: 'Daily'
  },
  {
    id: 'f7',
    airline: 'FlySafair',
    flightNumber: 'FA311',
    origin: 'Cape Town',
    originCode: 'CPT',
    destination: 'George',
    destinationCode: 'GRJ',
    departureTime: '10:15',
    arrivalTime: '11:15',
    duration: '1h',
    price: 'R899',
    aircraft: 'Boeing 737-400',
    status: 'On Time',
    frequency: 'Daily'
  },
  // Durban routes
  {
    id: 'f8',
    airline: 'Lift Airline',
    flightNumber: 'GE401',
    origin: 'Durban',
    originCode: 'DUR',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '08:00',
    arrivalTime: '09:15',
    duration: '1h 15m',
    price: 'R1,299',
    aircraft: 'Airbus A320',
    status: 'On Time',
    gate: 'C8',
    frequency: 'Daily (Multiple)'
  },
  {
    id: 'f9',
    airline: 'Airlink',
    flightNumber: 'SA421',
    origin: 'Durban',
    originCode: 'DUR',
    destination: 'Nelspruit (Kruger)',
    destinationCode: 'MQP',
    departureTime: '12:30',
    arrivalTime: '13:45',
    duration: '1h 15m',
    price: 'R2,450',
    aircraft: 'Embraer E190',
    status: 'On Time',
    frequency: 'Mon, Wed, Fri'
  },
  // Port Elizabeth routes
  {
    id: 'f10',
    airline: 'FlySafair',
    flightNumber: 'FA501',
    origin: 'Gqeberha (PE)',
    originCode: 'PLZ',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '06:45',
    arrivalTime: '08:30',
    duration: '1h 45m',
    price: 'R1,199',
    aircraft: 'Boeing 737-800',
    status: 'On Time',
    frequency: 'Daily'
  },
  {
    id: 'f11',
    airline: 'Airlink',
    flightNumber: 'SA511',
    origin: 'Gqeberha (PE)',
    originCode: 'PLZ',
    destination: 'Cape Town',
    destinationCode: 'CPT',
    departureTime: '11:00',
    arrivalTime: '12:30',
    duration: '1h 30m',
    price: 'R1,650',
    aircraft: 'Embraer E190',
    status: 'On Time',
    frequency: 'Daily'
  },
  // Return flights from Mpumalanga
  {
    id: 'f12',
    airline: 'Airlink',
    flightNumber: 'SA8152',
    origin: 'Nelspruit (Kruger)',
    originCode: 'MQP',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '08:00',
    arrivalTime: '09:15',
    duration: '1h 15m',
    price: 'R1,850',
    aircraft: 'Embraer E190',
    status: 'On Time',
    frequency: 'Daily'
  },
  {
    id: 'f13',
    airline: 'Airlink',
    flightNumber: 'SA8154',
    origin: 'Nelspruit (Kruger)',
    originCode: 'MQP',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '14:00',
    arrivalTime: '15:15',
    duration: '1h 15m',
    price: 'R1,950',
    aircraft: 'Embraer E190',
    status: 'On Time',
    frequency: 'Daily'
  },
  {
    id: 'f14',
    airline: 'Airlink',
    flightNumber: 'SA8156',
    origin: 'Hoedspruit (Kruger)',
    originCode: 'HDS',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '11:15',
    arrivalTime: '12:25',
    duration: '1h 10m',
    price: 'R2,100',
    aircraft: 'Embraer E170',
    status: 'On Time',
    frequency: 'Daily'
  },
  {
    id: 'f15',
    airline: 'Airlink',
    flightNumber: 'SA8158',
    origin: 'Hoedspruit (Kruger)',
    originCode: 'HDS',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '17:45',
    arrivalTime: '18:55',
    duration: '1h 10m',
    price: 'R2,250',
    aircraft: 'Embraer E170',
    status: 'On Time',
    frequency: 'Daily'
  },
  // Additional major routes
  {
    id: 'f16',
    airline: 'CemAir',
    flightNumber: 'CE601',
    origin: 'Bloemfontein',
    originCode: 'BFN',
    destination: 'Cape Town',
    destinationCode: 'CPT',
    departureTime: '09:30',
    arrivalTime: '11:45',
    duration: '2h 15m',
    price: 'R1,799',
    aircraft: 'Bombardier Dash 8',
    status: 'On Time',
    frequency: 'Daily'
  },
  {
    id: 'f17',
    airline: 'FlySafair',
    flightNumber: 'FA701',
    origin: 'East London',
    originCode: 'ELS',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '06:00',
    arrivalTime: '07:45',
    duration: '1h 45m',
    price: 'R1,099',
    aircraft: 'Boeing 737-800',
    status: 'On Time',
    frequency: 'Daily'
  },
  {
    id: 'f18',
    airline: 'Airlink',
    flightNumber: 'SA801',
    origin: 'George',
    originCode: 'GRJ',
    destination: 'Johannesburg',
    destinationCode: 'JNB',
    departureTime: '07:30',
    arrivalTime: '09:30',
    duration: '2h',
    price: 'R1,550',
    aircraft: 'Embraer E190',
    status: 'On Time',
    frequency: 'Daily (Multiple)'
  }
];
