import { Button } from '@/components/ui/button';
import React from 'react';

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0D1B2A] text-white p-4 overflow-hidden">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter">TRAIN<span className="text-[#4DABF7]">ON</span></h1>
        <p className="text-base md:text-lg lg:text-xl mb-8">LAUNCHING Q1, 2024</p>
        <Button variant="outline" className="border border-[#4DABF7] text-[#4DABF7] hover:bg-[#4DABF7] hover:text-white font-medium py-2 px-6 rounded">
          Get In Touch
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-no-repeat bg-contain bg-bottom" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'><path fill=\'%23ffffff\' fill-opacity=\'0.2\' d=\'M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,181.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'></path></svg>")' }}>
      </div>
    </div>
  );
}