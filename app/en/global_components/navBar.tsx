"use client";
import ContactButtonNav from "./contactButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { LanguageButton } from "./languageButton";

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
            href="/en/"
            className={pathName === "/en" ? "font-bold text-secondary" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/en/about"
            className={
              pathName === "/en/about" ? "font-bold text-secondary" : ""
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/en/gamme"
            className={
              pathName === "/en/gamme" ? "font-bold text-secondary" : ""
            }
          >
            Range
          </Link>
        </li>
        <li>
          <Link
            href="/en/production"
            className={
              pathName === "/en/production" ? "font-bold text-secondary" : ""
            }
          >
            Production
          </Link>
        </li>
        <li>
          <Link
            href="/en/durabilite"
            className={
              pathName === "/en/durabilite" ? "font-bold text-secondary" : ""
            }
          >
            Sustainability
          </Link>
        </li>
        <li>
          <Link
            href="/en/experience"
            className={
              pathName === "/en/experience" ? "font-bold text-secondary" : ""
            }
          >
            Experience
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex items-center gap-2 ">
        <LanguageButton />
        <ContactButtonNav />
      </div>
      <div className="lg:hidden flex items-center gap-3">
        <LanguageButton />

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
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95  rounded-4xl transform transition-all duration-400 ease-in-out shadow-2xl ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4  p-6">
          <li>
            <Link
              href="/en"
              className={`text-primary text-lg ${
                pathName === "/en" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/en/about"
              className={`text-primary text-lg ${
                pathName === "/en/about" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/en/gamme"
              className={`text-primary text-lg ${
                pathName === "/en/gamme" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Range
            </Link>
          </li>
          <li>
            <Link
              href="/en/production"
              className={`text-primary text-lg ${
                pathName === "/en/production" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Production
            </Link>
          </li>
          <li>
            <Link
              href="/en/durabilite"
              className={`text-primary text-lg ${
                pathName === "/en/durabilite" ? "font-bold text-secondary" : ""
              }`}
              onClick={() => setShow(false)}
            >
              Sustainability
            </Link>
          </li>
          <li>
            <Link
              href="/en/daicycle"
              className={`text-primary text-lg ${
                pathName === "/en/daicycle" ? "font-bold text-secondary" : ""
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
