

type ProductionBlockProps = {
    className: string;
    content: string;
    svg: string;
};

export const Production_block = ({ className, content, svg }: ProductionBlockProps) => {
  return (
    <div className={`max-w-sm flex items-center gap-4 p-4  rounded-2xl min-h-30  ${className}`}>
      <img src={svg} alt="" className=""/>
      <span className="text-white max-w-sm font-normal md:text-xl text-md">{content}</span>
    </div>
  );
};
