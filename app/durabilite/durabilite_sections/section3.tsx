

export const Section3 = () => {
  return (
    <section className="w-full flex flex-col md:flex-row mt-24">
      <div className="md:w-[50%] bg-accent md:p-36 p-18 max-h-6xl relative aspect-video">
        <video
          src="/durabilite/vid1.mp4"
          className="absolute inset-0 w-screen h-full object-cover mix-blend-multiply  "
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <p className="font-semibold text-xl md:text-3xl text-white md:max-w-[80%] text-center max-auto relative z-10">
          <span className="font-normal">
            Traçabilité complète de nos fruits grâce à
          </span>{" "}
          des outils avancés de gestion de production.
        </p>
      </div>
      <div className="relative md:w-[50%] bg-[#e93b64] md:p-36 p-18 max-h-6xl flex items-center justify-center">
        <video
          src="/durabilite/vid2.mp4"
          className="absolute inset-0 w-screen h-full object-cover mix-blend-multiply"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <p className="font-semibold text-xl md:text-3xl text-white md:max-w-[80%] text-center max-auto z-10">
          <span className="font-normal">Conditionnement conforme, </span>
          maîtrise de la chaîne du froid et logistique.
        </p>
      </div>
    </section>
  );
}
