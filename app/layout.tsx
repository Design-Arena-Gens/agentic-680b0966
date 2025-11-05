import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "OrgaMaxx Cockpit",
  description:
    "Komplettes Cockpit für KMU zur schnellen Steuerung von Projekten, Aufgaben, Inventar und Organisation mit OrgaMaxx API-Anbindung."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
            <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-primary-300/10 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-[1440px] px-6 pb-16 pt-8 sm:px-10 lg:px-14">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
