// "use client";
import { Header } from "@/components/Header";
import "./globals.css";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

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

export const metadata = {
  title: "Wriddhi Hazra",
  description: "Software Engineer based in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body
        className={`${outfit.className} ${machina.variable} overflow-x-hidden relative bg-black min-h-screen h-full w-screen flex flex-col items-center`}
      >
        <div className="space-glow absolute -top-44 left-1/2 -translate-x-1/2 -translate-y-3/4"></div>
        <Header />
        {children}
        <Footer />
        <div className="absolute bottom-0 overflow-hidden w-full h-[200px]">
          <div className="space-glow absolute -bottom-32 left-1/2 -translate-x-1/2 translate-y-full"></div>
        </div>
      </body>
    </html>
  );
}
