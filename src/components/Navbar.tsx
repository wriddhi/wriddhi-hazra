"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import Socials from "./Socials";

const links = ["about", "projects", "", "resume", "contact"];

const MobileNavbar = () => {

  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    navRef.current?.classList.toggle("-translate-y-full", !open);
  }, [open]);

  return (
    <div className="lg:hidden w-full flex justify-between items-center lowercase">
      <Link href={"/"}>
        <span className="font-bold text-white text-lg">Wriddhi</span>
        <span className="text-white text-lg">Hazra</span>
      </Link>
      <nav
      id="mobile-nav"
        ref={navRef}
        className="overflow-hidden bg-gradient-to-b from-black/50 to-white/10 backdrop-blur-sm w-full h-96 absolute inset-0 -translate-y-full transition-all duration-700 -z-10 rounded-b-3xl"
      >
        <ul className="mt-16 ml-6 text-white">
          {links.map((href, index) => (
            href &&
            <li className="py-3" key={href}>
              <Link href={"/" + href}> {href} </Link>
            </li>
          ))}
        </ul>
        <div className="ml-6 mt-10 w-full">
          <Socials className="w-full flex justify-start items-center gap-6 text-2xl" />
        </div>
      </nav>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {!open ? (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
            color="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            ></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width="24"
            height="24"
            color="white"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
};

const Navbar = () => {
  const router = usePathname();

  return (
    <React.Fragment>
      <nav id="desktop-nav" className="hidden lg:flex mx-auto justify-center w-full">
        <ul className="flex w-full justify-between items-center select-none">
          {links.map((href, index) => (
            <React.Fragment key={`${href}`}>
              <li
                className={`bg-transparent hover:text-white focus-within:text-white border-none outline-none font-machina lowercase font-medium ${
                  router === "/" + href ? "text-white" : "text-slate-300"
                }`}
                onFocus={(e) => {
                  e.currentTarget.classList.add("hover-in");
                  e.currentTarget.classList.remove("hover-out");
                }}
                onBlur={(e) => {
                  e.currentTarget.classList.remove("hover-in");
                  e.currentTarget.classList.add("hover-out");
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add("hover-in");
                  e.currentTarget.classList.remove("hover-out");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove("hover-in");
                  e.currentTarget.classList.add("hover-out");
                }}
              >
                <Link href={"/" + href}>
                  {href ? (
                    href
                  ) : (
                    <>
                      <span className="font-bold text-white text-lg">
                        Wriddhi
                      </span>
                      <span className="text-white text-lg">Hazra</span>
                    </>
                  )}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
      <MobileNavbar />
    </React.Fragment>
  );
};

export default Navbar;
