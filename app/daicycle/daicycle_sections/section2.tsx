export const Section2 = () => {
  return (
    <section className="w-full border-4 border-[#743600] mt-16 bg-[#FFF5EC] ">
      <div className="w-[80%] mx-auto py-16 px-4 flex flex-col md:gap-12 gap-8 ">
        <div className="flex justify-center items-center gap-2  flex-col">
          <h2 className="text-4xl md:text-5xl text-[#3B1E02] font-bold text-center ">
            Quality certificates
          </h2>
          <p className="text-[#3B1E02] text-center text-lg md:text-xl tracking-wide max-w-4xl ">
            Our certifications guarantee the quality and safety of our
            conventional and organic products, nationally and internationally:
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-8 items-center justify-center">
          <img src="/daicycle/img1.png" alt="" className="md:h-full h-18" />
          <img src="/daicycle/img3.png" alt="" className="md:h-full h-12" />
          <img src="/daicycle/img2.png" alt="" className="md:h-full h-18" />
        </div>
      </div>
    </section>
  );
};
