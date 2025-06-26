import { SVGProps, FC } from "react"

type AvantageCardProps = {
    color: "green" | "red",
    description: string,
    Svg: FC<SVGProps<SVGSVGElement>>,
}

export const AvantageCard = ({ description, Svg, color }: AvantageCardProps) => {
    if(color==="green")
    {
        return (
          <div className="flex flex-col gap-5 w-[18rem]  bg-[#F3FFE4] rounded-2xl p-6 hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out">
            <Svg />
            <p className="text-primary font-medium text-md">{description}</p>
          </div>
        );
    }else{
        return (
          <div className="flex flex-col gap-5 w-[18rem] bg-[#FFF5F7] rounded-2xl p-6 hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out">
            <Svg />
            <p className="text-secondary font-medium text-lg">{description}</p>
          </div>
        );
    }
  
}
