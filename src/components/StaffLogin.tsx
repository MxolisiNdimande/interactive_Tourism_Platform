import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Shield, Users, Binoculars } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface StaffLoginProps {
  onLogin: (role: 'admin' | 'kruger-staff') => void;
  onCancel: () => void;
}

export function StaffLogin({ onLogin, onCancel }: StaffLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'admin' | 'kruger'>('admin');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please enter your credentials');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // ✅ Store JWT + user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('name', data.name);

      toast.success(`Welcome ${data.name}`);

      onLogin(data.role);

    } catch (err: any) {
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (role: 'admin' | 'kruger-staff') => {
    const demoEmail =
      role === 'admin'
        ? 'admin@test.com'
        : 'ranger@kruger.co.za';

    const demoPassword =
      role === 'admin'
        ? '123456'
        : 'kruger123';

    setEmail(demoEmail);
    setPassword(demoPassword);

    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: demoEmail,
          password: demoPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Demo login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('name', data.name);

      toast.success(`Welcome ${data.name}`);

      onLogin(data.role);

    } catch (err: any) {
      toast.error(err.message || 'Demo login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2">Staff Access Portal</h1>
          <p className="text-muted-foreground">
            Mpumalanga Gateway - Secure Access
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Select Access Level</CardTitle>
            <CardDescription>
              Choose your role and sign in
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="admin">
                  <Users className="h-4 w-4 mr-2" />
                  Admin
                </TabsTrigger>
                <TabsTrigger value="kruger">
                  <Binoculars className="h-4 w-4 mr-2" />
                  Kruger Staff
                </TabsTrigger>
              </TabsList>

              <TabsContent value="admin">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In as Admin'}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleDemoLogin('admin')}
                    disabled={loading}
                  >
                    Use Demo Admin
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="kruger">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In as Kruger Staff'}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleDemoLogin('kruger-staff')}
                    disabled={loading}
                  >
                    Use Demo Kruger Staff
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <Button variant="ghost" className="w-full" onClick={onCancel}>
                Return to Public Portal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
