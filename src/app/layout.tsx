// "use client";
import "./globals.css";
import { Header } from "@/components/Header";
import Head from "next/head";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react";

const machina = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMachina-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMachina-Ultrabold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-machina",
});

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wriddhi Hazra",
  description: "Software Engineer based in India.",
  openGraph: {
    title: "Wriddhi Hazra",
    description: "Software Engineer based in India.",
  },
};

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wriddhi Hazra",
  alternateName: "Wriddhi",
  url: "https://www.wriddhi.com/",
  image: "https://www.wriddhi.com/me-website.png",
  sameAs: ["https://www.linkedin.com/in/wriddhi-hazra/"],
};

const CustomHead = () => (
  <>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <link rel="canonical" href="https://www.wriddhi.com/" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </Head>
  </>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <CustomHead />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />
      <body
        className={`${outfit.className} ${machina.variable} overflow-x-hidden relative bg-black min-h-screen h-full w-screen flex flex-col items-center`}
      >
        <div className="space-glow absolute -top-44 left-1/2 -translate-x-1/2 -translate-y-3/4"></div>
        <Header />
        {children}
        <Analytics />
        <Footer />
        <div className="absolute bottom-0 overflow-hidden w-full h-[200px]">
          <div className="space-glow absolute -bottom-32 left-1/2 -translate-x-1/2 translate-y-full"></div>
        </div>
      </body>
    </html>
  );
}
