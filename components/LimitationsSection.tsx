import React from 'react';

const LimitationsSection = () => {
  return (
    <div className="md:col-span-3 bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-3">Limitations & Future Enhancements</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
          <div className="flex items-center mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-amber-500 mr-2">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className="font-medium">Seasonal Variations</h4>
          </div>
          <p className="text-sm text-gray-600">
            The model does not account for seasonal weather variations, which significantly affect travel efficiency and visitor traffic patterns in Toronto. In colder months, indoor attractions see increased popularity while outdoor venues experience decreased footfall.
          </p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
          <div className="flex items-center mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-amber-500 mr-2">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className="font-medium">Herding Problem</h4>
          </div>
          <p className="text-sm text-gray-600">
            When large numbers of tourists follow similar optimized itineraries, this can create congestion at specific venues and times—a "herding problem." Future enhancements would include real-time crowd dispersion algorithms that continuously adjust recommendations.
          </p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
          <div className="flex items-center mb-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-amber-500 mr-2">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className="font-medium">Model Refinement</h4>
          </div>
          <p className="text-sm text-gray-600">
            The constraint programming model would benefit from callbacks for constraint generation and solution iteration to improve performance. Additional optimization for handling larger venue sets and more complex time-dependent constraints would enhance scalability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LimitationsSection; 