import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="font-neulis text-2xl text-secondary font-bold">
              Dra. Dina Reyes
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#servicios"
              className="text-secondary/80 hover:text-primary transition-colors font-medium"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-secondary/80 hover:text-primary transition-colors font-medium"
            >
              Conóceme
            </a>
            <a
              href="#recursos"
              className="text-secondary/80 hover:text-primary transition-colors font-medium"
            >
              E-books & Tips
            </a>
            <a
              href="#contacto"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md"
            >
              Agenda tu cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 border-t border-secondary/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#servicios"
              className="block px-3 py-2 text-secondary/80 hover:bg-neutral hover:text-primary rounded-md font-medium"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="block px-3 py-2 text-secondary/80 hover:bg-neutral hover:text-primary rounded-md font-medium"
            >
              Conóceme
            </a>
            <a
              href="#recursos"
              className="block px-3 py-2 text-secondary/80 hover:bg-neutral hover:text-primary rounded-md font-medium"
            >
              E-books & Tips
            </a>
            <a
              href="#contacto"
              className="block px-3 py-2 mt-4 text-center bg-primary text-white rounded-full font-medium"
            >
              Agenda tu cita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
