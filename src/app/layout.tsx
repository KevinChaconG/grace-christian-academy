import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./Componentes/NavBar";
import BootstrapClient from "./Componentes/bootstrap.client";
import Footer from "./Componentes/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grace Christian Academy",
  description: "Educación de excelencia que transforma vidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapClient></BootstrapClient>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>

      </body>
    </html>
  );
}
