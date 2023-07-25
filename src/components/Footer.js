import React from "react";
import { Link } from "react-router-dom";
import "./style/Footer.css";
import { FaMobile, FaEnvelopeSquare, FaSearchLocation } from "react-icons/fa";
import logoNav from "../images/logoNav.png";
import Map from "./Map";
import { XMarkIcon } from '@heroicons/react/20/solid'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__components">
        <div className="footer__column">
          <h2>About Us</h2>
          <img src={logoNav} alt={"Footer Logo"} />
          <p>
            Texyto provides you with services in multiple disciplinaries in
            information technology such as Web hosting, learning tutorials,
            Graphic designing and a great portfolio of our work.
          </p>
        </div>
        <div className="footer__column">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <p>
                <FaMobile />: +94 76 647 0618
              </p>
            </li>
            <li>
              <p>
                <FaEnvelopeSquare />: contact@texyto.com
              </p>
            </li>
            <li>
              <p>
                <FaSearchLocation />: Galle, Sri Lanka
              </p>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h2>Quick Links</h2>
          <div className="footer__menu">
            <ul className="footer__listul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="fotter__bar">
        <p>Copyright © 2023 texyto.com. All Rights Reserved.</p>
      </div>
      <div>
        <Map />
      </div> */}
     


    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>



    </div>
  );
};

export default Footer;
