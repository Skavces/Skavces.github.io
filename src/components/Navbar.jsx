import { useState, useEffect } from "react";
import { Menu, X, Terminal, Circle } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id"));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]);

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "HOME", id: "home", path: "/" },
    { name: "ABOUT", id: "about", path: "/about" },
    { name: "PROJECTS", id: "projects", path: "/projects" },
    { name: "CONTACT", id: "contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded p-2 group-hover:border-teal-800/50 transition-colors">
                <Terminal className="w-5 h-5 text-teal-400" />
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold text-white font-mono">
                SELİM_KAVAKLIÇEŞME
              </span>
              <span className="text-xs text-gray-500 font-mono">
                ~/backend-developer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {/* Terminal-style menu */}
            <div className="bg-gray-950/80 border border-gray-800 rounded-lg px-1 py-1 flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-xs font-mono font-medium transition-all duration-300 rounded ${
                    activeSection === item.id
                      ? "bg-gray-900 text-teal-400"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-900/50"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {activeSection === item.id && (
                      <Circle className="w-1.5 h-1.5 fill-teal-400 text-teal-400" />
                    )}
                    <span>{item.name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 bg-gray-950 border border-gray-800 rounded hover:border-teal-800/50 text-gray-400 hover:text-teal-400 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-2">
            {/* Terminal Header */}
            <div className="flex items-center space-x-2 px-3 py-2 border-b border-gray-800 mb-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span className="text-xs text-gray-500 font-mono">NAVIGATION</span>
            </div>

            {/* Menu Items */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-mono font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gray-900 text-teal-400 border border-teal-800/50"
                    : "text-gray-400 hover:bg-gray-900 hover:text-gray-300 border border-transparent"
                }`}
              >
                <span className="text-teal-400">$</span>
                <span className="flex-1 text-left">{item.name}</span>
                {activeSection === item.id && (
                  <Circle className="w-1.5 h-1.5 fill-teal-400 text-teal-400" />
                )}
              </button>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
}