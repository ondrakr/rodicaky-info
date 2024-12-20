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
    <div className="relative bg-modra text-white mt-24">
      <div className="absolute inset-0">
        <Image
          src="/images/header_image.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14375B] via-[#14375B] to-transparent" style={{ background: 'linear-gradient(81deg, #14375B 9.55%, rgba(20, 55, 91, 0.00))' }}></div>

      <div className="relative z-10 flex flex-col items-start justify-center h-[85vh] md:h-[90vh] px-8 md:px-12 lg:px-16 xl:px-24">
        <h1 className="text-[2.8rem] sm:text-[5rem] md:text-[5rem] lg:text-[5rem] xl:text-[7rem] font-bold leading-[110%]">
          RODIČÁKY<br />BEZ CHAOSU!
        </h1>
        <p className="mt-4 text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2.2rem]">
          Rezervace schůzek na pár kliknutí – rychle, snadno, online!
        </p>
        <button className="mt-6 px-8 py-4 bg-white text-modra rounded-full text-[1rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] font-semibold hover:bg-gray-200 transition" onClick={scrollToInfo}>
          Zjistit více
        </button>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto fill-white"
        >
          <path d="M0,160L48,140.7C96,119,192,77,288,71.3C384,66,480,98,576,124.7C672,151,768,173,864,162C960,151,1056,109,1152,103.3C1248,98,1344,130,1392,146L1440,160L1440,280L1392,280C1344,280,1248,280,1152,280C1056,280,960,280,864,280C768,280,672,280,576,280C480,280,384,280,288,280C192,280,96,280,48,280L0,280Z"></path>
        </svg>
      </div>
    </div>
  );
}
