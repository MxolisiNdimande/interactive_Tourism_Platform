import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast.success('Welcome to Gateway Discoveries CMS');
      onLogin();
    } else {
      toast.error('Please enter your credentials');
    }
  };

  const handleDemoLogin = () => {
    setEmail('admin@gatewaydiscoveries.com');
    setPassword('demo123');
    setTimeout(() => {
      toast.success('Welcome to Gateway Discoveries CMS');
      onLogin();
    }, 300);
  };

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md mx-auto p-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 mb-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2">Gateway Discoveries</h1>
          <p className="text-muted-foreground">Mpumalanga Tourism CMS</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access the CMS</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@gatewaydiscoveries.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" onClick={handleDemoLogin}>
              Use Demo Account
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              Demo credentials: admin@gatewaydiscoveries.com / demo123
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
