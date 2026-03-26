import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image_url: string;
  category: string;
  latitude: number;
  longitude: number;
  activities: string[];
  best_time: string;
  avg_cost: string;
  rating: number;
}

export function CMSPortal() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState<any>({
    name: '',
    country: '',
    description: '',
    image_url: '',
    category: '',
    latitude: '',
    longitude: '',
    activities: '',
    best_time: '',
    avg_cost: '',
    rating: ''
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/destinations');
      const data = await res.json();
      setDestinations(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      name: '',
      country: '',
      description: '',
      image_url: '',
      category: '',
      latitude: '',
      longitude: '',
      activities: '',
      best_time: '',
      avg_cost: '',
      rating: ''
    });
    setEditingId(null);
  };

  const handleSave = async () => {
    const payload = {
      ...form,
      latitude: parseFloat(form.latitude),
      longitude: parseFloat(form.longitude),
      rating: parseFloat(form.rating),
      activities: form.activities.split(',').map((a: string) => a.trim())
    };

    try {
      if (editingId) {
        await fetch(`http://localhost:5000/api/destinations/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        toast.success('Destination updated');
      } else {
        await fetch('http://localhost:5000/api/destinations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        toast.success('Destination added');
      }

      fetchDestinations();
      setShowDialog(false);
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error('Operation failed');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/api/destinations/${id}`, {
        method: 'DELETE'
      });

      setDestinations(destinations.filter(d => d.id !== id));
      toast.success('Deleted successfully');
    } catch (err) {
      console.error(err);
      toast.error('Delete failed');
    }
  };

  const handleEdit = (d: Destination) => {
    setEditingId(d.id);
    setForm({
      ...d,
      activities: d.activities.join(', ')
    });
    setShowDialog(true);
  };

  if (loading) return <div className="p-6">Loading destinations...</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">CMS Portal</h1>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Destination
            </Button>
          </DialogTrigger>

          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingId ? 'Edit Destination' : 'New Destination'}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              {Object.keys(form).map((key) => (
                <div key={key}>
                  <Label>{key.replace('_', ' ')}</Label>
                  {key === 'description' ? (
                    <Textarea
                      value={form[key]}
                      onChange={(e) =>
                        setForm({ ...form, [key]: e.target.value })
                      }
                    />
                  ) : (
                    <Input
                      value={form[key]}
                      onChange={(e) =>
                        setForm({ ...form, [key]: e.target.value })
                      }
                    />
                  )}
                </div>
              ))}

              <Button onClick={handleSave} className="w-full">
                {editingId ? 'Update Destination' : 'Add Destination'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            All Destinations ({destinations.length})
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {destinations.map(d => (
                <TableRow key={d.id}>
                  <TableCell>{d.name}</TableCell>
                  <TableCell>
                    <Badge>{d.category}</Badge>
                  </TableCell>
                  <TableCell>{d.rating}</TableCell>
                  <TableCell>{d.avg_cost}</TableCell>
                  <TableCell className="space-x-2">
                    <Button size="sm" variant="ghost" onClick={() => handleEdit(d)}>
                      <Edit size={16} />
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => handleDelete(d.id)}>
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
