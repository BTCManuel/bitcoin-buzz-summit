
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, Users, Globe, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Bitcoin className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Bitcoin Ecosystem",
      description: "Deep dive into the latest developments in Bitcoin technology, regulation, and adoption."
    },
    {
      icon: <Users className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Networking",
      description: "Connect with industry leaders, investors, and fellow Bitcoin enthusiasts."
    },
    {
      icon: <Globe className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Global Perspective",
      description: "Gain insights from international speakers on Bitcoin's global impact."
    },
    {
      icon: <Target className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Focused Content",
      description: "Curated presentations and workshops on Bitcoin-specific topics."
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">About</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">About the Conference</h2>
          <p className="text-xl text-gray-600">
            Bitcoin Buzz Summit brings together the brightest minds in the Bitcoin ecosystem for three days of 
            learning, networking, and collaboration. Join us to explore the future of Bitcoin and its impact on finance, technology, and society.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] bg-white text-gray-800 rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="mx-auto flex justify-center bg-bitcoin/10 w-20 h-20 rounded-full items-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
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
