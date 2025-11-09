import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import logo from "../images/logo.jpg";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center text-primary font-bold text-2xl"
        >
          <img
            src={logo}
            alt="Anytime Fab logo"
            className="h-10 w-auto mr-3 object-contain"
          />
          <span>Anytime Fab</span>
        </Link>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XIcon className="h-6 w-6 text-primary" />
          ) : (
            <MenuIcon className="h-6 w-6 text-primary" />
          )}
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Services", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-primary hover:text-accent font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4">
            <div className="flex flex-col space-y-4">
              {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-primary hover:text-accent font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
