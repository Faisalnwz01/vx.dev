import { Button } from '@/components/ui/button';
import React from 'react';

export default function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-darkBlue text-white p-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">TRAIN<span className="text-accent">ON</span></h1>
        <p className="text-lg md:text-xl mb-8">LAUNCHING Q1, 2024</p>
        <Button variant="solid" className="bg-accent hover:bg-accentHover text-white font-medium py-2 px-4 rounded">
          Get In Touch
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-no-repeat bg-contain bg-bottom" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'><path fill=\'%23000055\' fill-opacity=\'1\' d=\'M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,170.7C672,160,768,128,864,122.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'></path></svg>")' }}>
      </div>
    </div>
  );
}