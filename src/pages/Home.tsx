import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Megaphone } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Tech Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Tech Flow Digital
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              Des solutions numériques innovantes pour votre succès
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-[#ee692c] hover:bg-[#65c5be] text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center mx-auto"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Découvrir nos services
              <ArrowRight className="ml-2" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Code size={40} className="text-[#ee692c] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Développement d'Applications</h3>
              <p className="text-gray-600">
                Création d'applications robustes et performantes adaptées à vos besoins
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Palette size={40} className="text-[#65c5be] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conception de Maquettes</h3>
              <p className="text-gray-600">
                Design créatif et professionnel pour vos projets numériques
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Megaphone size={40} className="text-[#ee692c] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Communication Digitale</h3>
              <p className="text-gray-600">
                Stratégies de communication efficaces sur les réseaux sociaux
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🌐 Sites e-commerce</h3>
              <p className="text-gray-600">Développement de plateformes de vente en ligne</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🖥️ Sites vitrines</h3>
              <p className="text-gray-600">Création de sites pour présenter votre entreprise</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">📦 Sites de gestion de stock</h3>
              <p className="text-gray-600">Solutions pour gérer vos inventaires en ligne</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🗂️ Sites de gestion administrative</h3>
              <p className="text-gray-600">Outils pour optimiser vos processus administratifs</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">💻 Applications desktop</h3>
              <p className="text-gray-600">Développement d'applications pour ordinateurs</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">📱 Applications mobiles</h3>
              <p className="text-gray-600">Création d'applications pour smartphones</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🎨 Création de logos</h3>
              <p className="text-gray-600">Design de logos uniques pour votre marque</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🖋️ Conception de charte graphique</h3>
              <p className="text-gray-600">Élaboration de votre identité visuelle</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">📢 Design de bannières publicitaires</h3>
              <p className="text-gray-600">Création de bannières pour vos campagnes</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">📸 Création de visuels pour réseaux sociaux</h3>
              <p className="text-gray-600">Design de contenus visuels pour vos réseaux</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">✏️ Design d’illustrations</h3>
              <p className="text-gray-600">Illustrations personnalisées pour vos projets</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">🖨️ Création de supports imprimés</h3>
              <p className="text-gray-600">Conception de flyers, brochures, et plus</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;