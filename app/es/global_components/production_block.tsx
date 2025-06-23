

type ProductionBlockProps = {
    className: string;
    content: string;
    svg: string;
};

export const Production_block = ({ className, content, svg }: ProductionBlockProps) => {
  return (
    <div className={` flex items-center gap-4 p-4   rounded-2xl md:min-h-30 h-24  ${className}`}>
      <img src={svg} alt="" className="h-14 md:h-auto" />
      <span className="text-white max-w-sm font-normal md:text-xl text-sm">{content}</span>
    </div>
  );
};
