import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  return (
    <div>
        <nav className="fixed bg-[#302C42] w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center">
      <img
        src="./images/LogoSekolah.png"
        className="h-12 mr-4 sm:h-16 my-0"
        alt="Logo Sekolah"
      />
      <span className="text-lg sm:text-2xl font-semibold whitespace-nowrap text-[#C0B7E8]">
        SMKN 6 SURAKARTA
      </span>
    </a>
    <div className="flex md:order-2">
      <button
        type="button"
        className="w-full py-2 rounded-[25px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-black p-4 mr-2"
      >
        Hubungi Kami
      </button>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8176AF] md:p-0"
            activeClass="active"
            spy={true}
            offset={-70}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="tentang"
            smooth={true}
            duration={500}
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8176AF] md:p-0"
            activeClass="active"
            spy={true}
            offset={-70}
          >
            Tentang
          </Link>
        </li>
        <li>
          <Link
            to="#proah"
            smooth={true}
            duration={500}
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8176AF] md:p-0"
            activeClass="active"
            spy={true}
            offset={-70}
          >
            Program Keahlian
          </Link>
        </li>
        <li>
          <Link
            to="ppdb"
            smooth={true}
            duration={500}
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8176AF] md:p-0"
            activeClass="active"
            spy={true}
            offset={-70}
          >
            PPDB
          </Link>
        </li>
        <li>
          <Link
            to="kelasindustri"
            smooth={true}
            duration={500}
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8176AF] md:p-0"
            activeClass="active"
            spy={true}
            offset={-70}
          >
            Kelas Industri
          </Link>
        </li>
        <li>
          <Link
            to="news"
            smooth={true}
            duration={500}
            className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#8176AF] md:p-0"
            activeClass="active"
            spy={true}
            offset={-70}
          >
            News
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
