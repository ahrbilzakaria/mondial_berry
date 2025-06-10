
type EngagementCardProps = {
  type: "green" | "red" ;
  url :string;
  content : string;
};


export const EngagementCard = ({ type , url, content }: EngagementCardProps) => {
  if (type === "green") {
    return (
      <div className="flex flex-col items-start gap-4 p-6 md:p-8 bg-[#F3FFE4] rounded-2xl w-100 max-sm:w-full h-70 ">
        <img
          src={url}
          alt=""
          className="p-4 bg-primary rounded-xl max-sm:scale-75"
        />
        <p className="text-2xl md:text-3xl text-primary text-light ">
          {content}
        </p>
      </div>
    );
  }else{
    return (
      <div className="flex flex-col items-start gap-4 p-6 md:p-8 bg-[#FFF5F7] rounded-2xl w-100 max-sm:w-full h-70 ">
        <img
          src={url}
          alt=""
          className="p-4 bg-secondary rounded-xl max-sm:scale-75"
        />
        <p className="text-2xl md:text-3xl text-secondary">{content}</p>
      </div>
    );
  }
}
