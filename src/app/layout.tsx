import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Background from "@/components/Background";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "Eduardo Maldonado | Desarrollador Senior Odoo & Python",
  description: "Desarrollador Senior Odoo con 6+ años de experiencia. Módulos custom, integraciones API, migraciones y IA aplicada a ERP. Disponible para proyectos freelance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={cn(inter.variable, robotoMono.variable, "font-sans")}>
        <Header />
        <Background />
        <LeftSidebar />
        <RightSidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
