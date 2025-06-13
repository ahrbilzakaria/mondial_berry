export default function About() {
  return (
    <section className="w-[80%] mx-auto text-primary mt-14">
      <h2 className="text-3xl md:text-4xl italic font-semibold">
        À propos de nous
      </h2>
      <div className="flex gap-8 md:gap-14 items-start md:items-center mt-12 md:flex-row flex-col">
        <img src="/arrow_forward.png" alt="" className="max-sm:scale-75" />
        <p className="text-lg md:text-xl tracking-wide max-w-4xl">
          <strong>Mondial Berry</strong>, une expertise agricole de
          confiance.Fondée en 2018, Mondial Berry est une entreprise marocaine
          spécialisée dans la culture et l'exportation de fruits rouges haut de
          gamme : framboises, fraises, myrtilles et mûres.
          <br />
          Grâce à l'expérience solide de ses fondateurs et à une vision tournée
          vers la durabilité, l'entreprise s'est imposée comme un acteur
          incontournable sur les marchés européens et du Moyen-Orient.
        </p>
      </div>
    </section>
  );
}
