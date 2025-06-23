"use client";

import { Tabs } from "@/components/ui/tabs";

export function Section7() {
  const tabs = [
    {
      title: "ARÁNDANOS",
      value: "myrtilles",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl   bg-accent">
          <ul className=" flex flex-wrap gap-x-4  items-center justify-center px-4 py-2 text-md md:text-2xl font-normal text-white ">
            <li>Enero</li>
            <li>Febrero</li>
            <li>Marzo</li>
            <li>Abril</li>
            <li>Mayo</li>
            <li>Diciembre</li>
          </ul>
          <img
            src="/production/myrtilles.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover  absolute h-full  w-full  mx-auto"
          />
        </div>
      ),
    },
    {
      title: "FRESAS",
      value: "fraises",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl   bg-accent">
          <ul className=" flex flex-wrap gap-x-4  items-center justify-center px-4 py-2 text-md md:text-2xl font-normal text-white ">
            <li>Febrero</li>
            <li>Marzo</li>
            <li>Abril</li>
            <li>Mayo</li>
          </ul>
          <img
            src="/production/fraises.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover  absolute h-full  w-full  mx-auto"
          />
        </div>
      ),
    },
    {
      title: "FRAMBUESAS",
      value: "framboises",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl   bg-accent">
          <ul className=" flex flex-wrap gap-x-4  items-center justify-center px-4 py-2 text-md md:text-2xl font-normal text-white ">
            <li>Todo el año</li>
          </ul>
          <img
            src="/production/framboises.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover  absolute h-full  w-full  mx-auto"
          />
        </div>
      ),
    },
    {
      title: "MORAS",
      value: "mures",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl   bg-accent">
          <ul className=" flex flex-wrap gap-x-4  items-center justify-center px-4 py-2 text-md md:text-2xl font-normal text-white ">
            <li>Enero</li>
            <li>Febrero</li>
            <li>Marzo</li>
            <li>Abril</li>
            <li>Mayo</li>
            <li>Junio</li>
            <li>Noviembre</li>
            <li>Diciembre</li>
          </ul>
          <img
            src="/production/mures.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover  absolute h-full  w-full  mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[18rem] md:h-[34rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-[90%]  items-start justify-start mt-24 mb-48">
      <Tabs tabs={tabs} />
    </div>
  );
}
