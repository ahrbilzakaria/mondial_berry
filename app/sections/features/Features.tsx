export default function Features() {
  return (
    <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-4 w-[80%] mx-auto mt-18 md:mt-24">
      <div className="row-span-1 md:row-span-4">
        <img
          src="/accueil/img1.png"
          alt=""
          className="object-cover rounded-[1rem] h-full w-full"
        />
      </div>
      <div className="bg-secondary px-6 py-6 flex justify-center flex-col overflow-hidden relative row-span-1 md:row-span-2 rounded-[1rem]">
        <p className="z-10 text-4xl lg:text-5xl font-bold text-white uppercase">
          fruits
          <br />
          <span className="font-normal">de qualité</span>
        </p>
        <img
          src="/accueil/SingleRaspberry.png"
          alt="SingleRaspberry"
          className="absolute -bottom-40 max-sm:-bottom-35 max-sm:-right-20 -right-10 -z-0 max-sm:scale-75"
        />
      </div>
      <div className="w-full h-full bg-primary px-6 py-6 flex justify-start items-end text-right flex-col overflow-hidden relative row-span-1 md:row-span-2 rounded-[1rem]">
        <p className="z-10 text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
          Plus vert que ça,
          <br />
          <span className="font-normal text-[#90FF79]">c'est impossible</span>
        </p>
        <img
          src="/accueil/SingleStrawberry.png"
          alt="SingleRaspberry"
          className="absolute -bottom-110 max-sm:-bottom-45 -left-50 max-sm:-left-30 -z-0"
        />
      </div>
    </div>
  );
}
