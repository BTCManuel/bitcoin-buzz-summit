
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, Users, Globe, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Bitcoin className="h-8 w-8 text-bitcoin mb-4" />,
      title: "Bitcoin Ecosystem",
      description: "Deep dive into the latest developments in Bitcoin technology, regulation, and adoption."
    },
    {
      icon: <Users className="h-8 w-8 text-bitcoin mb-4" />,
      title: "Networking",
      description: "Connect with industry leaders, investors, and fellow Bitcoin enthusiasts."
    },
    {
      icon: <Globe className="h-8 w-8 text-bitcoin mb-4" />,
      title: "Global Perspective",
      description: "Gain insights from international speakers on Bitcoin's global impact."
    },
    {
      icon: <Target className="h-8 w-8 text-bitcoin mb-4" />,
      title: "Focused Content",
      description: "Curated presentations and workshops on Bitcoin-specific topics."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Conference</h2>
          <p className="text-lg text-gray-600">
            Bitcoin Buzz Summit brings together the brightest minds in the Bitcoin ecosystem for three days of 
            learning, networking, and collaboration. Join us to explore the future of Bitcoin and its impact on finance, technology, and society.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
