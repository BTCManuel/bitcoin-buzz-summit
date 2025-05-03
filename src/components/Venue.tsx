
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Hotel, Clock, Info } from 'lucide-react';

const Venue = () => {
  return (
    <section id="venue" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Venue Information</h2>
          <p className="text-lg text-gray-600">
            Join us at the prestigious Metro Conference Center in the heart of New York City
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="p-0 h-full">
                <div className="aspect-video w-full bg-gray-200 relative overflow-hidden">
                  {/* This would typically be an actual map or venue image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                    <MapPin className="h-12 w-12 text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="flex items-center text-xl font-bold mb-3">
                <MapPin className="h-5 w-5 mr-2 text-bitcoin" />
                Location
              </h3>
              <p className="text-gray-600">
                Metro Conference Center<br />
                123 Broadway<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
            
            <div>
              <h3 className="flex items-center text-xl font-bold mb-3">
                <Hotel className="h-5 w-5 mr-2 text-bitcoin" />
                Accommodations
              </h3>
              <p className="text-gray-600 mb-2">
                We've partnered with nearby hotels to offer special rates for conference attendees:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-2">
                <li>Grand Hotel NYC (5 min walk) - 15% discount</li>
                <li>Plaza Business Hotel (8 min walk) - 10% discount</li>
                <li>Midtown Suites (10 min walk) - 20% discount</li>
              </ul>
            </div>
            
            <div>
              <h3 className="flex items-center text-xl font-bold mb-3">
                <Info className="h-5 w-5 mr-2 text-bitcoin" />
                Additional Information
              </h3>
              <p className="text-gray-600">
                The venue is easily accessible by public transportation and is surrounded by restaurants, 
                cafes, and attractions. Parking is available on-site for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
