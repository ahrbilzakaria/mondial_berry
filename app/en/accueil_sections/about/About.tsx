export default function About() {
  return (
    <section className="w-[80%] mx-auto text-primary mt-14">
      <h2 className="text-3xl md:text-4xl italic font-semibold">About Us</h2>
      <div className="flex gap-8 md:gap-14 items-start md:items-center mt-12 md:flex-row flex-col">
        <img src="/arrow_forward.png" alt="" className="max-sm:scale-75" />
        <p className="text-lg md:text-xl tracking-wide max-w-4xl">
          <strong>Mondial Berry</strong>, agricultural expertise you can trust.
          Founded in 2018, Mondial Berry is a Moroccan company specializing in
          the cultivation and export of premium berries: raspberries,
          strawberries, blueberries, and blackberries.
          <br />
          Thanks to the solid experience of its founders and a vision focused on
          sustainability, the company has established itself as a key player in
          the European and Middle Eastern markets.
        </p>
      </div>
    </section>
  );
}
