import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="my-20 z-20 font-machina flex flex-col justify-center items-center gap-4">
      <Socials className="w-full flex justify-center items-center gap-6 text-2xl" />
      <p className="text-sm lg:text-base">&copy; Wriddhi Hazra. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
