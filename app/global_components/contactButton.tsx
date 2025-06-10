import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactButtonNav() {
  return (
    <Link
      href="/contact"
      className="text-white px-4 py-3 rounded-4xl bg-secondary text-[1.125rem] font-medium  "
    >
      Contactez-nous
    </Link>
  );
}

export function ContactButton() {
  return (
    <Link
      href="/contact"
      className="flex gap-4 overflow-hidden rounded-4xl items-center bg-accent px-4 py-2 tracking-wide md:text-2xl text-lg relative border-white/50 border-1"
    >
      Contactez-nous
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
      href="/products"
      className="flex gap-4  overflow-hidden rounded-4xl items-center bg-secondary/25 px-4 py-2 md:text-2xl text-lg relative tracking-wide border-white/50 border-1"
    >
      Voir notre gamme
      <div className="text-secondary p-1 md:p-2 rounded-4xl bg-white">
        <ArrowRight className="-rotate-45 scale-75 md:scale-100"></ArrowRight>
      </div>
    </Link>
  );
}
