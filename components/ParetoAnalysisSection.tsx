import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Pareto data for 3D visualization
const paretoData = [
  { travelTime: 31, crowdLevel: 0.6, venues: 4, isOptimal: true },
  { travelTime: 48, crowdLevel: 0.1, venues: 5, isOptimal: true, noStar: true },
  { travelTime: 52, crowdLevel: 0.4, venues: 3, isOptimal: false },
  { travelTime: 37, crowdLevel: 0.9, venues: 3, isOptimal: false },
  { travelTime: 29, crowdLevel: 0.8, venues: 3, isOptimal: false },
  { travelTime: 42, crowdLevel: 0.5, venues: 4, isOptimal: false },
  { travelTime: 60, crowdLevel: 0.3, venues: 5, isOptimal: false },
  { travelTime: 35, crowdLevel: 0.7, venues: 4, isOptimal: false },
];

const ParetoAnalysisSection = () => {
  return (
    <div className="md:col-span-3 bg-white rounded-lg shadow-md p-4 mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-3">Pareto Optimality Analysis</h3>
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-full md:w-1/2">
          <h4 className="text-sm font-medium mb-2">Multi-Objective Trade-offs</h4>
          <div className="relative pl-4">
            <div className="absolute -left-1 top-1/2 transform -rotate-90 -translate-y-1/2 text-xs font-bold text-gray-700 whitespace-nowrap">
              Crowd Level
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <ScatterChart
                margin={{ top: 20, right: 20, left: 30, bottom: 30 }}
              >
                <CartesianGrid opacity={0.3} />
                <XAxis 
                  type="number" 
                  dataKey="travelTime" 
                  name="Travel Time" 
                  unit=" min" 
                  domain={[20, 65]} 
                  label={{ value: 'Travel Time (min)', position: 'insideBottom', dy: 10 }}
                />
                <YAxis 
                  type="number" 
                  dataKey="crowdLevel" 
                  name="Crowd Level" 
                  domain={[0, 1.0]} 
                />
                <ZAxis 
                  type="number" 
                  dataKey="venues" 
                  name="Venues" 
                  range={[60, 300]} 
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value: any, name: string) => {
                    return [
                      name === "Crowd Level" ? `${value.toFixed(2)} (${Number(value) < 0.3 ? 'Low' : Number(value) < 0.7 ? 'Medium' : 'High'})` : value,
                      name
                    ];
                  }}
                />
                <Scatter 
                  name="Non-Optimal Solutions" 
                  data={paretoData.filter(d => !d.isOptimal)} 
                  fill="#9ca3af" 
                />
                <Scatter 
                  name="Pareto-Optimal Solutions with Star" 
                  data={paretoData.filter(d => d.isOptimal && !d.noStar)} 
                  fill="#3b82f6" 
                  shape="star"
                />
                <Scatter 
                  name="Pareto-Optimal Solutions without Star" 
                  data={paretoData.filter(d => d.isOptimal && d.noStar)} 
                  fill="#9ca3af" 
                />
              </ScatterChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 text-xs mt-2">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                <span>Pareto-Optimal</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-400 mr-1"></div>
                <span>Other Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full opacity-25 border border-gray-400 mr-1"></div>
                <span>Circle Size = # Venues</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h4 className="text-sm font-medium mb-2">Key Findings</h4>
          <div className="space-y-3">
            {/* Saturday's Optimal Tour - Visual representation */}
            <div className="bg-blue-50 p-3 rounded-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm text-blue-800">Saturday's Optimal Tour</h5>
                  <div className="flex items-center mt-2 flex-wrap gap-2">
                    <div className="flex items-center bg-white px-2 py-1 rounded text-xs">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                      <span>4 venues</span>
                    </div>
                    <div className="flex items-center bg-white px-2 py-1 rounded text-xs">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                      <span>31 min travel</span>
                    </div>
                    <div className="flex items-center bg-white px-2 py-1 rounded text-xs">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></span>
                      <span>Balanced crowds</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-xs text-gray-600">
                    <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-1 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="ml-2">75% efficiency</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Time-Based Scheduling Importance - Visual */}
            <div className="bg-blue-50 p-3 rounded-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm text-blue-800">Time-Based Scheduling</h5>
                  <div className="flex mt-2 items-center">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1 text-xs">
                        <span>Morning</span>
                        <span>Evening</span>
                      </div>
                      <div className="relative h-6 bg-gray-100 rounded-md overflow-hidden">
                        <div className="absolute left-0 top-0 h-full bg-amber-200 border-r border-gray-300 flex items-center justify-center" style={{ width: '30%' }}>
                          <span className="text-xs font-medium">Market</span>
                        </div>
                        <div className="absolute left-[30%] top-0 h-full bg-blue-100 border-r border-gray-300 flex items-center justify-center" style={{ width: '20%' }}>
                          <span className="text-xs font-medium">Hall</span>
                        </div>
                        <div className="absolute left-[50%] top-0 h-full bg-orange-100 border-r border-gray-300 flex items-center justify-center" style={{ width: '20%' }}>
                          <span className="text-xs font-medium">District</span>
                        </div>
                        <div className="absolute left-[70%] top-0 h-full bg-indigo-100 flex items-center justify-center" style={{ width: '30%' }}>
                          <span className="text-xs font-medium">CN Tower</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-500">
                        <span>Early Close</span>
                        <span>Late Close</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pareto Efficiency - Visual */}
            <div className="bg-blue-50 p-3 rounded-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-sm text-blue-800">Pareto Trade-off</h5>
                  <div className="flex items-center justify-between mt-2 mb-1">
                    <div className="flex items-center text-xs">
                      <span className="font-semibold mr-1">4</span> venues
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="font-semibold mr-1">5</span> venues
                    </div>
                  </div>
                  <div className="relative pb-8">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center text-xs font-medium">
                        31m
                      </div>
                      <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-400 to-red-400"></div>
                      <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center text-xs font-medium">
                        48m
                      </div>
                    </div>
                    <div className="absolute w-full text-center text-xs text-red-600 font-semibold mt-1">
                      +55% travel time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParetoAnalysisSection; 