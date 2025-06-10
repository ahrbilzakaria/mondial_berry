"use client";
import ContactButtonNav from "./contactButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavBar() {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className="flex items-center justify-between px-6 md:py-4 py-2 w-[80%] mx-auto rounded-[3.75rem] bg-white/10   backdrop-blur-[22px] mt-6">
      <img
        src="/WhiteLogo.png"
        alt="Logo Mondial Berry"
        className="h-10 md:h-12 scale-80 md:scale-100"
      />{" "}
      <ul className="gap-4 text-white font-light lg:flex hidden">
        <li>
          <Link
            href="/"
            className={pathName === "/" ? "font-bold text-secondary" : ""}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathName === "/about" ? "font-bold text-secondary" : ""}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={
              pathName === "/products" ? "font-bold text-secondary" : ""
            }
          >
            Gamme
          </Link>
        </li>
        <li>
          <Link
            href="/production"
            className={
              pathName === "/production" ? "font-bold text-secondary" : ""
            }
          >
            Production
          </Link>
        </li>
        <li>
          <Link
            href="/durabilite"
            className={
              pathName === "/durabilite" ? "font-bold text-secondary" : ""
            }
          >
            Durabilité
          </Link>
        </li>
        <li>
          <Link
            href="/daicycle"
            className={
              pathName === "/daicycle" ? "font-bold text-secondary" : ""
            }
          >
            Daicycle
          </Link>
        </li>
      </ul>
      <div className="hidden lg:block">
        <ContactButtonNav />
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
