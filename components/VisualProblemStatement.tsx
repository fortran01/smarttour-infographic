import React from 'react';

const VisualProblemStatement = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-3">Toronto Tourism Challenge</h2>
      
      {/* Key Issue Icons in a more compact row */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="flex items-center space-x-2">
          <div className="bg-red-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold text-red-500">42%</div>
            <div className="text-xs">avoid crowds</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-bold text-yellow-500">Inefficient Traffic</div>
            <div className="text-xs">at key intersections</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="bg-blue-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-bold text-blue-500">Wasted Time</div>
            <div className="text-xs">in queues & traffic</div>
          </div>
        </div>
      </div>
      
      {/* Solution Flow Diagram - more compact horizontal layout */}
      <div className="mt-3">
        <h3 className="text-sm font-semibold mb-2">Data-Driven Solution</h3>
        <div className="flex items-center justify-between px-1">
          {/* Crowd Data */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-1.5 rounded-full mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-center text-xs">
              Crowd Data
            </div>
          </div>
          
          {/* Arrow */}
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          
          {/* Traffic Data */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-1.5 rounded-full mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div className="text-center text-xs">
              Traffic Data
            </div>
          </div>
          
          {/* Arrow */}
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          
          {/* Smart Algorithm */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-1.5 rounded-full mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="text-center text-xs">
              Algorithm
            </div>
          </div>
          
          {/* Arrow */}
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          
          {/* Optimized Experience */}
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-1.5 rounded-full mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-center text-xs">
              Optimized
            </div>
          </div>
        </div>
      </div>
      
      {/* Comparison Bar - more compact */}
      <div className="mt-4">
        <div className="w-full">
          <div className="relative pt-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold inline-block py-0.5 px-1.5 rounded-full text-white bg-red-500">
                Traditional
              </span>
              <span className="text-xs font-semibold inline-block py-0.5 px-1.5 rounded-full text-white bg-green-500">
                Smart
              </span>
            </div>
            <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
              <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              <div style={{ width: "20%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Time in Crowds</span>
              <span>Enjoying Attractions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualProblemStatement; 