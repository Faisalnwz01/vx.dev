import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Bell, Settings, ChevronRight } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-gray-100">
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <div className="flex items-center">
          <div className="mr-4">
            <img src="https://via.placeholder.com/50x50?text=FUEL" alt="FUEL Logo" />
          </div>
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </Avatar>
            <div className="ml-3">
              <div className="font-semibold">Jessica Anderson</div>
              <div className="text-sm text-gray-600">Check-in: 9:46 AM</div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <Bell className="w-5 h-5 text-blue-600" />
            <span className="ml-1 text-sm">1 new notification</span>
          </div>
          <Settings className="w-5 h-5 text-gray-600" />
        </div>
      </header>
      <main className="p-4">
        <Alert>
          <AlertTitle>Member note/alert</AlertTitle>
          <AlertDescription>Lorem ipsum dolor sit amet...</AlertDescription>
        </Alert>
        <div className="mt-4 grid grid-cols-8 gap-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-white p-4 rounded shadow flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
              <div className="text-sm">First Last...</div>
              <div className="text-xs text-gray-600">08:33 - 00:00</div>
            </div>
          ))}
          <div className="flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-between bg-white p-4 shadow-inner">
        <span>Monday, Dec 11 10:01 AM</span>
        <Button variant="outline">X</Button>
      </footer>
    </div>
  );
}