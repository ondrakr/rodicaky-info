"use client";

import { useEffect, useState, useRef } from "react";
import Image from 'next/image';

export default function Info() {
  const [inView, setInView] = useState(false);
  const [schoolCount, setSchoolCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [parentCount, setParentCount] = useState(0);

  // Ref pro sledování viditelnosti elementu
  const ref = useRef<HTMLDivElement | null>(null);

  // Funkce pro správné skloňování
  const getWordForm = (count: number, forms: [string, string, string]): string => {
    if (count === 1) return forms[0];
    if (count >= 2 && count <= 4) return forms[1];
    return forms[2];
  };

  useEffect(() => {
    // Vytvoření observeru pro sledování viditelnosti
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true); // Nastavení stavu na true, když prvek je viditelný
          observer.disconnect(); // Ukončíme pozorování, jakmile prvek vidíme
        }
      },
      { threshold: 0.5 } // Prvek je považován za viditelný, pokud je alespoň z 50% na obrazovce
    );

    if (ref.current) {
      observer.observe(ref.current); // Sledování ref prvku
    }

    return () => {
      observer.disconnect(); // Odpojení observeru při unmountu
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const duration = 1000; // 1 sekunda
      const stepTime = 10; // Aktualizace každých 10ms

      // Funkce pro postupné zvyšování čísel
      const increment = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
        let current = 0;
        const incrementStep = Math.ceil(target / (duration / stepTime));
        const interval = setInterval(() => {
          if (current < target) {
            current += incrementStep;
            setter(current);
          } else {
            clearInterval(interval);
          }
        }, stepTime);
      };

      // Všechny počty začnou načítat najednou s časem 1 sekunda
      increment(1, setSchoolCount);
      increment(30, setTeacherCount);
      increment(300, setParentCount);
    }
  }, [inView]);

  return (
    <div className="container md:w-[60%] mx-auto flex flex-col xl:flex-row gap-32 justify-between items-center mt-12 xl:mt-[-6rem]" ref={ref} id="info-component">
      {/* Textová část */}
      <div className="flex flex-col gap-8 text-modra">
        <div className="flex flex-col items-center align-center">
          <p className="text-[4rem] md:text-[5rem] font-bold">{schoolCount}</p>
          <p className="text-lg md:text-2xl whitespace-nowrap">
            {getWordForm(schoolCount, [
              "ZÁKLADNÍ ŠKOLA",
              "ZÁKLADNÍ ŠKOLY",
              "ZÁKLADNÍCH ŠKOL"
            ])}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[4rem] md:text-[5rem] font-bold">{teacherCount}</p>
          <p className="text-lg md:text-2xl whitespace-nowrap">
            {getWordForm(teacherCount, [
              "UČITEL",
              "UČITELÉ",
              "UČITELŮ"
            ])}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[4rem] md:text-[5rem] font-bold">{parentCount}</p>
          <p className="text-lg md:text-2xl whitespace-nowrap">
            {getWordForm(parentCount, [
              "RODIČ",
              "RODIČE",
              "RODIČŮ"
            ])}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-0 mb-24 md:mt-[-10rem] lg:mt-[-13rem] xl:mt-0">
        <div className="w-[100%] h-[100%] md:w-[40rem] md:h-[40rem] lg:w-[50rem] lg:h-[50rem] relative">
        <Image
            src="/images/pc.png"
            alt="PC Image"
            width={500}
            height={500} 
            style={{ width: '100%', height: '100%' }} 
            className="hidden md:flex"
        />
          <iframe
            className="relative md:absolute inset-0
            w-[80vw] aspect-[16/9] top-0 left-0
            md:w-[29.5rem] md:h-[18.45rem] md:top-[10.32rem] md:left-[5.5rem]
            lg:w-[36.8rem] lg:h-[23.1rem] lg:top-[12.9rem] lg:left-[6.9rem]
            "
            src="https://www.youtube.com/embed/gxW0euETTbg?si=AjtyOwhHa8YHF6g5"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
