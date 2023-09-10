import Skills from "@/components/Skills";
import Image from "next/image";
import MotionSection from "@/components/MotionSection";

export default function Home() {
  return (
    <main
      className={`h-full w-full lg:px-20 flex-1 flex flex-col justify-start items-center gap-10 lg:gap-20`}
    >
      {/* <iframe src="https://facein-delta.vercel.app/" height={800} width={450} className="scale-75 rounded-box outline outline-1" /> */}
      <MotionSection className="mt-20 lg:mt-32 flex flex-col-reverse lg:flex-row justify-between items-center gap-16">
        <div
          id="hero-text-container"
          className="flex-1 text-center lg:text-start"
        >
          <h1 className="bg-gradient-to-br from-white to-slate-900 bg-clip-text text-transparent text-5xl lg:text-9xl font-semibold ">
            Wriddhi Hazra
          </h1>
          <p className="w-full lg:w-fit bg-gradient-to-r from-white to-slate-800 bg-clip-text text-transparent text-base lg:text-xl font-machina">
            Web App Developer from Kolkata, IN
          </p>
        </div>
        <div
          id="hero-image-container"
          className="flex-1 w-full h-full grid place-items-center relative"
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
            className="hidden lg:flex rounded-full relative"
          />
          <span
            id="online"
            className="absolute -bottom-2 translate-y-full pl-8 pr-4 rounded-3xl bg-black outline outline-[#9742ff] text-[#9742ff]"
          >
            Online
          </span>
        </div>
      </MotionSection>
      <MotionSection className="lg:my-20 ">
        <Skills />
      </MotionSection>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <MotionSection delay={index/2} className="text-justify lg:text-3xl" key={index}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            incidunt totam itaque minima laboriosam cum excepturi ea non, unde
            labore ab quis, nulla sequi ut nisi aperiam placeat ipsam.
            Praesentium eum officiis sit in deleniti quos provident culpa
            accusantium dicta corporis rerum totam sunt ad ratione perspiciatis
            placeat quae tempora sint ab incidunt molestias, pariatur ut.
            Minima, expedita consequatur eos porro rerum veritatis debitis
            itaque tenetur? Iusto tempora delectus beatae ab. Voluptate
            obcaecati amet molestias odit, maxime unde. Assumenda dolor atque
            magnam nostrum. Tempora voluptatibus, alias, quisquam, similique ad
            modi molestias minima maiores harum officiis pariatur quia atque at
            iste!
          </MotionSection>
        ))}
    </main>
  );
}
