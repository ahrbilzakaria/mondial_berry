import { ArrowRight, XCircleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactButtonNav() {
  return (
    <Link
      href="/es/contact"
      className="text-white px-4 py-3 rounded-4xl bg-secondary text-[1.125rem] font-medium  "
    >
      Contáctanos
    </Link>
  );
}

export function ContactButton() {
  return (
    <Link
      href="/es/contact"
      className="flex gap-4 overflow-hidden rounded-4xl items-center bg-accent px-4 py-2 tracking-wide md:text-2xl text-lg relative border-white/50 border-1"
    >
      Contáctanos
      <div className="text-accent p-1 md:p-2 rounded-4xl bg-white">
        <ArrowRight className="scale-75 md:scale-100"></ArrowRight>
      </div>
      <div className="absolute -bottom-15 left-1 ">
        <img src="/Ellipse.png"></img>
      </div>
    </Link>
  );
}

export function VoirNotreGamme() {
  return (
    <Link
      href="/es/gamme"
      className="flex gap-4  overflow-hidden rounded-4xl items-center bg-secondary/25 px-4 py-2 md:text-2xl text-lg relative tracking-wide border-white/50 border-1"
    >
      Ver nuestra gama
      <div className="text-secondary p-1 md:p-2 rounded-4xl bg-white">
        <ArrowRight className="-rotate-45 scale-75 md:scale-100"></ArrowRight>
      </div>
    </Link>
  );
}

export function DecouvrezPlus() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowVideo(true)}
        className="cursor-pointer flex md:gap-4 gap-2 overflow-hidden rounded-4xl items-center bg-secondary px-4 py-2 md:text-2xl text-md relative tracking-wide border-white/50 border-1"
      >
        Descubre más
        <div className="text-secondary p-1 md:p-2 rounded-4xl bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className="scale-75 md:scale-100"
          >
            <mask
              id="mask0_9_1406"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="24"
            >
              <rect x="0.1875" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_9_1406)">
              <path
                d="M8.1875 19V5L19.1875 12L8.1875 19ZM10.1875 15.35L15.4375 12L10.1875 8.65V15.35Z"
                fill="#8A0707"
              />
            </g>
          </svg>
        </div>
        <div className="absolute -bottom-15  ">
          <img src="/Ellipse.png"></img>
        </div>
      </button>
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl mx-4">
            <button
              className="cursor-pointer absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 z-10"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              <XCircleIcon />
            </button>
            <video
              src="/accueil/video/MB-mondial-berre.mp4"
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg bg-black"
            />
          </div>
        </div>
      )}
    </>
  );
}



export function ContactButtonAddon(props: { bg: string; arrow: string }) {
  return (
    <Link
      href="/es/contact"
      className={
        "w-fit h-fit text-white flex gap-4 overflow-hidden rounded-4xl items-center px-4 py-2 tracking-wide md:text-2xl text-md relative border-white/50 border-1" +
        " " +
        props.bg
      }
    >
      Contáctanos
      <div className={" p-1 md:p-2 rounded-4xl bg-white" + " " + props.arrow}>
        <ArrowRight className="scale-75 md:scale-100"></ArrowRight>
      </div>
      <div className="absolute -bottom-15 left-1 ">
        <img src="/Ellipse.png"></img>
      </div>
    </Link>
  );
}
