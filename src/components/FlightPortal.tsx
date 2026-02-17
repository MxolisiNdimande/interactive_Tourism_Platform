import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { flights, southAfricanAirports, airlines } from '../lib/flightData';
import { Plane, Search, Calendar, MapPin, Clock, CreditCard, Filter } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function FlightPortal() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('MQP'); // Default to Nelspruit (Kruger)
  const [date, setDate] = useState('');
  const [airline, setAirline] = useState('all');
  const [filteredFlights, setFilteredFlights] = useState(flights);

  const handleSearch = () => {
    let results = flights;

    if (origin) {
      results = results.filter(f => f.originCode === origin);
    }
    if (destination) {
      results = results.filter(f => f.destinationCode === destination);
    }
    if (airline !== 'all') {
      results = results.filter(f => f.airline === airline);
    }

    setFilteredFlights(results);
    toast.success(`Found ${results.length} flights`);
  };

  const handleBooking = (flightNumber: string) => {
    toast.success(`Booking request for flight ${flightNumber} initiated`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Time':
        return 'default';
      case 'Boarding':
        return 'default';
      case 'Delayed':
        return 'destructive';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="h-full overflow-auto bg-muted/30">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl">Flight Portal</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Search and book flights across South Africa
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Plane className="h-4 w-4" />
            <span className="hidden sm:inline">{flights.length} routes available</span>
            <span className="sm:hidden">{flights.length} routes</span>
          </div>
        </div>

        {/* Search Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Search className="h-5 w-5" />
              Search Flights
            </CardTitle>
            <CardDescription className="text-sm">
              Find the best flights to and from Mpumalanga
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label htmlFor="origin" className="text-sm">From</Label>
                <Select value={origin} onValueChange={setOrigin}>
                  <SelectTrigger id="origin" className="text-sm">
                    <SelectValue placeholder="Select origin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Airports</SelectItem>
                    {southAfricanAirports.map((airport) => (
                      <SelectItem key={airport.code} value={airport.code} className="text-sm">
                        {airport.code} - {airport.city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination" className="text-sm">To</Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger id="destination" className="text-sm">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Airports</SelectItem>
                    {southAfricanAirports.map((airport) => (
                      <SelectItem key={airport.code} value={airport.code} className="text-sm">
                        {airport.code} - {airport.city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="airline" className="text-sm">Airline</Label>
                <Select value={airline} onValueChange={setAirline}>
                  <SelectTrigger id="airline" className="text-sm">
                    <SelectValue placeholder="Select airline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Airlines</SelectItem>
                    {airlines.map((airlineName) => (
                      <SelectItem key={airlineName} value={airlineName} className="text-sm">
                        {airlineName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button onClick={handleSearch} className="w-full text-sm sm:text-base">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links to Mpumalanga */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base truncate">Flights to Nelspruit</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Gateway to Kruger Park
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Plane className="h-6 w-6 text-green-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base truncate">Flights to Hoedspruit</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Direct to Kruger safaris
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base truncate">Popular Routes</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    JNB • CPT • DUR
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="all" className="text-xs sm:text-sm py-2">
              All Flights ({filteredFlights.length})
            </TabsTrigger>
            <TabsTrigger value="toMpumalanga" className="text-xs sm:text-sm py-2">
              To Mpumalanga
            </TabsTrigger>
            <TabsTrigger value="fromMpumalanga" className="text-xs sm:text-sm py-2">
              From Mpumalanga
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Available Flights</CardTitle>
                <CardDescription className="text-sm">
                  Showing {filteredFlights.length} flights
                </CardDescription>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <div className="min-w-[800px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs sm:text-sm">Flight</TableHead>
                        <TableHead className="text-xs sm:text-sm">Route</TableHead>
                        <TableHead className="text-xs sm:text-sm">Time</TableHead>
                        <TableHead className="text-xs sm:text-sm">Duration</TableHead>
                        <TableHead className="text-xs sm:text-sm">Status</TableHead>
                        <TableHead className="text-xs sm:text-sm">Price</TableHead>
                        <TableHead className="text-xs sm:text-sm">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredFlights.map((flight) => (
                        <TableRow key={flight.id}>
                          <TableCell>
                            <div>
                              <div className="text-xs sm:text-sm">{flight.airline}</div>
                              <div className="text-xs text-muted-foreground">
                                {flight.flightNumber}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                              <span className="font-medium">{flight.originCode}</span>
                              <Plane className="h-3 w-3 text-muted-foreground" />
                              <span className="font-medium">{flight.destinationCode}</span>
                            </div>
                            <div className="text-xs text-muted-foreground hidden sm:block">
                              {flight.origin} → {flight.destination}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 text-xs sm:text-sm">
                              <Clock className="h-3 w-3" />
                              {flight.departureTime}
                            </div>
                          </TableCell>
                          <TableCell className="text-xs sm:text-sm">{flight.duration}</TableCell>
                          <TableCell>
                            <Badge variant={getStatusColor(flight.status)} className="text-xs">
                              {flight.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-xs sm:text-sm">{flight.price}</TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              onClick={() => handleBooking(flight.flightNumber)}
                              className="text-xs sm:text-sm whitespace-nowrap"
                            >
                              <CreditCard className="mr-1 h-3 w-3" />
                              Book
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="toMpumalanga" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Flights to Mpumalanga</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <div className="min-w-[800px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs sm:text-sm">Flight</TableHead>
                        <TableHead className="text-xs sm:text-sm">From</TableHead>
                        <TableHead className="text-xs sm:text-sm">To</TableHead>
                        <TableHead className="text-xs sm:text-sm">Departure</TableHead>
                        <TableHead className="text-xs sm:text-sm">Price</TableHead>
                        <TableHead className="text-xs sm:text-sm">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredFlights
                        .filter(f => f.destinationCode === 'MQP' || f.destinationCode === 'HDS')
                        .map((flight) => (
                          <TableRow key={flight.id}>
                            <TableCell className="text-xs sm:text-sm">
                              {flight.airline}<br />
                              <span className="text-muted-foreground">{flight.flightNumber}</span>
                            </TableCell>
                            <TableCell className="text-xs sm:text-sm">{flight.origin}</TableCell>
                            <TableCell className="text-xs sm:text-sm">{flight.destination}</TableCell>
                            <TableCell className="text-xs sm:text-sm">{flight.departureTime}</TableCell>
                            <TableCell className="text-xs sm:text-sm">{flight.price}</TableCell>
                            <TableCell>
                              <Button size="sm" onClick={() => handleBooking(flight.flightNumber)} className="text-xs sm:text-sm">
                                Book
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fromMpumalanga" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Flights from Mpumalanga</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <div className="min-w-[800px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-xs sm:text-sm">Flight</TableHead>
                        <TableHead className="text-xs sm:text-sm">From</TableHead>
                        <TableHead className="text-xs sm:text-sm">To</TableHead>
                        <TableHead className="text-xs sm:text-sm">Departure</TableHead>
                        <TableHead className="text-xs sm:text-sm">Price</TableHead>
                        <TableHead className="text-xs sm:text-sm">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredFlights
                        .filter(f => f.originCode === 'MQP' || f.originCode === 'HDS')
                        .map((flight) => (
                          <TableRow key={flight.id}>
                            <TableCell className="text-xs sm:text-sm">
                              {flight.airline}<br />
                              <span className="text-muted-foreground">{flight.flightNumber}</span>
                            </TableCell>
                            <TableCell className="text-xs sm:text-sm">{flight.origin}</TableCell>
                            <TableCell className="text-xs sm:text-sm">{flight.destination}</TableCell>
                            <TableCell className="text-xs sm:text-sm">{flight.departureTime}</TableCell>
                            <TableCell className="text-xs sm:text-sm">{flight.price}</TableCell>
                            <TableCell>
                              <Button size="sm" onClick={() => handleBooking(flight.flightNumber)} className="text-xs sm:text-sm">
                                Book
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
