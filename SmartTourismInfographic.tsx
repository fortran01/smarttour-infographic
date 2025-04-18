import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import dynamic from 'next/dynamic';

// Import components with dynamic loading to avoid SSR issues with recharts
const LimitationsSection = dynamic(() => import('./components/LimitationsSection'), { ssr: false });
const ParetoAnalysisSection = dynamic(() => import('./components/ParetoAnalysisSection'), { ssr: false });
const ConclusionSection = dynamic(() => import('./components/ConclusionSection'), { ssr: false });
const VisualProblemStatement = dynamic(() => import('./components/VisualProblemStatement'), { ssr: false });

const SmartTourismInfographic = () => {
  // State to track which venue is being highlighted
  const [activeVenue, setActiveVenue] = useState<string | null>(null);
  
  // Tour schedule data
  const tourSchedule = [
    { 
      venue: "St. Lawrence Market", 
      startTime: "09:00", 
      endTime: "10:00", 
      duration: 1, 
      crowdLevel: 1.0,
      travelTime: 5,
      color: "#4a6741"
    },
    { 
      venue: "Hockey Hall of Fame", 
      startTime: "10:30", 
      endTime: "12:30", 
      duration: 2, 
      crowdLevel: 0.0,
      travelTime: 9,
      color: "#3a8fb7"
    },
    { 
      venue: "Distillery Historic District", 
      startTime: "13:00", 
      endTime: "16:00", 
      duration: 3, 
      crowdLevel: 1.7,
      travelTime: 17,
      color: "#b76d3a"
    },
    { 
      venue: "CN Tower", 
      startTime: "17:00", 
      endTime: "20:00", 
      duration: 3, 
      crowdLevel: 1.7,
      travelTime: 0,
      color: "#3a5db7"
    }
  ];
  
  // Crowd level comparison data
  const crowdLevelData = [
    { time: '09:00', 'Casa Loma': -0.3, 'Royal Ontario Museum': 0, 'CN Tower': 0.5 },
    { time: '10:00', 'Casa Loma': -0.2, 'Royal Ontario Museum': 0.2, 'CN Tower': 0.7 },
    { time: '11:00', 'Casa Loma': 0, 'Royal Ontario Museum': 0.5, 'CN Tower': 0.9 },
    { time: '12:00', 'Casa Loma': 0.3, 'Royal Ontario Museum': 0.7, 'CN Tower': 1.1 },
    { time: '13:00', 'Casa Loma': 0.5, 'Royal Ontario Museum': 1.0, 'CN Tower': 1.2 },
    { time: '14:00', 'Casa Loma': 0.7, 'Royal Ontario Museum': 1.2, 'CN Tower': 1.5 },
    { time: '15:00', 'Casa Loma': 0.8, 'Royal Ontario Museum': 1.1, 'CN Tower': 1.7 },
    { time: '16:00', 'Casa Loma': 0.5, 'Royal Ontario Museum': 0.8, 'CN Tower': 1.8 },
    { time: '17:00', 'Casa Loma': 0.2, 'Royal Ontario Museum': 0.4, 'CN Tower': 1.7 },
    { time: '18:00', 'Casa Loma': -0.1, 'Royal Ontario Museum': 0, 'CN Tower': 1.4 },
    { time: '19:00', 'Casa Loma': -0.3, 'Royal Ontario Museum': -0.2, 'CN Tower': 1.0 },
    { time: '20:00', 'Casa Loma': -0.5, 'Royal Ontario Museum': -0.5, 'CN Tower': 0.5 },
  ];
  
  // Business impact data
  const businessImpactData = [
    { name: 'Increased Revenue', traditional: 100, optimized: 127 },
    { name: 'Visitor Satisfaction', traditional: 65, optimized: 89 },
    { name: 'Venues Per Day', traditional: 2.5, optimized: 4 },
    { name: 'Time in Traffic', traditional: 72, optimized: 31 },
  ];

  // Function to render crowd level as a visual indicator
  const renderCrowdLevel = (level: number) => {
    // Map crowd level (-2 to +2) to a color
    const getColor = (level: number) => {
      if (level <= -1) return '#4caf50'; // Very low - green
      if (level < 0) return '#8bc34a'; // Low - light green
      if (level < 1) return '#ffc107'; // Average - yellow
      if (level < 1.5) return '#ff9800'; // High - orange
      return '#f44336'; // Very high - red
    };
    
    const color = getColor(level);
    const filledDots = Math.min(5, Math.round((level + 2) * 1.25));
    const emptyDots = 5 - filledDots;
    
    return (
      <div className="flex items-center">
        {[...Array(filledDots)].map((_, i) => (
          <div key={`filled-${i}`} className="w-2 h-2 mx-0.5 rounded-full" style={{ backgroundColor: color }}></div>
        ))}
        {[...Array(emptyDots)].map((_, i) => (
          <div key={`empty-${i}`} className="w-2 h-2 mx-0.5 rounded-full border border-gray-300"></div>
        ))}
        <span className="ml-2 text-xs">{level.toFixed(1)}</span>
      </div>
    );
  };

  // Function to render the schedule timeline
  const renderTimeline = () => {
    const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
    const hourWidth = 60; // width in pixels for each hour
    
    return (
      <div className="mt-2 relative overflow-x-auto pb-2">
        <div className="min-w-max" style={{ minWidth: '1020px' }}>
          {/* Time markers */}
          <div className="flex border-t border-gray-300">
            {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map((time) => (
              <div key={time} className="flex-none text-xs text-center" style={{ width: '60px', marginLeft: time === '09:00' ? '140px' : '0' }}>
                <div className="h-3 border-l border-gray-300"></div>
                <div>{time}</div>
              </div>
            ))}
          </div>
          
          {/* Venue blocks */}
          <div className="mt-4 space-y-4">
            {tourSchedule.map((venue, index) => {
              const startHour = parseInt(venue.startTime.split(':')[0]);
              const startMinute = parseInt(venue.startTime.split(':')[1]);
              const endHour = parseInt(venue.endTime.split(':')[0]);
              const endMinute = parseInt(venue.endTime.split(':')[1]);
              
              const startPosition = (startHour - 9) * 60 + (startMinute / 60) * 60;
              const duration = (endHour - startHour) * 60 + ((endMinute - startMinute) / 60) * 60;
              
              const isActive = activeVenue === venue.venue;
              
              return (
                <div key={venue.venue} className="relative h-10" 
                  onMouseEnter={() => setActiveVenue(venue.venue)}
                  onMouseLeave={() => setActiveVenue(null)}
                >
                  {/* Venue name with left margin to prevent overlap */}
                  <div className="absolute left-0 top-0 h-6 flex items-center" style={{ width: '140px', zIndex: 10 }}>
                    <div className="w-4 h-4 mr-1 rounded-full" style={{ backgroundColor: venue.color }}></div>
                    <span className="text-xs font-medium truncate">{venue.venue}</span>
                  </div>
                  
                  {/* Timeline block positioned with left margin to avoid overlapping venue name */}
                  <div 
                    className={`absolute top-0 h-6 rounded-md flex items-center justify-center text-white text-xs transition-all
                      ${isActive ? 'ring-2 ring-blue-400 shadow-lg' : ''}`} 
                    style={{ 
                      left: `${startPosition}px`, 
                      width: `${duration}px`,
                      backgroundColor: venue.color,
                      marginLeft: '140px'
                    }}
                  >
                    {venue.duration}h
                  </div>
                  
                  {/* Travel time indicator (if not the last venue) */}
                  {index < tourSchedule.length - 1 && (
                    <div className="absolute flex items-center" 
                      style={{ 
                        left: `${startPosition + duration + 5 + 140}px`, 
                        top: '3px'
                      }}
                    >
                      <div className="h-px w-6 bg-gray-400 mr-1"></div>
                      <span className="text-xs text-gray-500">{venue.travelTime}m</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Simple Toronto map with venue locations and route
  const renderMap = () => (
    <div className="relative w-full h-48 bg-blue-50 rounded-lg overflow-hidden mb-2">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {/* Simplified Toronto map base */}
        <path d="M 20,150 C 60,140 120,160 180,150 S 280,140 380,150 L 380,200 L 20,200 Z" fill="#e0e8f0" />
        <path d="M 150,150 C 200,145 250,148 300,152" stroke="#4299e1" strokeWidth="3" fill="none" />
        <path d="M 50,155 C 100,153 150,152 200,150" stroke="#4299e1" strokeWidth="2" fill="none" />
        
        {/* Simplified roads */}
        <path d="M 50,120 L 380,120" stroke="#d1d5db" strokeWidth="1.5" />
        <path d="M 100,80 L 100,180" stroke="#d1d5db" strokeWidth="1.5" />
        <path d="M 200,60 L 200,180" stroke="#d1d5db" strokeWidth="1.5" />
        <path d="M 300,80 L 300,180" stroke="#d1d5db" strokeWidth="1.5" />
        
        {/* Venue locations */}
        <circle cx="80" cy="110" r="6" fill={tourSchedule[0].color} />
        <circle cx="140" cy="125" r="6" fill={tourSchedule[1].color} />
        <circle cx="250" cy="140" r="6" fill={tourSchedule[2].color} />
        <circle cx="320" cy="95" r="6" fill={tourSchedule[3].color} />
        
        {/* Route line */}
        <path d="M 80,110 L 140,125 L 250,140 L 320,95" 
          stroke="#2563eb" 
          strokeWidth="2" 
          strokeDasharray="4,2" 
          fill="none" />
        
        {/* CN Tower simplified */}
        <path d="M 320,95 L 322,65 L 318,65 L 320,95" fill="#3a5db7" />
        <circle cx="320" cy="60" r="3" fill="#3a5db7" />
      </svg>
      
      {/* Venue labels */}
      <div className="absolute top-24 left-12 text-xs font-semibold text-gray-700 bg-white/80 px-1 rounded">St. Lawrence Market</div>
      <div className="absolute top-32 left-32 text-xs font-semibold text-gray-700 bg-white/80 px-1 rounded">Hockey Hall of Fame</div>
      <div className="absolute top-36 left-60 text-xs font-semibold text-gray-700 bg-white/80 px-1 rounded">Distillery District</div>
      <div className="absolute top-16 left-80 text-xs font-semibold text-gray-700 bg-white/80 px-1 rounded">CN Tower</div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6">
        <h1 className="text-3xl font-bold mb-1">Smart Tourism in Toronto</h1>
        <h2 className="text-xl font-light">Data-Driven Travel Experience Optimization</h2>
      </header>
      
      <div className="px-4 md:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Problem Statement */}
        <div className="md:col-span-3">
          <VisualProblemStatement />
        </div>
      
        {/* Left Column - Data & Methodology */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Data Sources</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-md">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-2">B</div>
                  <h4 className="font-medium">BestTime.app API</h4>
                </div>
                <p className="text-sm text-gray-600">Real-time crowd levels for 10 Toronto attractions</p>
                <div className="mt-2 text-xs bg-blue-100 p-1 rounded-sm">
                  <code>{"{ \"intensity_nr\": -0.3 to 2.0 }"}</code>
                </div>
              </div>
              
              <div className="bg-red-50 p-3 rounded-md">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-2">T</div>
                  <h4 className="font-medium">TomTom Routing API</h4>
                </div>
                <p className="text-sm text-gray-600">Traffic data between attractions</p>
                <div className="mt-2 text-xs bg-red-100 p-1 rounded-sm">
                  <code>{"{ \"travelTimeInSeconds\": 1020 }"}</code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Multi-Objective Optimization</h3>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center w-full bg-indigo-50 p-2 rounded-md">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs mr-2">Min</div>
                <div className="text-sm">Travel Time Between Venues</div>
              </div>
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400">
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex items-center w-full bg-green-50 p-2 rounded-md">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs mr-2">Min</div>
                <div className="text-sm">Exposure to Crowds</div>
              </div>
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400">
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex items-center w-full bg-amber-50 p-2 rounded-md">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs mr-2">Max</div>
                <div className="text-sm">Number of Venues Visited</div>
              </div>
            </div>
          </div>
        </div>

        {/* Optimal Saturday Tour - Now spanning two columns */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Optimal Saturday Tour</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {/* Key Metrics row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 bg-blue-50 rounded-md">
                  <div className="text-sm font-medium">Total Travel Time:</div>
                  <div className="text-xl font-bold text-blue-700">31 minutes</div>
                </div>
                <div className="p-3 bg-green-50 rounded-md">
                  <div className="text-sm font-medium">Venues Visited:</div>
                  <div className="text-xl font-bold text-green-700">4</div>
                </div>
                <div className="p-3 bg-amber-50 rounded-md">
                  <div className="text-sm font-medium">Average Crowd Level:</div>
                  <div className="flex items-center mt-1">
                    {renderCrowdLevel(0.6)}
                  </div>
                </div>
              </div>
              
              {/* Timeline - Now spans full width */}
              <div>
                <h4 className="text-sm font-medium mb-2">Schedule Timeline</h4>
                <div className="mt-2 relative pb-2">
                  <div className="w-full">
                    {/* Time markers */}
                    <div className="flex border-t border-gray-300">
                      {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'].map((time) => (
                        <div key={time} className="flex-1 text-xs text-center">
                          <div className="h-3 border-l border-gray-300"></div>
                          <div>{time}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Venue blocks */}
                    <div className="mt-4 space-y-4">
                      {tourSchedule.map((venue, index) => {
                        const startHour = parseInt(venue.startTime.split(':')[0]);
                        const startMinute = parseInt(venue.startTime.split(':')[1]);
                        const endHour = parseInt(venue.endTime.split(':')[0]);
                        const endMinute = parseInt(venue.endTime.split(':')[1]);
                        
                        const startPercent = ((startHour - 9) * 60 + startMinute) / (12 * 60) * 100;
                        const durationPercent = ((endHour - startHour) * 60 + (endMinute - startMinute)) / (12 * 60) * 100;
                        
                        const isActive = activeVenue === venue.venue;
                        
                        return (
                          <div key={venue.venue} className="relative h-10" 
                            onMouseEnter={() => setActiveVenue(venue.venue)}
                            onMouseLeave={() => setActiveVenue(null)}
                          >
                            {/* Venue name with left margin to prevent overlap */}
                            <div className="absolute left-0 top-0 h-6 flex items-center z-10" style={{ width: '10%' }}>
                              <div className="w-4 h-4 mr-1 rounded-full" style={{ backgroundColor: venue.color }}></div>
                              <span className="text-xs font-medium truncate">{venue.venue}</span>
                            </div>
                            
                            {/* Timeline block positioned with percentage-based width and left */}
                            <div 
                              className={`absolute top-0 h-6 rounded-md flex items-center justify-center text-white text-xs transition-all
                                ${isActive ? 'ring-2 ring-blue-400 shadow-lg' : ''}`} 
                              style={{ 
                                left: `${10 + startPercent * 0.9}%`, 
                                width: `${durationPercent * 0.9}%`,
                                backgroundColor: venue.color
                              }}
                            >
                              {venue.duration}h
                            </div>
                            
                            {/* Travel time indicator (if not the last venue) */}
                            {index < tourSchedule.length - 1 && (
                              <div className="absolute flex items-center" 
                                style={{ 
                                  left: `${10 + (startPercent + durationPercent) * 0.9 + 1}%`, 
                                  top: '3px'
                                }}
                              >
                                <div className="h-px w-6 bg-gray-400 mr-1"></div>
                                <span className="text-xs text-gray-500">{venue.travelTime}m</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pareto Analysis Section */}
        <ParetoAnalysisSection />
        
        {/* Conclusion Section */}
        <ConclusionSection />
        
        {/* Business Recommendations - Now made horizontal and moved here */}
        <div className="md:col-span-3 bg-white rounded-lg shadow-md p-4 mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Business Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Group 1: Time-based recommendations */}
            <div className="bg-blue-50 p-3 rounded-md">
              <div className="flex items-start mb-2">
                <div className="p-2 rounded-md mr-2 bg-blue-100">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-600">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Time-Optimized Packages</h4>
                  <p className="text-xs text-gray-600">Pre-scheduled entry bundles</p>
                </div>
              </div>
              <div className="ml-9 text-xs text-gray-700">
                • Increased revenue<br />
                • Less congestion
              </div>
            </div>

            {/* Group 2: Price-based recommendations */}
            <div className="bg-green-50 p-3 rounded-md">
              <div className="flex items-start mb-2">
                <div className="p-2 rounded-md mr-2 bg-green-100">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-600">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Dynamic Pricing</h4>
                  <p className="text-xs text-gray-600">Off-peak discounts</p>
                </div>
              </div>
              <div className="ml-9 text-xs text-gray-700">
                • More off-peak visits<br />
                • Balanced visitor flow<br />
                • Consistent revenue
              </div>
            </div>
            
            {/* Group 3: Technology recommendations */}
            <div className="bg-purple-50 p-3 rounded-md">
              <div className="flex items-start mb-2">
                <div className="p-2 rounded-md mr-2 bg-purple-100">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-purple-600">
                    <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Mobile App</h4>
                  <p className="text-xs text-gray-600">Real-time scheduling</p>
                </div>
              </div>
              <div className="ml-9 text-xs text-gray-700">
                • Live crowd updates<br />
                • Custom itineraries<br />
                • Smart routing
              </div>
            </div>
          </div>
        </div>
        
        {/* Limitations Section moved to end */}
        <LimitationsSection />
        
        {/* Footer */}
        <div className="md:col-span-3 mt-6 text-center text-xs text-gray-500">
          <p>Smart Tourism in Toronto: Data-Driven Travel Experience Optimization</p>
          <p className="mt-1">Awad, Kathuria, Narciso-Orejola, Rara, Siddiqui - 2025</p>
        </div>
      </div>
    </div>
  );
};

export default SmartTourismInfographic; 