
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language is English

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

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "es" : "en");
    // In a real application, this would trigger translations across the app
    console.log("Language switched to:", language === "en" ? "Spanish" : "English");
  };

  const navLinks = [
    { name: "Home", path: "/", isHashLink: false },
    { name: "Products", path: "#products", isHashLink: true },
    { name: "Features", path: "#features", isHashLink: true },
    { name: "Pricing", path: "#pricing", isHashLink: true },
    { name: "About", path: "#about", isHashLink: true },
    { name: "Contact", path: "#contact", isHashLink: true },
    { name: "Dashboard", path: "/dashboard", isHashLink: false },
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
            link.isHashLink ? (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-ice-blue transition-all-300 font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-ice-blue transition-all-300 font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-gray-700 hover:text-ice-blue px-3 py-1 rounded-full border border-gray-200 hover:border-ice-blue transition-all-300"
          >
            <Globe size={16} />
            <span>{language === "en" ? "EN" : "ES"}</span>
          </button>
          <a href="#login" className="button-outline">
            Login
          </a>
          <Link to="/dashboard" className="button-secondary">
            Dashboard
          </Link>
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
              link.isHashLink ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-700 hover:text-ice-blue transition-all-300 text-lg font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-ice-blue transition-all-300 text-lg font-medium"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-auto">
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-1 text-gray-700 hover:text-ice-blue p-2 rounded-full border border-gray-200 hover:border-ice-blue transition-all-300"
            >
              <Globe size={16} />
              <span>{language === "en" ? "English" : "Español"}</span>
            </button>
            <a href="#login" className="button-outline text-center">
              Login
            </a>
            <Link to="/dashboard" className="button-secondary text-center">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
