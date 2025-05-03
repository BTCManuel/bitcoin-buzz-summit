
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';

interface Session {
  time: string;
  title: string;
  speaker: string;
  location: string;
  type: 'keynote' | 'panel' | 'workshop' | 'networking';
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  
  const schedules: Record<string, Session[]> = {
    day1: [
      {
        time: "09:00 - 10:00",
        title: "Registration & Welcome Coffee",
        speaker: "",
        location: "Main Lobby",
        type: "networking"
      },
      {
        time: "10:00 - 11:00",
        title: "Opening Keynote: The State of Bitcoin in 2025",
        speaker: "Sarah Johnson",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "11:15 - 12:15",
        title: "Panel: Institutional Adoption of Bitcoin",
        speaker: "David Kim, Aisha Patel & Guests",
        location: "Main Hall",
        type: "panel"
      },
      {
        time: "12:15 - 13:30",
        title: "Lunch Break & Networking",
        speaker: "",
        location: "Dining Area",
        type: "networking"
      },
      {
        time: "13:30 - 14:30",
        title: "Technical Workshop: Lightning Network Implementation",
        speaker: "Michael Chen",
        location: "Workshop Room A",
        type: "workshop"
      },
      {
        time: "14:45 - 15:45",
        title: "Bitcoin Macro Economics & Future Outlook",
        speaker: "Elena Rodriguez",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "16:00 - 17:30",
        title: "Networking Reception",
        speaker: "",
        location: "Terrace Lounge",
        type: "networking"
      }
    ],
    day2: [
      {
        time: "09:00 - 10:00",
        title: "Morning Coffee & Networking",
        speaker: "",
        location: "Main Lobby",
        type: "networking"
      },
      {
        time: "10:00 - 11:00",
        title: "Keynote: Bitcoin Security Landscape",
        speaker: "Thomas Wright",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "11:15 - 12:15",
        title: "Workshop: Self-Custody Best Practices",
        speaker: "Thomas Wright",
        location: "Workshop Room B",
        type: "workshop"
      },
      {
        time: "12:15 - 13:30",
        title: "Lunch Break & Networking",
        speaker: "",
        location: "Dining Area",
        type: "networking"
      },
      {
        time: "13:30 - 14:30",
        title: "Panel: Bitcoin Mining & Energy Innovation",
        speaker: "Industry Experts",
        location: "Main Hall",
        type: "panel"
      },
      {
        time: "14:45 - 15:45",
        title: "Bitcoin Development Roadmap",
        speaker: "Michael Chen",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "16:00 - 17:30",
        title: "Startup Showcase & Networking",
        speaker: "",
        location: "Exhibition Hall",
        type: "networking"
      }
    ],
    day3: [
      {
        time: "09:00 - 10:00",
        title: "Morning Coffee & Networking",
        speaker: "",
        location: "Main Lobby",
        type: "networking"
      },
      {
        time: "10:00 - 11:00",
        title: "Keynote: Bitcoin's Global Impact",
        speaker: "Elena Rodriguez",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "11:15 - 12:15",
        title: "Panel: Regulatory Landscape for Bitcoin",
        speaker: "Legal & Policy Experts",
        location: "Main Hall",
        type: "panel"
      },
      {
        time: "12:15 - 13:30",
        title: "Lunch Break & Networking",
        speaker: "",
        location: "Dining Area",
        type: "networking"
      },
      {
        time: "13:30 - 14:30",
        title: "Workshop: Building on Bitcoin",
        speaker: "Developer Team",
        location: "Workshop Room A",
        type: "workshop"
      },
      {
        time: "14:45 - 15:45",
        title: "Closing Keynote: The Road Ahead",
        speaker: "Sarah Johnson",
        location: "Main Hall",
        type: "keynote"
      },
      {
        time: "16:00 - 18:00",
        title: "Closing Reception",
        speaker: "",
        location: "Terrace Lounge",
        type: "networking"
      }
    ]
  };

  const getSessionClassName = (type: string) => {
    switch(type) {
      case 'keynote':
        return 'border-l-4 border-bitcoin';
      case 'panel':
        return 'border-l-4 border-blue-500';
      case 'workshop':
        return 'border-l-4 border-green-500';
      case 'networking':
        return 'border-l-4 border-gray-400';
      default:
        return '';
    }
  };

  return (
    <section id="schedule" className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Schedule</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Event Schedule</h2>
          <p className="text-xl text-gray-600">
            Three days of inspiring talks, workshops, and networking opportunities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger value="day1" className="data-[state=active]:bg-white data-[state=active]:text-gray-800 data-[state=active]:shadow-md rounded-md">
                Day 1 - May 15
              </TabsTrigger>
              <TabsTrigger value="day2" className="data-[state=active]:bg-white data-[state=active]:text-gray-800 data-[state=active]:shadow-md rounded-md">
                Day 2 - May 16
              </TabsTrigger>
              <TabsTrigger value="day3" className="data-[state=active]:bg-white data-[state=active]:text-gray-800 data-[state=active]:shadow-md rounded-md">
                Day 3 - May 17
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(schedules).map((day) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {schedules[day].map((session, index) => (
                  <div 
                    key={index} 
                    className={`p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${getSessionClassName(session.type)}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-2 md:mb-0">
                        <div className="flex items-center gap-2 text-gray-500 mb-1">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800">{session.title}</h3>
                        {session.speaker && (
                          <p className="text-bitcoin">{session.speaker}</p>
                        )}
                      </div>
                      <div className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
                        {session.location}
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
