'use client';
import { useState, useEffect } from 'react';

type HeaderNbCardProps = {
  number: number;
  description: string;
};

export const HeaderNbCard = ({ number, description }: HeaderNbCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 3000; // Animation duration in milliseconds
    const startTime = performance.now(); // Capture start timestamp
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime; // How much time has passed
      const progress = Math.min(elapsed / duration, 1); // Convert to percentage (0 to 1)
      
      setCount(Math.floor(progress * number)); // Calculate current number to display
      
      if (progress < 1) { // If not finished
        requestAnimationFrame(animate); // Schedule next frame
      }
    };
    
    requestAnimationFrame(animate); // Start the animation
  }, [number]);

  return (
    <div className="w-60 h-fit text-center p-2 md:p-4 py-4 md:space-y-2  bg-gradient-to-b from-white/6 to-transparent backdrop-blur-md rounded-t-2xl rounded-b-2xl  tracking-wide">
      <p className="text-3xl md:text-6xl md:font-bold font-semibold">
        +<span>{count}</span>
      </p>
      <p className="text-[0.5rem] md:text-lg font-light  ">
        {description}
      </p>
    </div>
  );
}
