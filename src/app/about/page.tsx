// use SSR for better SEO
import React from "react";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import MotionSection from "@/components/MotionSection";

const page = () => {
  return (
    <main
      className={`h-full w-3/4 flex-1 flex flex-col justify-center items-center gap-10 lg:gap-20`}
    >
      <MotionSection
        id="intro"
        className="flex flex-col lg:flex-row mt-10 w-full bg-dots justify-start items-center gap-16"
      >
        <div
          id="intro-image"
          className="w-fit rounded-full relative before:absolute before:top-1/2 before:left-1/2 
          before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:blur-xl
          before:h-full before:w-full before:bg-violet-600 lg:before:hidden"
        >
          <Image
            priority
            id="hero-image-sm"
            src="/me-website.png"
            alt="Wriddhi Hazra"
            width={200}
            height={200}
            className="flex lg:hidden rounded-full relative"
          />
          <Image
            priority
            id="hero-image-lg"
            src="/me-website.png"
            alt="Wriddhi Hazra"
            width={400}
            height={400}
            className="hidden lg:block rounded-full relative"
          />
        </div>
        <div id="intro-text" className="flex flex-col gap-6">
          <p className="w-full lg:w-fit bg-gradient-to-r from-white to-slate-700 bg-clip-text text-transparent text-sm lg:text-xl font-machina">
            Web App Developer from Kolkata, IN
          </p>
          <h1 className="bg-gradient-to-br from-white to-slate-900 bg-clip-text text-transparent text-4xl lg:text-8xl font-semibold ">
            Wriddhi Hazra
          </h1>
          <p className="font-machina text-justify max-w-xl">
            In a digital realm where code has the power to transcend ordinary
            functionality, I find myself consistently drawn to the craft that
            underlies web development. The synergy between front-end design and
            back-end logic fascinates me, driving me to create web experiences
            that seamlessly merge form and function. With each line of code, I
            strive to craft solutions that not only solve problems but also
            evoke user engagement, ignite intuitive interfaces, and immerse
            users in dynamic digital journeys.
          </p>
        </div>
      </MotionSection>
    </main>
  );
};

export default page;
