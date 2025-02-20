import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">À propos de Tech Flow Digital</h1>
            <p className="text-gray-600 mb-8">
              Tech Flow Digital est une entreprise spécialisée dans la création d'applications
              robustes et puissantes, ainsi que dans la conception de maquettes et d'affiches
              publicitaires pour une communication efficace sur les réseaux sociaux.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="text-[#ee692c] mr-3" />
                <span>Solutions technologiques innovantes</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#ee692c] mr-3" />
                <span>Expertise en développement d'applications</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#ee692c] mr-3" />
                <span>Design créatif et professionnel</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[#ee692c] mr-3" />
                <span>Communication digitale stratégique</span>
              </div>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Notre équipe"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;