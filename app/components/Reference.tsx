import Image from 'next/image';

export default function Reference() {
  return (
    <div className="container mx-auto my-20 px-4"> {/* Přidáno px-4 pro padding na okrajích */}
      <h1 className="text-modra text-3xl font-semibold mb-8 text-center md:text-left">Reference</h1> {/* Vycentrování nadpisu na menších obrazovkách */}
      <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6"> {/* Změna flex-direction na sloupcový na menších obrazovkách */}
        <div className="flex flex-col items-center w-full md:w-auto"> {/* Přidáno w-full pro zamezení roztahování na menších obrazovkách */}
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-modra"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <Image
            src="/images/ivana-vesela.webp"
            alt="Ivana Veselá"
            className="rounded-2xl object-cover mt-4 w-24 h-24 md:w-32 md:h-32" // Zvětšení obrázku na větších obrazovkách
            width={128} // Aktualizované šířky a výšky pro optimalizaci načítání
            height={128}
            priority // Přidáno priority pro přednostní načtení obrázku
          />
        </div>
        <div className="text-center md:text-left w-full md:w-auto"> {/* Vycentrování textu na menších obrazovkách, w-full pro zamezení roztahování */}
          <p className="text-gray-700 text-sm md:text-base">
            &quot;Naše škola konečně získala moderní a přehledný rezervační systém, který nám ušetřil spoustu času i starostí. Rodiče si pochvalují jednoduchost a rychlost rezervace, učitelé oceňují přehlednost a organizaci. Systém funguje perfektně a bez jakýchkoliv problémů. Jsme maximálně spokojeni a doporučujeme ho všem školám!&quot;
          </p>
          <p className="mt-4 font-bold text-modra">
            Ivana Veselá
          </p>
          <p className="text-gray-500 text-sm">
            ředitelka ZŠ Letohrad, Komenského 269
          </p>
        </div>
      </div>
    </div>
  );
}