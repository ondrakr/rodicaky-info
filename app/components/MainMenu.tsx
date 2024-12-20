import { useState, useEffect, RefObject } from 'react';

interface MainMenuProps {
  refs: {
    vyhody: RefObject<HTMLDivElement>;
    reference: RefObject<HTMLDivElement>;
    faq: RefObject<HTMLDivElement>;
    kontakt: RefObject<HTMLDivElement>;
  };
}

const MainMenu: React.FC<MainMenuProps> = ({ refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scrolling and detect direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsNavbarVisible(false);
    } else {
      // Scrolling up
      setIsNavbarVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollTo = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`flex py-6 bg-white fixed w-full shadow-lg top-0 z-50 transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="navbar mx-auto flex justify-between items-center w-full">
        <img src="/logo/logo_schuzky.png" alt="logo" className="h-14 w-auto" />

        {/* Hamburger icon for small screens */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
              fill="#352E2E"
            />
          </svg>
        </button>

        {/* Menu items for large screens */}
        <div className="hidden lg:flex gap-14 items-center text-modra font-medium">
          <button onClick={() => scrollTo(refs.vyhody)}>O nás</button>
          <button onClick={() => scrollTo(refs.reference)}>Reference</button>
          <button onClick={() => scrollTo(refs.faq)}>Nejčastější dotazy</button>
          <button onClick={() => scrollTo(refs.kontakt)}>Kontakt</button>
          <a
            href="mailto:info@rodicaky.cz"
            className="px-8 py-3 bg-modra text-white rounded-full flex items-center gap-4 mx-auto w-fit"
          >
            <span className="text-md font-semibold">Napište nám!</span>
          </a>
        </div>

        {/* Menu for small screens (hamburger menu) */}
        <div
          className={`lg:hidden absolute top-20 left-0 right-0 bg-white p-12 transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <button
            className="block w-full text-left py-3 px-8 border-t border-b text-modra font-medium"
            onClick={() => scrollTo(refs.vyhody)}
          >
            O nás
          </button>
          <button
            className="block w-full text-left py-3 px-8 border-b text-modra font-medium"
            onClick={() => scrollTo(refs.reference)}
          >
            Reference
          </button>
          <button
            className="block w-full text-left py-3 px-8 border-b text-modra font-medium"
            onClick={() => scrollTo(refs.faq)}
          >
            Nejčastější dotazy
          </button>
          <button
            className="block w-full text-left py-3 px-8 border-b text-modra font-medium"
            onClick={() => scrollTo(refs.kontakt)}
          >
            Kontakt
          </button>
          <a
            href="mailto:info@rodicaky.cz"
            className="block py-3 px-8 mt-8 bg-modra text-white rounded-full text-center font-semibold"
          >
            Napište nám!
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
