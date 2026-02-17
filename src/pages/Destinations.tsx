import { useEffect, useState } from 'react';
import { Destination } from '../types/destination';

export default function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/destinations'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setDestinations(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <h2>Loading destinations...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mpumalanga Gateway Destinations</h1>

      {destinations.map((destination) => (
        <div
          key={destination.id}
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            marginBottom: '15px',
            borderRadius: '8px'
          }}
        >
          <img
            src={destination.imageUrl}
            alt={destination.name}
            style={{ width: '100%', maxWidth: '400px' }}
          />

          <h2>{destination.name}</h2>
          <p>{destination.description}</p>

          <p>
            <strong>Best Time:</strong> {destination.bestTime}
          </p>

          <p>
            <strong>Average Cost:</strong> {destination.avgCost}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {destination.rating}
          </p>

          <p>
            <strong>Activities:</strong>{' '}
            {destination.activities?.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
}
