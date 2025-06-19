"use client";
import ContactButtonNav from "./contactButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 md:py-4 py-2 w-[80%] mx-auto rounded-full bg-white/10 backdrop-blur-[22px] mt-6 relative">
      <Link href="/" className="">
        <img
          src="/WhiteLogo.png"
          alt="Logo Mondial Berry"
          className="h-10 md:h-12 scale-80 md:scale-100"
        />
      </Link>
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
            href="/gamme"
            className={pathName === "/gamme" ? "font-bold text-secondary" : ""}
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
      <button
        className="lg:hidden relative z-50"
        onClick={() => setShow(!show)}
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            show ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white my-1.5 transition-all ${
            show ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            show ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/80 rounded-4xl transform transition-all duration-400 ease-in-out shadow-2xl ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4  p-6">
          <li>
            <Link
              href="/"
              className={`text-primary text-lg ${
                pathName === "/" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-primary text-lg ${
                pathName === "/about" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/gamme"
              className={`text-primary text-lg ${
                pathName === "/gamme" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Gamme
            </Link>
          </li>
          <li>
            <Link
              href="/production"
              className={`text-primary text-lg ${
                pathName === "/production" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Production
            </Link>
          </li>
          <li>
            <Link
              href="/durabilite"
              className={`text-primary text-lg ${
                pathName === "/durabilite" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Durabilité
            </Link>
          </li>
          <li>
            <Link
              href="/daicycle"
              className={`text-primary text-lg ${
                pathName === "/daicycle" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Daicycle
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
