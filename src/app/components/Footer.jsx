'use client'
import { IconContext } from 'react-icons';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
      <div className="container pt-9">
        {/* Social media icons container */}
        <div className="mb-6 flex justify-center space-x-2">
          <IconContext.Provider value={{ color: "#9186b8", size: "2em" }}>
            
            <a href="#!" type="button" className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900" data-twe-ripple-init>
              <FaFacebook />
            </a>
            <a href="#!" type="button" className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900" data-twe-ripple-init>
              <FaInstagram />
            </a>
             
            <a href="#!" type="button" className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900" data-twe-ripple-init>
              <FaYoutube />
            </a>
          </IconContext.Provider>
        </div>
      </div>
      {/* Copyright section */}
      <div className="w-full font-sans text-[#493f6d] bg-black/5 p-4 text-center">
        © 2023 Copyright:
        <a href="https://tw-elements.com/"> Solo</a>
      </div>
    </footer>
  );
}

export default Footer;
