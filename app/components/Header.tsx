'use client';

import Image from "next/image";

export default function Header() {

  const scrollToInfo = () => {
    const element = document.getElementById('info-component');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className="relative bg-modra text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/header-rodicaky.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14375B] via-[#14375B] to-transparent" style={{ background: 'linear-gradient(81deg, #14375B 9.55%, rgba(20, 55, 91, 0.00))' }}></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-screen px-8 md:px-12 lg:px-16 xl:px-32 mt-14">
        <h1 className="text-[2.8rem] sm:text-[5rem] md:text-[5rem] lg:text-[5rem] xl:text-[7rem] font-bold leading-[110%] tracking-[0.02em]">
          RODIČÁKY<br />BEZ CHAOSU!
        </h1>
        <p className="mt-4 text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2.2rem]">
          Rezervace schůzek na pár kliknutí – rychle, snadno, online!
        </p>
        <button className="mt-6 px-8 py-4 bg-white text-modra rounded-full text-[1rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] font-semibold hover:bg-gray-200 transition" onClick={scrollToInfo}>
          Zjistit více
        </button>
      </div>

      {/* Rovný spodní okraj */}
      <div className="absolute bottom-0 w-full h-[50px] bg-white"></div>
    </div>
  );
}
