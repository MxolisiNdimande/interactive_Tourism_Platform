import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { toast } from 'sonner';

export function KrugerStaffPortal() {
  const [sightings, setSightings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSightings();
  }, []);

  const fetchSightings = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Session expired. Please login again.");
        return;
      }

      const res = await fetch("http://localhost:5000/api/sightings", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 401) {
        toast.error("Unauthorized. Please login again.");
        localStorage.clear();
        window.location.reload();
        return;
      }

      const data = await res.json();

      setSightings(Array.isArray(data) ? data : []);

    } catch (err) {
      console.error(err);
      toast.error("Failed to load sightings");
      setSightings([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading sightings...</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">

      <Card>
        <CardHeader>
          <CardTitle>My Sightings</CardTitle>
        </CardHeader>
        <CardContent>
          {sightings.length === 0 ? (
            <p className="text-muted-foreground">
              No sightings found.
            </p>
          ) : (
            sightings.map((sighting) => (
              <div
                key={sighting.id}
                className="border rounded-lg p-4 mb-4"
              >
                <h3 className="font-semibold">{sighting.species}</h3>
                <p>Location: {sighting.location}</p>
                <p>Gate: {sighting.gate}</p>
                <p>Count: {sighting.count}</p>
                <p>Confidence: {sighting.confidence}%</p>
                <p>Status: {sighting.status}</p>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <Button onClick={fetchSightings}>
        Refresh
      </Button>

    </div>
  );
}
