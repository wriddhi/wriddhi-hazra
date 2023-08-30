import React from "react";

import {
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiGnubash,
  SiPython,
  SiTypescript,
  SiNodedotjs,
  SiBootstrap,
  SiGooglecloud,
  SiDigitalocean,
  SiTailwindcss,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const icons: { [key: string]: JSX.Element } = {
  "HTML 5": <SiHtml5 />,
  "CSS 3": <SiCss3 />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  NextJS: <SiNextdotjs />,
  PHP: <SiPhp />,
  React: <SiReact />,
  Firebase: <SiFirebase />,
  Supabase: <SiSupabase />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  "C++": <SiCplusplus />,
  Java: <FaJava />,
  Bash: <SiGnubash />,
  Python: <SiPython />,
  NodeJs: <SiNodedotjs />,
  Bootstrap: <SiBootstrap />,
  "Digital Ocean": <SiDigitalocean />,
  TailwindCSS: <SiTailwindcss />,
  "Google Cloud Console": <SiGooglecloud />,
  Git: <SiGit />,
} as const;

type SlideProps = {
  name: string;
  icon: JSX.Element;
};
const Slide = ({ name, icon }: SlideProps) => {
  return (
    <div className="slide w-[125px] lg:w-[250px] h-[200px] grid place-items-center text-5xl lg:text-6xl transition-all">
      {icon}
      <span className="title transition-all">{name}</span>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="slider h-[100px] lg:h-[150px] w-screen mx-auto grid place-items-center relative overflow-hidden">
      <div className="slideTrack">
        {Object.entries(icons).map(([name, icon]) => {
          return <Slide name={name} icon={icon} key={name} />;
        })}
      </div>
    </div>
  );
}
