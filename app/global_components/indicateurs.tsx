'use client'

import { useEffect, useState } from "react";

type IndicateursProps = {
  type: string;
  number: number;
  title: string;
  description: string;
};

export const Indicateurs = ({
  type,
  number,
  title,
  description,
}: IndicateursProps) => {

  const [count,setCount] = useState(0)

useEffect(() => {
 let frame = 0
 const frameRate = 30
 const duration = 2000
 const totalFrames = Math.round(duration/frameRate)
 let progress = 0

 const counter = setInterval( ()=>{
    frame++
    progress = Math.min(frame/totalFrames,1)
    setCount(Math.round(progress*number))

    if(progress==1) clearInterval(counter)
    
 } ,frameRate)

},[number]) 



  if (type === "green") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 px-12 py-4 bg-gradient-to-b from-[#FFFFFF] to-[#90FF79] rounded-lg md:w-auto w-full">
        <div className="flex flex-col items-center justify-center tracking-wider gap-1">
          <span className="md:text-5xl text-4xl font-bold text-primary ">+{count}</span>
          <h3 className="md:text-2xl text-xl font-medium text-primary italic">{title}</h3>
        </div>

        <p className="text-sm font-normal text-primary">{description}</p>
      </div>
    );
    
  }
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-12 py-4 bg-secondary rounded-lg md:w-auto w-full">
      <div className="flex flex-col items-center justify-center tracking-wider gap-1">
        <span className="md:text-5xl text-4xl font-bold text-white ">
          +{count}
        </span>
        <h3 className="md:text-2xl text-xl font-medium text-white italic">
          {title}
        </h3>
      </div>

      <p className="text-sm font-normal text-white">{description}</p>
    </div>
  );
};
