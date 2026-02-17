import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { CMSPortal } from './components/CMSPortal';
import { InteractiveKiosk } from './components/InteractiveKiosk';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { DigitalSignage } from './components/DigitalSignage';
import { StaffLogin } from './components/StaffLogin';
import { PublicLanding } from './components/PublicLanding';
import { FlightPortal } from './components/FlightPortal';
import { KrugerStaffPortal } from './components/KrugerStaffPortal';
import { Toaster } from './components/ui/sonner';
import {
  LayoutDashboard,
  MonitorPlay,
  BarChart3,
  Tv,
  LogOut,
  Plane,
  Binoculars
} from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const [isStaffMode, setIsStaffMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [staffRole, setStaffRole] = useState<'admin' | 'kruger-staff' | null>(null);
  const [activeView, setActiveView] = useState('kiosk');

  /* ===============================
     AUTO LOGIN ON PAGE REFRESH
  =============================== */
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role') as 'admin' | 'kruger-staff' | null;

    if (token && role) {
      setIsStaffMode(true);
      setIsLoggedIn(true);
      setStaffRole(role);
      setActiveView(role === 'admin' ? 'cms' : 'tracking');
    }
  }, []);

  /* ===============================
     LOGOUT FUNCTION
  =============================== */
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');

    setIsLoggedIn(false);
    setIsStaffMode(false);
    setStaffRole(null);
    setActiveView('kiosk');
  };

  /* ===============================
     PUBLIC MODE
  =============================== */
  if (!isStaffMode) {
    return (
      <>
        <PublicLanding onStaffLogin={() => setIsStaffMode(true)} />
        <Toaster />
      </>
    );
  }

  /* ===============================
     LOGIN SCREEN
  =============================== */
  if (isStaffMode && !isLoggedIn) {
    return (
      <>
        <StaffLogin
          onLogin={(role) => {
            setStaffRole(role);
            setIsLoggedIn(true);
            setActiveView(role === 'admin' ? 'cms' : 'tracking');
          }}
          onCancel={() => setIsStaffMode(false)}
        />
        <Toaster />
      </>
    );
  }

  /* ===============================
     STAFF DASHBOARD
  =============================== */
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* TOP NAV */}
      <div className="border-b bg-card px-6 py-3 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">
            Mpumalanga Gateway
          </h2>
          <p className="text-xs text-muted-foreground">
            {staffRole === 'admin'
              ? 'System Administration'
              : 'Kruger Staff Portal'}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {localStorage.getItem('name')}
          </span>

          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* NAV TABS */}
      <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none px-4">

          {staffRole === 'admin' && (
            <TabsTrigger value="cms">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              CMS
            </TabsTrigger>
          )}

          {staffRole === 'kruger-staff' && (
            <TabsTrigger value="tracking">
              <Binoculars className="h-4 w-4 mr-2" />
              Animal Tracking
            </TabsTrigger>
          )}

          <TabsTrigger value="kiosk">
            <MonitorPlay className="h-4 w-4 mr-2" />
            Kiosk
          </TabsTrigger>

          {staffRole === 'admin' && (
            <TabsTrigger value="analytics">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          )}

          <TabsTrigger value="signage">
            <Tv className="h-4 w-4 mr-2" />
            Signage
          </TabsTrigger>

          <TabsTrigger value="flights">
            <Plane className="h-4 w-4 mr-2" />
            Flights
          </TabsTrigger>
        </TabsList>

        {/* TAB CONTENT */}
        <div className="flex-1 overflow-hidden">
          {staffRole === 'admin' && (
            <TabsContent value="cms" className="h-full m-0">
              <CMSPortal />
            </TabsContent>
          )}

          {staffRole === 'kruger-staff' && (
            <TabsContent value="tracking" className="h-full m-0">
              <KrugerStaffPortal />
            </TabsContent>
          )}

          <TabsContent value="kiosk" className="h-full m-0">
            <InteractiveKiosk />
          </TabsContent>

          {staffRole === 'admin' && (
            <TabsContent value="analytics" className="h-full m-0">
              <AnalyticsDashboard />
            </TabsContent>
          )}

          <TabsContent value="signage" className="h-full m-0">
            <DigitalSignage />
          </TabsContent>

          <TabsContent value="flights" className="h-full m-0">
            <FlightPortal />
          </TabsContent>
        </div>
      </Tabs>

      <Toaster />
    </div>
  );
}
