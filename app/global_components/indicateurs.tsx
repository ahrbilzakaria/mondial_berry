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
  if (type === "green") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 px-12 py-4 bg-gradient-to-b from-[#FFFFFF] to-[#90FF79] rounded-lg md:w-auto w-full">
        <div className="flex flex-col items-center justify-center tracking-wider gap-1">
          <span className="md:text-5xl text-4xl font-bold text-primary ">+{number}</span>
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
          +{number}
        </span>
        <h3 className="md:text-2xl text-xl font-medium text-white italic">
          {title}
        </h3>
      </div>

      <p className="text-sm font-normal text-white">{description}</p>
    </div>
  );
};
