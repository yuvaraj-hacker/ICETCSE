import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

export default function Main() {


  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <div  className='flex flex-col justify-between'>
        <div ref={headerRef} className='fixed top-0 w-full z-50'>
          <Header />
        </div>
        <main ref={mainRef} style={{ marginTop: `${headerHeight}px` }}>
          <Outlet />
        </main>
        <Footer />
      </div >
    </>
  )
}
