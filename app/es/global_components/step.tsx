type stepProps = {
    number:number,
    svg: string,
    title: string,
    description:string
}




export const Step = ({number,svg,title,description}: stepProps) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center lg:w-[18rem]">
      <div className="p-8 relative border-4 rounded-full border-secondary">
        <p className="bg-accent px-3 py-2 text-center mx-auto absolute top-0 right-0 rounded-full font-semibold text-white tracking-wider">
          0{number}
        </p>
        <div className="w-18 h-18 flex items-center justify-center"><img src={svg} alt="" /></div>
        
      </div>
      <div className="flex flex-col gap-1 items-center justify-center text-primary px-4 text-center">
        <p className="lg:text-xl text-lg font-semibold ">{title}</p>
        <p className="md:text-[0.8rem] text-[0.7rem] ">
          {description}
        </p>
      </div>
    </div>
  );
}
