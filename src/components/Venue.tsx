
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Hotel, Clock, Info } from 'lucide-react';

const Venue = () => {
  return (
    <section id="venue" className="py-32 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Venue Information</h2>
          <p className="text-xl text-gray-300">
            Join us at the prestigious Metro Conference Center in the heart of New York City
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Card className="h-full border-0 shadow-modern rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="p-0 h-full">
                <div className="aspect-video w-full bg-gray-800 relative overflow-hidden rounded-t-2xl">
                  {/* This would typically be an actual map or venue image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <MapPin className="h-16 w-16 text-bitcoin" />
                  </div>
                </div>
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Metro Conference Center</h3>
                  <p className="text-gray-300">
                    A state-of-the-art venue equipped with the latest technology and comfortable spaces for networking and learning.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8 text-white">
            <div>
              <h3 className="flex items-center text-2xl font-bold mb-4">
                <div className="mr-4 h-10 w-10 rounded-full bg-bitcoin/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-bitcoin" />
                </div>
                Location
              </h3>
              <p className="text-lg text-gray-300 ml-14">
                Metro Conference Center<br />
                123 Broadway<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
            
            <div>
              <h3 className="flex items-center text-2xl font-bold mb-4">
                <div className="mr-4 h-10 w-10 rounded-full bg-bitcoin/20 flex items-center justify-center">
                  <Hotel className="h-5 w-5 text-bitcoin" />
                </div>
                Accommodations
              </h3>
              <div className="ml-14">
                <p className="text-lg text-gray-300 mb-3">
                  We've partnered with nearby hotels to offer special rates for conference attendees:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                    Grand Hotel NYC (5 min walk) - 15% discount
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                    Plaza Business Hotel (8 min walk) - 10% discount
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                    Midtown Suites (10 min walk) - 20% discount
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="flex items-center text-2xl font-bold mb-4">
                <div className="mr-4 h-10 w-10 rounded-full bg-bitcoin/20 flex items-center justify-center">
                  <Info className="h-5 w-5 text-bitcoin" />
                </div>
                Additional Information
              </h3>
              <p className="text-lg text-gray-300 ml-14">
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
