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
  title: "Eduardo Maldonado | Odoo & Python Developer",
  description: "Portfolio of Eduardo Maldonado, a software developer specializing in Odoo & Python solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
