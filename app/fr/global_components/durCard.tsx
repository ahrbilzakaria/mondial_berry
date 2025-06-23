
type DurCardProps = {
    svg: string;
    content: string;
};


export const DurCard = ({svg,content}:DurCardProps) => {
  return (
    <div className="bg-[#FFC8D5] flex flex-col items-start  md:gap-6 gap-4 rounded-lg md:w-[300px] w-full md:p-6 p-4">
      <img src={svg} alt="" className="p-4 bg-secondary rounded-lg text-[#FFC8D5] md:h-18 h-16" />
      <p className="font-medium text-secondary md:text-xl text-md ">{content}</p>
    </div>
  );
}
