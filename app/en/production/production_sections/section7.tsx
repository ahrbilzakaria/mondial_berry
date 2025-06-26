"use client";

import { Tabs } from "@/components/ui/tabs";

export function Section7() {
  const tabs = [
    {
      title: "BLUEBERRIES",
      value: "myrtilles",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl   bg-accent">
          <ul className=" flex flex-wrap gap-x-4  items-center justify-center px-4 py-2 text-md md:text-2xl font-normal text-white ">
            <li>January</li>
            <li>February</li>
            <li>March</li>
            <li>April</li>
            <li>May</li>
            <li>December</li>
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
      title: "STRAWBERRIES",
      value: "fraises",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl   bg-accent">
          <ul className=" flex flex-wrap gap-x-4  items-center justify-center px-4 py-2 text-md md:text-2xl font-normal text-white ">
            <li>February</li>
            <li>March</li>
            <li>April</li>
            <li>May</li>
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
      title: "RASPBERRIES",
      value: "framboises",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl   bg-accent">
          <ul className=" flex flex-wrap gap-x-4  items-center justify-center px-4 py-2 text-md md:text-2xl font-normal text-white ">
            <li>All year round</li>
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
      title: "BLACKBERRIES",
      value: "mures",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl   bg-accent">
          <ul className=" flex flex-wrap gap-x-4  items-center justify-center px-4 py-2 text-md md:text-2xl font-normal text-white ">
            <li>January</li>
            <li>February</li>
            <li>March</li>
            <li>April</li>
            <li>May</li>
            <li>June</li>
            <li>November</li>
            <li>December</li>
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
