
import React from 'react';
import { Tag } from 'lucide-react';

interface HookProps {
  position: { x: number, y: number };
  challenge: string;
  speed: number;
}

const Hook: React.FC<HookProps> = ({ position, challenge, speed }) => {
  return (
    <div 
      className="challenge-hook flex flex-col items-center justify-center absolute" 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transition: `left ${speed}ms linear`,
        zIndex: 5
      }}
    >
      {/* Fishing line */}
      <div className="h-16 w-1 bg-gray-400"></div>
      
      {/* Hook with challenge price tag */}
      <div className="relative">
        {/* Improved hook shape - repositioned to the right and down */}
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-4 translate-y-2">
          <path d="M20 0V15C20 22 9 30 2 24" stroke="#666666" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
        
        {/* Price tag with challenge text - repositioned more to the right to align with the hook */}
        <div className="absolute top-10 -left-5">
          {/* The actual price tag */}
          <div className="relative flex flex-col items-center">
            {/* String connecting to hook - still attached to lowest point */}
            <div className="h-6 w-1 bg-red-500 -mt-3"></div>
            
            {/* Price tag body */}
            <div className="bg-white rounded-md border-2 border-red-500 px-2 py-1 shadow-md w-32 relative mt-1">
              {/* Hole reinforcement */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-red-500 bg-white"></div>
              
              <p className="text-xs font-extrabold text-red-600 whitespace-nowrap text-center">
                {challenge}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hook;
