"use client";

import React, { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Raleway, Lato } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin-ext"],
});

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["100", "300", "400", "700", "900"],
});

interface ResumeProps {
  dark?: boolean;
}

const Resume = forwardRef<HTMLElement, ResumeProps>((props, ref) => {
  return (
    <main
      id="resume"
      className={`${lato.className} w-full lg:w-[8.3in] lg:h-[11.7in] overflow-hidden bg-black shadow-2xl shadow-purple-700/50 text-slate-300`}
      ref={ref}
    >
      <section className="w-full py-3 flex flex-col justify-start items-center">
        <text className={`${raleway.className} ml-auto text-xs mr-6 text-slate-600`}>Last updated on 9th September, 2023</text>
        <h1 className="text-4xl">
          <span className="text-slate-600 font-light">Wriddhi</span>
          <span className="ml-2">Hazra</span>
        </h1>
        <a
          className={`${raleway.className} font-semibold text-slate-600`}
          href="https://www.wriddhi.com"
          target="_blank"
        >
          wriddhi.com
        </a>
        <div className="flex">
          <div className="px-6 border-black border-solid border-r">
            <span className="font-bold">Email: </span>
            <a
              target="_blank"
              className={`${raleway.className} text-slate-600 font-light`}
              href="mailto:wriddhihazra@gmail.com"
            >
              wriddhihazra@gmail.com
            </a>
          </div>
          <div className="px-6 border-black border-solid border-r">
            <span className="font-bold">Phone: </span>
            <a
              target="_blank"
              className={`${raleway.className} text-slate-600 font-light`}
              href="tel:+919830075679"
            >
              9830075679
            </a>
          </div>
          <div className="px-6">
            <span className="font-bold">Linkedin: </span>
            <a
              className={`${raleway.className} text-slate-600 font-light`}
              target="_blank"
              href="http://www.linkedin.com/in/wriddhi-hazra"
            >
              wriddhi-hazra
            </a>
          </div>
        </div>
      </section>
      <hr className="border border-solid border-slate-700" />
      <section className="w-full h-[88%] p-6 gap-6 grid grid-cols-[1fr_1.5fr]">
        <div className=" p-2 w-full h-full flex flex-col justify-start items-start gap-2 divide-y-2">
          <div>
            <h2 className={raleway.className}>EDUCATION</h2>
            <h3 className="font-bold">JIS UNIVERSITY</h3>
            <p className={`${raleway.className} text-slate-600 text-sm`}>B.TECH. IN COMPUTER SCIENCE ENGINEERING</p>
            <span className={`${raleway.className} text-slate-600 text-sm`}>{`(2020 - PRESENT)`}</span>
          </div>
        </div>
        <div className="outline outline-1 w-full h-full flex flex-col justify-start items-start gap-2 divide-y-2">

        </div>
      </section>
    </main>
  );
});

Resume.displayName = "Resume";

const ResumePrinter = () => {
  const resumeRef = useRef<HTMLElement>(null);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <section className="w-full h-full flex flex-col my-20 justify-center items-center">
      <Resume ref={resumeRef} />
      <button onClick={handlePrint} className="bg-white font-bold text-black text-2xl p-2">Print</button>
    </section>
  );
};

export default ResumePrinter;
