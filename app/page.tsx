// page.tsx
'use client';

import { useRef } from 'react';
import MainMenu from "./components/MainMenu";
import Info from "./components/Info";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Reference from "./components/Reference";
import Contact from "./components/Contact";
import FaQ from "./components/FaQ";

export default function Home() {
  const vyhodyRef = useRef<HTMLDivElement>(null!);
  const referenceRef = useRef<HTMLDivElement>(null!);
  const faqRef = useRef<HTMLDivElement>(null!);
  const kontaktRef = useRef<HTMLDivElement>(null!);

  const refs = {
    vyhody: vyhodyRef,
    reference: referenceRef,
    faq: faqRef,
    kontakt: kontaktRef,
  };

  return (
    <div>
      <MainMenu refs={refs} />
      <Header />
      <div id="vyhody" ref={vyhodyRef}>
        <Info />
        <Questions />
      </div>
      <div id="reference" ref={referenceRef}>
        <Reference />
      </div>
      <div id="faq" ref={faqRef}>
        <FaQ />
      </div>
      <div id="kontakt" ref={kontaktRef}>
        <Contact />
      </div>
    </div>
  );
}