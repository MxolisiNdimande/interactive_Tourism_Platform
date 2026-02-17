import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Binoculars, Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface AnimalSighting {
  id: string;
  species: string;
  location: string;
  gate: string;
  image_url: string;
  latitude: number;
  longitude: number;
  status: 'recent' | 'active' | 'historical';
  count: number;
  confidence: number;
  reported_at: string;
}

export function KrugerStaffPortal() {
  const [sightings, setSightings] = useState<AnimalSighting[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [species, setSpecies] = useState('');
  const [location, setLocation] = useState('');
  const [gate, setGate] = useState('');
  const [count, setCount] = useState('1');
  const [confidence, setConfidence] = useState('90');
  const [status, setStatus] = useState<'recent' | 'active' | 'historical'>('recent');

  useEffect(() => {
    fetchSightings();
  }, []);

  const fetchSightings = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/sightings');
      const data = await res.json();
      setSightings(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSpecies('');
    setLocation('');
    setGate('');
    setCount('1');
    setConfidence('90');
    setStatus('recent');
    setEditingId(null);
  };

  const handleSave = async () => {
    if (!species || !location || !gate) {
      toast.error('Please fill all required fields');
      return;
    }

    const payload = {
      species,
      location,
      gate,
      image_url: '',
      latitude: -24.9947,
      longitude: 31.5972,
      status,
      count: parseInt(count),
      confidence: parseInt(confidence)
    };

    try {
      if (editingId) {
        await fetch(`http://localhost:5000/api/sightings/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        toast.success('Sighting updated');
      } else {
        await fetch('http://localhost:5000/api/sightings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        toast.success('Sighting added');
      }

      fetchSightings();
      setShowDialog(false);
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/api/sightings/${id}`, {
        method: 'DELETE'
      });
      setSightings(sightings.filter(s => s.id !== id));
      toast.success('Deleted successfully');
    } catch (err) {
      console.error(err);
      toast.error('Delete failed');
    }
  };

  const handleEdit = (s: AnimalSighting) => {
    setEditingId(s.id);
    setSpecies(s.species);
    setLocation(s.location);
    setGate(s.gate);
    setCount(s.count.toString());
    setConfidence(s.confidence.toString());
    setStatus(s.status);
    setShowDialog(true);
  };

  if (loading) {
    return <div className="p-6">Loading sightings...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Binoculars /> Kruger Staff Portal
        </h1>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Report Sighting
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? 'Edit Sighting' : 'New Sighting'}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label>Species</Label>
                <Input value={species} onChange={e => setSpecies(e.target.value)} />
              </div>

              <div>
                <Label>Location</Label>
                <Input value={location} onChange={e => setLocation(e.target.value)} />
              </div>

              <div>
                <Label>Gate</Label>
                <Input value={gate} onChange={e => setGate(e.target.value)} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Count</Label>
                  <Input type="number" value={count} onChange={e => setCount(e.target.value)} />
                </div>

                <div>
                  <Label>Confidence %</Label>
                  <Input type="number" value={confidence} onChange={e => setConfidence(e.target.value)} />
                </div>
              </div>

              <div>
                <Label>Status</Label>
                <Select value={status} onValueChange={(val) => setStatus(val as any)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recent</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="historical">Historical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleSave} className="w-full">
                {editingId ? 'Update Sighting' : 'Add Sighting'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Sightings ({sightings.length})</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Species</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Gate</TableHead>
                <TableHead>Count</TableHead>
                <TableHead>Confidence</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {sightings.map(s => (
                <TableRow key={s.id}>
                  <TableCell>{s.species}</TableCell>
                  <TableCell>{s.location}</TableCell>
                  <TableCell>{s.gate}</TableCell>
                  <TableCell>{s.count}</TableCell>
                  <TableCell>{s.confidence}%</TableCell>
                  <TableCell>
                    <Badge>{s.status}</Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button size="sm" variant="ghost" onClick={() => handleEdit(s)}>
                      <Edit size={16} />
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => handleDelete(s.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
