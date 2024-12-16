import { useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        if (window.scrollY > 90) {
          setScrolled(true); // Change navbar style after scrolling 90px
        } else {
          setScrolled(false);
        }
      };

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  // Conditional classes
  const navTextClass = isHomePage && !scrolled ? "text-white" : "text-black";
  const navHoverClass = isHomePage && !scrolled ? "hover:text-gray-300" : "hover:text-black";
  const activeLinkClass = isHomePage && !scrolled ? "text-purple-300" : "text-purple-600";
  const buttonStyle = isHomePage && !scrolled
    ? "border-white text-white hover:bg-gray-300 hover:text-black"
    : "border-black text-black hover:bg-black hover:text-white";

  return (
    <nav
      className={`w-full fixed top-0 z-50 font-sans transition-all duration-1000 ease-in-out ${
        isHomePage && !scrolled ? "bg-transparent text-white" : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <div className={`${open ? "hidden" : "flex"} items-center justify-between md:justify-evenly px-6 py-4`}>
        {/* Logo */}
        <NavLink
          to="/"
          className={`flex md:flex-1 items-center gap-3 border-0 justify-center sm:pl-0 md:mx-0 ${navTextClass}`}
        >
          <span className="text-[2.5rem] font-bold md:text-[3rem]">Analyst</span>
          <img
            src={isHomePage && !scrolled ? "icons8-statistic-32 (2).webp" : "icons8-statistic-32 (3).png"}
            className="h-8 md:h-9"
            alt="Logo"
          />
        </NavLink>

        {/* Hamburger Menu */}
        <div className="flex md:hidden items-center">
          <button
            className="block p-2"
            onClick={toggle}
            aria-label="Toggle navigation menu"
          >
            <svg
              className={`w-8 h-8 ${navTextClass}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex md:flex-1 justify-center items-center">
          <ul className={`flex gap-6 mx-10 text-[1.1rem] ${navTextClass}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `underline ${activeLinkClass}` : navHoverClass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `underline ${activeLinkClass}` : navHoverClass
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? `underline ${activeLinkClass}` : navHoverClass
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/certificates"
                className={({ isActive }) =>
                  isActive ? `underline ${activeLinkClass}` : navHoverClass
                }
              >
                Certificates
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex md:flex-1 justify-center">
          <NavLink
            to="/contact"
            className={`ml-6 px-3 py-1.5 border-2 rounded-full text-[1rem] ${buttonStyle}`}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: open ? 1 : 0, x: open ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className={`${open ? "block" : "hidden"} fixed inset-0 bg-white text-black`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="text-[3rem] font-bold">Analyst</span>
            <img src="icons8-statistic-32 (3).png" className="h-9" alt="Logo" />
          </NavLink>
          <button className="p-0" onClick={toggle} aria-label="Close Menu">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-start pl-10 mt-6 text-[1.2rem] font-light space-y-6">
          <li>
            <NavLink
              to="/"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? `underline ${activeLinkClass}` : navHoverClass
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? `underline ${activeLinkClass}` : navHoverClass
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? `underline ${activeLinkClass}` : navHoverClass
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/certificates"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? `underline ${activeLinkClass}` : navHoverClass
              }
            >
              Certificates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggle}
              className={({ isActive }) =>
                isActive ? `underline ${activeLinkClass}` : navHoverClass
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
