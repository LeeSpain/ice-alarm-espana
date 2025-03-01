
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "#products" },
    { name: "Features", path: "#features" },
    { name: "Pricing", path: "#pricing" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-ice-blue">ICE Alarm</span>
          <span className="text-ice-orange font-semibold">España</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-700 hover:text-ice-blue transition-all-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#login" className="button-outline">
            Login
          </a>
          <a href="#register" className="button-secondary">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-ice-blue transition-all-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-50 bg-white flex flex-col p-10 lg:hidden transition-all-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-ice-blue">ICE Alarm</span>
              <span className="text-ice-orange font-semibold">España</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-ice-blue transition-all-300"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 mb-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-ice-blue transition-all-300 text-lg font-medium"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-auto">
            <a href="#login" className="button-outline text-center">
              Login
            </a>
            <a href="#register" className="button-secondary text-center">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
