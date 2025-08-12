import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section>
      <footer className="bg-[#F3F5D8] text-black py-5 pb-5 flex justify-center">
        <div className="max-w-[80rem] mx-auto md:px-4  px-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">
            <div className="text-left flex flex-col justify-center gap-4">
              <a className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden w-fit focus:opacity-80 mx-auto" href="#" aria-label="Brand">
                <Link to='/'>
                  <img className='lg:w-28 w-40 md:h-16 h-15' src="/images/home/ICETCSElogo.jpg" alt="LOGO" />
                </Link>
              </a>
              <p className="text-center md:text-base text-sm" >The International Conference on Advances in AI, Business Analytics, and Cloud Systems brings together global experts to share innovations in AI, business analytics, and cloud technologies.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-3">Quick Links</h3>
              <ul className="space-y-2 md:text-base text-sm">
                <li>
                  <a className=" " href="/">Home</a>
                </li>
                <li>
                  <a className=" " href="/about">About the Conference</a>
                </li>
                <li>
                  <a className=" " href="/conference-tracks">Conference Tracks</a>
                </li>
                <li>
                  <a className=" " href="/paper-submission" data-discover="true">Paper Submission</a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-3">Contact</h3>
              <ul className="space-y-2 md:text-base text-sm">
                <li>
                  Email: <a href="mailto:support@acsitconference.com" className="">contact.icacsit@gmail.com</a>
                </li>
                <li>
                  Location: Oslo, Norway
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-black pt-4 md:text-sm text-xs text-center text-black">
            <p>© 2025 ICETCSE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
