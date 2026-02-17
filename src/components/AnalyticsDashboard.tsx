import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { devices, destinations } from '../lib/mockData';
import {
  Activity,
  Users,
  TrendingUp,
  Monitor,
  AlertCircle,
  CheckCircle,
  Trophy
} from 'lucide-react';

export function AnalyticsDashboard() {
  const [rangerData, setRangerData] = useState<any[]>([]);
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const statusColors = {
    online: '#22c55e',
    offline: '#ef4444',
    maintenance: '#f59e0b'
  };

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = localStorage.getItem("token");

        const rangerRes = await fetch("http://localhost:5000/api/analytics/rangers", {
          headers: { Authorization: `Bearer ${token}` }
        });

        const dailyRes = await fetch("http://localhost:5000/api/analytics/daily", {
          headers: { Authorization: `Bearer ${token}` }
        });

        const rangerJson = await rangerRes.json();
        const dailyJson = await dailyRes.json();

        setRangerData(rangerJson);
        setDailyData(dailyJson);

      } catch (err) {
        console.error("Analytics fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  const engagementByDestination = destinations.map((dest) => ({
    name: dest.name,
    interactions: dest.views,
    scans: dest.scans,
    emails: dest.emailsSent
  }));

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Wildlife Operations Intelligence System
          </p>
        </div>

        {/* Ranger Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>🏆 Ranger Leaderboard</CardTitle>
            <CardDescription>Performance ranked by total sightings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rangerData.length === 0 ? (
              <p className="text-muted-foreground">No ranger activity yet.</p>
            ) : (
              rangerData.map((ranger, index) => (
                <div
                  key={ranger.id}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <p className="font-medium">
                        {index + 1}. {ranger.name}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Avg Confidence: {ranger.avg_confidence}% |
                      Last Report: {new Date(ranger.last_reported).toLocaleString()}
                    </p>
                  </div>
                  <Badge className="text-lg px-4 py-2">
                    {ranger.total_sightings}
                  </Badge>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Daily Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle>📈 7-Day Activity Trend</CardTitle>
            <CardDescription>Sightings reported per day</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total_reports"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Engagement Chart (existing) */}
        <Card>
          <CardHeader>
            <CardTitle>Engagement by Destination</CardTitle>
            <CardDescription>Tourism engagement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={engagementByDestination}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="interactions" fill="#3b82f6" />
                <Bar dataKey="scans" fill="#8b5cf6" />
                <Bar dataKey="emails" fill="#ec4899" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Device Monitoring */}
        <Card>
          <CardHeader>
            <CardTitle>Device Monitoring</CardTitle>
            <CardDescription>Real-time system status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => (
                  <TableRow key={device.id}>
                    <TableCell>{device.name}</TableCell>
                    <TableCell>
                      <Badge
                        style={{
                          backgroundColor:
                            statusColors[
                              device.status as keyof typeof statusColors
                            ]
                        }}
                      >
                        {device.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
