import ContactButtonNav from "./contactButton";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 w-[80%] mx-auto rounded-[3.75rem] bg-white/6 backdrop-blur-[22px] mt-6 fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
      <img src="/WhiteLogo.png" alt="Logo Mondial Berry" className="h-10 md:h-12 " />
      <ul className=" gap-4 text-white font-light lg:flex hidden">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/about">À propos</a>
        </li>
        <li>
          <a href="/products">Gamme</a>
        </li>
        <li>
          <a href="/contact">Production</a>
        </li>
        <li>
          <a href="/contact">Durabilité</a>
        </li>
        <li>
          <a href="/contact">Daicycle</a>
        </li>
      </ul>
      <div className="hidden lg:block">
      <ContactButtonNav/>
      </div>
      <button className="lg:hidden ">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="23"
        viewBox="0 0 28 23"
        fill="none"
      >
        <path
          d="M1.18408 9.00001H21.429M1.18408 16.5918H21.429M1.18408 1.40817H21.429"
          stroke="white"
          strokeWidth="1.89796"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </button>
      
    </nav>
  );
}

export default NavBar;
