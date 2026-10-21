import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rosmel Cortez | Programador Web Full-Stack",
  description:
    "Portafolio profesional de Rosmel Cortez, desarrollador web full-stack con experiencia en Next.js, React, Node.js y soluciones asistidas por Inteligencia Artificial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
