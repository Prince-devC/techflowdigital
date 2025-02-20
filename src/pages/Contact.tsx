import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
          'service_6yh86lb',
          'template_cr6jnq4',
          formData,
          'bikYCQ63NI7pHeWVY'
      );

      toast.success('Message envoyé avec succès!');
      setFormData({ user_name: '', user_email: '', message: '' });
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-grow py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-gray-600">
              Nous sommes là pour répondre à toutes vos questions
            </p>
          </div>

          <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6" onSubmit={sendEmail}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom complet
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ee692c] focus:ring focus:ring-[#ee692c] focus:ring-opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ee692c] focus:ring focus:ring-[#ee692c] focus:ring-opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ee692c] focus:ring focus:ring-[#ee692c] focus:ring-opacity-50"
                  ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#ee692c] text-white px-6 py-3 rounded-md hover:bg-[#65c5be] transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="text-[#ee692c] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">contact@techflow.digital</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-[#ee692c] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-[#ee692c] mr-4" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    123 Avenue de la Tech<br />
                    75000 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  );
};

export default Contact;