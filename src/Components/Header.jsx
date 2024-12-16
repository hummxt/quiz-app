import { Link } from "react-router-dom"
import { useState } from "react";
import { FaRegUser, FaLinkedin, FaGithub, FaBars } from "react-icons/fa";
import { LuFile, LuFileUser } from "react-icons/lu";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="container min-w-full h-auto flex flex-col items-center justify-center">

        {/* Desktop Navbar */}
        <header className="w-full h-auto p-6 bg-[rgb(33,33,33)] hidden sm:flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-medium">
            Quiz App
          </Link>
          <div className="social-media hidden sm:flex items-center justify-center gap-4 text-white text-2xl">
            <a href="https://www.linkedin.com/in/hummet/" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/hummxt" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://myportfolio.com/portfolio">
              <LuFileUser className="text-2xl text-" />
            </a>
          </div>
          <Link to="/login">
            <FaRegUser className="text-white text-xl sm:text-2xl hover:text-primary-700 p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700" />
          </Link>
        </header>

        {/* Mobile Navbar */}
        <header className="w-full h-auto p-6 bg-[rgb(33,33,33)] flex sm:hidden items-center justify-between">
          <Link to="/" className="text-white text-xl font-medium">
            Quiz App
          </Link>
          <div className="left flex">
            <Link to="/login" className="flex py-2 px-3 items-center gap-2">
              <FaRegUser className="text-white text-xl sm:text-2xl hover:text-primary-700 p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="text-white text-xl" />
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } w-full sm:hidden bg-[rgb(44,44,44)]`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4 p-4 bg-[rgb(44,44,44)] text-white">
            <li className="py-2 px-3 text-xl">
              My Social Accounts
            </li>
            <li className="py-2 px-3">
              <a href="https://www.linkedin.com/in/hummet/" className="flex items-center gap-2"><FaLinkedin className="text-[#26a3e7] text-xl" />LinkedIn</a>
            </li>
            <li className="py-2 px-3">
              <a href="https://github.com/hummxt" className="flex items-center gap-2"><FaGithub className="text-[#ffffff] text-xl" />Github</a>
            </li>
            <li className="py-2 px-3">
              <a href="https://myportfolio.com/portfolio" className="flex items-center gap-2"><LuFileUser className="text-xl text-teal-500" />My Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header