import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-25">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.jpeg" alt="Tech Flow Digital" className="h-28 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#ee692c] transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#ee692c] transition-colors">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#ee692c] transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#ee692c] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#ee692c] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#ee692c] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#ee692c] hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;