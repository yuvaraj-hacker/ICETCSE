import { Sling as Hamburger } from 'hamburger-react'
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import 'preline/preline';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpe, setIsDropdownOpe] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdow = () => {
    setIsDropdownOpe(!isDropdownOpe);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isHome = location.pathname === '/';


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsDropdownOpe(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* <header className={`relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full  text-sm py-3 shadow-md ${!isHome || scrolled || (isHome && isMobile) ? "bg-white" : " bg-white"} `}>
        <nav className="max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between  ">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
              <Link to='/'>
                <img className='lg:w-30 w-28 md:h-14 h-18' src="/images/home/ICETCSElogo.jpg" alt="LOGO" />
              </Link>
            </a>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle relative flex justify-center items-center gap-x-2 rounded-lg shadow-2xs focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent "
                id="hs-navbar-example-collapse" aria-expanded={menuOpen ? "true" : "false"} aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example" onClick={() => setMenuOpen(!menuOpen)} >
                <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={20} color={menuOpen ? "#fff" : "#fff"} direction="right" />
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>

          <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse"   >
            <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a to='/' onClick={() => setIsDropdownOpen(false)} className=" text-black focus:outline-hidden text-base" href="/" aria-current="page">  Home  </a>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                <button id="hs-navbar-example-dropdown" type="button" onClick={toggleDropdown} className={`hs-dropdown-toggle flex items-center w-full text-black text-base gap-1 cursor-pointer  ${isDropdownOpen ? 'text-black' : ''}`} aria-haspopup="menu" aria-expanded={isDropdownOpen} aria-label="Mega Menu"  >
                  About Us
                  <i className={`fi fi-rr-angle-small-down transform transition-transform text-sm duration-200 mt-1 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} ></i>
                </button>
                <div className="hs-dropdown-menu border border-white sm:mt-0 mt-5 transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-56 z-10   sm:shadow-md rounded-lg p-1 space-y-1 bg-white  before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown" >
                  <a to='/about' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  font-medium  " href="/about">
                    About the Conference
                  </a>
                  <a to='/scope' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black font-medium" href="/scope">
                    Scope of the Conference
                  </a>
                  <a to='/editorial' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  font-medium " href="/editorial">
                    Editorial Board
                  </a>
                </div>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                <button id="hs-navbar-example-dropdown" type="button" onClick={toggleDropdow} className={`hs-dropdown-toggle flex items-center w-full text-black text-base gap-1 cursor-pointer  ${isDropdownOpe ? 'text-blue-400' : ''}`} aria-haspopup="menu" aria-expanded={isDropdownOpe} aria-label="Mega Menu"   >
                  Author Desk's  <i className={`fi fi-rr-angle-small-down transform transition-transform text-sm duration-200 mt-1 ${isDropdownOpe ? 'rotate-180' : 'rotate-0'}`}></i>
                </button>
                <div className="hs-dropdown-menu  border border-white sm:mt-0 mt-5  transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-56 z-10   sm:shadow-md rounded-lg p-1 space-y-1 bg-white before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown" >
                  <a to='/conference-tracks' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black   font-medium" href="/conference-tracks">
                    Conference Tracks
                  </a>
                  <a to='/dates' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black font-medium" href="/dates">
                    Key Dates
                  </a>
                  <a to='/paper-submission' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black font-medium" href="/paper-submission">
                    Paper Submission
                  </a>
                </div>
              </div>
              <a className="text-black text-base sm:pb-0 pb-5" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
   <div>
            Paper Submission
          </div>
        </nav>
      </header> */}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 ">
        <nav className="max-w-[98rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
          <a className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
            <Link to='/'>
              <img className='lg:w-30 w-26 md:h-14 h-14' src="/images/home/ICETCSElogo.jpg" alt="LOGO" />
            </Link>
          </a>
          <div className="sm:order-3 flex items-center gap-x-2">
            <button type="button" className="sm:hidden hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-alignment-collapse" aria-expanded="false" aria-controls="hs-navbar-alignment" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-alignment">
              <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"    >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle</span>
            </button>
            <div className=' md:block hidden'>
              <Link to='paper-submission'>
                <button type="button" className="py-2 px-3 inline-flex items-center cursor-pointer gap-x-2 md:text-sm text-xs font-medium rounded-md  bg-[#FF531A] text-white disabled:pointer-events-none">
                  Paper Submission
                </button>
              </Link>
            </div>
          </div>
          <div id="hs-navbar-alignment" ref={dropdownRef} className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse"  >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a to='/' onClick={() => setIsDropdownOpen(false)} className=" text-black focus:outline-hidden text-base font-medium" href="/" aria-current="page">
                Home
              </a>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                <button id="hs-navbar-example-dropdown" type="button" onClick={toggleDropdown} className={`hs-dropdown-toggle flex items-center w-full font-medium text-black text-base gap-1 cursor-pointer transition-all duration-300 ${isDropdownOpen ? '' : ''}`}
                  aria-haspopup="menu" aria-expanded={isDropdownOpen} aria-label="Mega Menu">
                  About Us
                  <svg className={`w-4 h-4 transition-transform duration-300 flex items-center ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="hs-dropdown-menu border border-white sm:mt-0 mt-5 transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-56 z-10   sm:shadow-md rounded-lg p-1 space-y-1 bg-white  before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown" >
                  <a to='/about' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  font-medium" href="/about">
                    About the Conference
                  </a>
                  <a to='/scope' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black font-medium" href="/scope">
                    Scope of the Conference
                  </a>
                  <a to='/editorial' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  font-medium " href="/editorial">
                    Editorial Board
                  </a>
                </div>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                <button id="hs-navbar-example-dropdown" type="button" onClick={toggleDropdow} className={`hs-dropdown-toggle flex items-center w-full font-medium text-black text-base gap-1 cursor-pointer  ${isDropdownOpe ? '' : ''}`} aria-haspopup="menu" aria-expanded={isDropdownOpe} aria-label="Mega Menu"   >
                  Author Desk's
                  <svg className={`w-4 h-4 transition-transform duration-300 flex items-center ${isDropdownOpe ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="hs-dropdown-menu  border border-white sm:mt-0 mt-5  transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-56 z-10   sm:shadow-md rounded-lg p-1 space-y-1 bg-white before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown" >
                  <a to='/conference-tracks' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black font-medium" href="/conference-tracks">
                    Conference Tracks
                  </a>
                  <a to='/dates' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black font-medium" href="/dates">
                    Key Dates
                  </a>
                  <a to='/paper-submission' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black font-medium" href="/paper-submission">
                    Paper Submission
                  </a>
                </div>
              </div>
              <a className="text-black text-base sm:pb-0 pb-5 font-medium" href="/contact">
                Contact Us
              </a>
              {/* <Link
                to="/work"
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              >
                Work
              </Link> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
