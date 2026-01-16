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
  metadataBase: new URL("https://gracechristianacademy-hn.com"),
  title: {
    default: "Grace Christian Academy | Educación Bilingüe Cristiana",
    template: "%s | Grace Christian Academy",
  },
  description:
    "Institución educativa bilingüe con valores cristianos. Preescolar, primaria, secundaria y bachillerato. Ubicados en Honduras.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: "https://gracechristianacademy-hn.com",
    siteName: "Grace Christian Academy",
    title: "Grace Christian Academy | Educación Bilingüe Cristiana",
    description:
      "Formación integral con alto dominio del inglés y valores cristianos. Preescolar a bachillerato.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Grace Christian Academy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
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
