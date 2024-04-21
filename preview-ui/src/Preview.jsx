import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import React from 'react';

const NewsReadingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Cryptonews</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-gray-200">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <Input placeholder="Article name, tag, category..." className="p-2 rounded-full border border-gray-300" />
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <section aria-labelledby="best-of-the-week">
          <h2 id="best-of-the-week" className="text-lg font-semibold mb-4">Best of the Week</h2>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Top Analyst Unveils Ethereum Catalyst That Could Trigger Nearly 50% Surge for ETH – Here’s His Outlook</CardTitle>
              <CardDescription className="text-sm text-gray-500">Blockchain News • 4 hours ago</CardDescription>
            </CardHeader>
            <CardContent>
              <p>#Ethereum #Analytics</p>
            </CardContent>
          </Card>
        </section>
        <section aria-labelledby="recommended">
          <h2 id="recommended" className="text-lg font-semibold mb-4">Recommended</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="bg-white rounded-lg shadow">
                <CardHeader>
                  <CardTitle className="text-sm">US-Approved Spot Bitcoin ETFs Could Surpass Entire $50 Billion Crypto ETP Market: BitMEX</CardTitle>
                  <CardDescription className="text-xs text-gray-500">Blockchain News • 4 hours ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={`https://images.unsplash.com/photo-${index + 1}`}
                    alt="Article thumbnail"
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm text-gray-600">© 2024 Cryptonews. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NewsReadingPage;