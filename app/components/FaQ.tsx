'use client';

import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer?: string;
}

interface FaqSection {
    title: string;
    items: FaqItem[];
}

const faqData: FaqSection[] = [
    {
        title: 'Vedení školy',
        items: [
            {
                question: 'Kolik času zabere před každými rodičáky příprava a spuštění rezervací?',
                answer: 'Před úplně prvním spuštění je potřeba do systému nahrát seznam dětí, rodičů, tříd a učitelů, což je možné díky exportu z Bakalářů. Další rodičáky už stačí jen aktualizovat seznam tříd a učitelů.',
            },
            {
                question: 'Co se stane, když rodiči nepřijde email k registraci?',
                answer: "Pokud rodič nenajde email ani ve spamu, má správce možnost zobrazit si jeho heslo, a to mu poslat.",
            },
            {
              question: 'Dostane se do systému někdo jiný než rodič (např. dítě)?',
              answer: "Ne. Email s odkazem na registraci přijde pouze rodičům, kteří jsou v systému evidováni. Děti se do systému dostat nemohou.",
          },
        ],
    },
    {
        title: 'Učitelé',
        items: [
            {
                question: 'Může se mi stát, že budu mít dva rodiče ve stejném čase?',
                answer: 'Ne. Systém je nastavený tak, aby se to nestalo. Rodiče si mohou vybrat pouze z volných termínů.',
            },
            {
                question: 'Mám možnost, nastavit si přestávku mezi jednotlivými rodičáky?',
                answer: 'Ano. Učitel si může zvolit přestávky, například každou hodinu na odskočení na záchod.',
            },
            {
              question: 'Uvidím někde seznam všech rodičů, kteří mi ten den přijdou?',
              answer: 'Ano. Učitel si může na počítači nebo mobilu zobrazit svůj program.',
            },
        ],
    },
    {
        title: 'Rodiče',
        items: [
            {
                question: 'Musím bloudit po škole a hledat v jaké třídě je daný učitel?',
                answer: 'Ne. Ve výpisu zarezervovaných termínů vidíte kromě času také místnost, ve které se schůzka uskuteční.',
            },
            {
                question: 'Je zarezervování termínů složité?',
                answer: 'Ne. Vše trvá pár minut a je to jednoduché. Stačí si vybrat volný termín a potvrdit.',
            },
        ],
    },
];

export default function FaQ() {
    const [openIndex, setOpenIndex] = useState<{ [key: string]: number | null }>({});

    const toggleItem = (sectionTitle: string, index: number) => {
        setOpenIndex(prev => ({
            ...prev,
            [sectionTitle]: prev[sectionTitle] === index ? null : index,
        }));
    };

    return (
        <div className="container mx-auto" id="faq">
            <h1 className="text-modra text-3xl font-semibold mb-8">Odpovídáme na vaše otázky!</h1>
            <div className="space-y-8 mt-12">
                {faqData.map((section) => (
                    <div key={section.title} className='flex flex-col lg:flex-row gap-8 lg:gap-32 text-cerna'>
                        <p className='flex whitespace-nowrap text-xl font-semibold w-40'>{section.title}</p>
                        <div className="space-y-4 w-full">
                            {section.items.map((item, index) => (
                                <div key={index} className="border-b overflow-hidden">
                                    <button
                                        className="w-full text-left py-3 px-4 flex justify-between items-center"
                                        onClick={() => toggleItem(section.title, index)}
                                    >
                                        <span  className={`${openIndex[section.title] === index ? 'font-semibold' : 'font-regular'} text-md`} >
                                        {item.question}
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 transition-transform duration-200 ${openIndex[section.title] === index ? 'rotate-180' : ''
                                                }`}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        className={`p-4 ml-10 mr-24 transition-[max-height,padding] duration-300 text-sm overflow-hidden ${openIndex[section.title] === index ? 'max-h-[500px]' : 'max-h-0 pt-0 pb-0'
                                            }`}
                                    >
                                        {item.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}