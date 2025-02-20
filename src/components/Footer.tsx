import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.jpeg" alt="Tech Flow Digital" className="h-28 w-auto mb-4" />
            <p className="text-gray-400">
              Création d'applications robustes et conception de maquettes publicitaires
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+229 0162616386" className="flex items-center text-gray-400 hover:text-[#65c5be]">
                <Phone size={20} className="mr-2" />
                +229 01 62616386
              </a>
              <a href="mailto:contact@techflow.digital" className="flex items-center text-gray-400 hover:text-[#65c5be]">
                <Mail size={20} className="mr-2" />
                contact@techflow.digital
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#65c5be]">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#65c5be]">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#65c5be]">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tech Flow Digital. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;