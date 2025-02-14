import React from "react";
import About from "./about";
import LogoSVG from "./icons/logo";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 z-0 flex w-full max-w-md -translate-x-1/2 translate-y-[30%] flex-col items-center gap-4 px-6 text-black/5">
      <About />
      <LogoSVG className="w-full" />
    </footer>
  );
};

export default Footer;
