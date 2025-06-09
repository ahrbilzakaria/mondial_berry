import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./global_components/navBar";



export const metadata: Metadata = {
  title: "Mondial Berry",
  description: "Bienvenue sur le site de Mondial Berry, votre destination pour les meilleures baies du monde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
      className="bg-white"
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
