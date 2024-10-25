import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBuilding, faPhone, faCalendarAlt, faCalendarTimes, faComments, faChevronDown, faUsers, faThumbsUp, faShareAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
// Instalar npm install primeicons
// Desinstalar npm uninstall primeicons
//import 'primeicons/primeicons.css';
import Link from 'next/link';

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const menuItems = [
    { item: 'Home', path: '/', icon: faHome },
    { item: 'About Us', path: '/AboutCompany', icon: faBuilding },
    { item: 'Contact', path: '/ContactSection', icon: faPhone },
    { item: 'Quote', path: '#quote', icon: faCalendarAlt },
    { item: 'Services', path: '/Services', icon: faCalendarTimes },
    { item: 'Feedback', path: '/Feedback', icon: faComments },
    { item: 'Testimonials', path: '/Testimonials', icon: faThumbsUp },
    { item: 'Tips', path: '/Tips', icon: faShareAlt },
    { item: 'Team', path: '/Team', icon: faUsers },
    { item: 'Gallery', path: '/Gallery', icon: faGlobe },
  ];

  const sections = [

    {
      title: 'About Us',
      icon: faBuilding,
      description: 'Learn more about us.',
      path: '/AboutCompany',
    },
    {
      title: 'Services',
      icon: faCalendarTimes,
      description: 'Service List',
      path: '/Services',
    },
    {
      title: 'Contact',
      icon: faPhone,
      description: 'Get in touch with us',
      path: '/ContactSection',
    },
    {
      title: 'Feedback',
      icon: faComments,
      description: 'Leave your feedback',
      path: '/Feedback',
    },
    {
      title: 'Testimonials',
      icon: faThumbsUp,
      description: 'What our customers are saying',
      path: '/Testimonials',
    },
    {
      title: 'Tips',
      icon: faShareAlt,
      description: 'Stay tuned for the best tips.',
      path: '/Tips',
    },
    {
      title: 'Team',
      icon: faUsers,
      description: 'Meet our team.',
      path: '/Team',
    },
    
    {
      title: 'News',
      icon: faEnvelope,
      description: 'Stay updated on the news.',
      path: '/NewsLetter',
    },
    {
      title: 'Gallery',
      icon: faGlobe,
      description: 'Photos of the main services.',
      path: '/Gallery',
    },
  ];

  // Rotas 

  const handleHashLinkClick = (hash: string) => {
    if (hash.startsWith('#')) {
      if (router.pathname === '/') {
        // Se estiver na home, rolar para a seção
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Caso contrário, navega para a home e rola para a seção
        router.push(`/`).then(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      router.push(hash);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('#habilitar-menu') as HTMLElement | null;

      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight - 100) {
          setIsHeroVisible(false);
        } else {
          setIsHeroVisible(true);
        }
      }

      if (router.pathname === '/Schedule' || router.pathname === '/Event' || router.pathname === '/Gallery' || router.pathname === '/Team') {
          setIsHeroVisible(false);
          return;
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.pathname]);

  return (
    <header className={`p-4 fixed top-0 w-full z-50 ${isHeroVisible ? 'bg-transparent text-white hover:text-gray-700' : 'bg-white'}`} >
      <div className="container flex justify-between h-10 mx-auto w-full">
        <div className="hidden md:flex md:h-10 md:w-40  ">
          {/*<a href="/"><Image width={100} height={100} src={"/assets/Navbar/logo-alves-cleaning.png"} alt="Logo da empresa" /></a>*/}
      </div>
        <div className="hidden lg:flex items-center space-x-3 text-lg">
          <Link href="/" className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link href="/QuoteSection" className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2" onClick={() => handleHashLinkClick('#FormQuote')}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Quote</span>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button onClick={handleDropdownToggle} className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
              <span>Sections</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-white shadow-lg rounded-md z-50">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {sections.map((section) => (
                    <Link key={section.title} href={section.path} className="flex items-start space-x-3 p-2 hover:bg-gray-100 rounded-md" onClick={() => handleHashLinkClick(section.path)}>
                      <div className="bg-gray-200 p-2 rounded-md w-10 h-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={section.icon} className="text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold">{section.title}</div>
                        <div className="text-sm text-gray-600">{section.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
        <div className="hidden lg:flex items-center">
          <a href="tel:+5511999999999" className="px-4 py-2 bg-quinta text-white rounded-md">Contato +(980) 273-9078</a>
        </div>
        <button onClick={toggleMobileMenu} className="lg:hidden p-4 text-gray-800">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 z-40 flex flex-col lg:hidden">
          <button onClick={toggleMobileMenu} className="self-end text-gray-800 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className='text-white'/>
            </svg>
          </button>

          <ul className="flex flex-col items-start space-y-2 px-3">
            {menuItems.map((menuItem) => (
              <li key={menuItem.item} className="w-full border-b border-white last:border-none">
                <Link href={menuItem.path} className="text-md text-white flex items-center space-x-3 py-3" onClick={() => {handleHashLinkClick(menuItem.path); setIsMobileMenuOpen(false)
                }}>
                  <FontAwesomeIcon icon={menuItem.icon} />
                  <span>{menuItem.item}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/*<div className="mt-auto p-5 w-full md:flex m:justify-center hidden">
            <Image width={100} height={100} src={"/assets/Navbar/logo-alves-cleaning.png"} alt="Logo da empresa" className="w-44 h-auto hidden md:flex" />
          </div>*/}
        </div>
      )}
    </header>
  );
}
