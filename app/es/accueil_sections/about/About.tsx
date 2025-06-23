export default function About() {
  return (
    <section className="w-[80%] mx-auto text-primary mt-14">
      <h2 className="text-3xl md:text-4xl italic font-semibold">
        Sobre nosotros
      </h2>
      <div className="flex gap-8 md:gap-14 items-start md:items-center mt-12 md:flex-row flex-col">
        <img src="/arrow_forward.png" alt="" className="max-sm:scale-75" />
        <p className="text-lg md:text-xl tracking-wide max-w-4xl">
          <strong>Mondial Berry</strong>, una experiencia agrícola de confianza.
          Fundada en 2018, Mondial Berry es una empresa marroquí especializada
          en el cultivo y exportación de frutos rojos de alta gama: frambuesas,
          fresas, arándanos y moras.
          <br />
          Gracias a la sólida experiencia de sus fundadores y a una visión
          orientada a la sostenibilidad, la empresa se ha consolidado como un
          actor imprescindible en los mercados europeos y de Oriente Medio.
        </p>
      </div>
    </section>
  );
}
