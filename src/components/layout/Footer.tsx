'use client';

import { motion, type Variants } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Phone, 
  Send,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  }
};

export default function Footer() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = () => {
    if (!name || !phone || !grade) {
      alert('Iltimos, barcha maydonlarni to\'ldiring');
      return;
    }
    console.log('Form submitted:', { name, phone, grade });
    alert('Ma\'lumotlaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.');
    // Reset form
    setName('');
    setPhone('');
    setGrade('');
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={footerVariants}
      className="bg-emerald-500 text-white relative overflow-hidden"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Column - Contact Form */}
          <motion.div variants={footerVariants} className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00502c]">
                Biz bilan bog'laning
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Biz siz bilan imkon qadar tezda bog'lanamiz va maktabimiz haqida yanada batafsil ma'lumot beramiz.
              </p>
            </div>

            <div className="space-y-4">
              {/* Name Input */}
              <motion.div 
                whileFocus={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ismingiz"
                  className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-200"
                />
              </motion.div>

              {/* Phone Input */}
              <motion.div 
                whileFocus={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <div className="flex items-center bg-white rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-emerald-600 transition-all duration-200">
                  <span className="flex items-center px-4 py-3.5 sm:py-4 text-gray-700 border-r border-gray-200">
                    <span className="text-lg mr-2">🇺🇿</span>
                    <span className="font-medium">+998</span>
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="00 000 00 00"
                    className="flex-1 px-4 py-3.5 sm:py-4 bg-white text-gray-900 placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </motion.div>

              {/* Grade Select */}
              <motion.div 
                whileFocus={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-5 py-3.5 sm:py-4 rounded-2xl bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-200 pr-12 cursor-pointer"
                >
                  <option value="" disabled>Farzandingiz nechinchi sinfda o'qiydi?</option>
                  {[1,2,3,4,5,6,7,8,9,10,11].map(g => (
                    <option key={g} value={g}>{g}-sinf</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 sm:py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Bog'lanish</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Social Links */}
            <motion.div 
              variants={footerVariants}
              className="flex items-center gap-4 sm:gap-6 pt-4"
            >
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://t.me/novdaschool" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="tel:+998881405555" 
                className="flex items-center gap-2 hover:text-white/80 transition-colors ml-2"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">+998 88 140 55 55</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Address & Map */}
          <motion.div variants={footerVariants} className="space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-white/80">Bizning manzil:</p>
              <p className="text-base sm:text-lg font-semibold text-white">
                Namangan shahar, Mehndost ko'chasi, 38-uy, 160100
              </p>
            </div>

            {/* Real Map Embed */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-64 lg:h-72"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.123456789!2d71.67234567890123!3d40.99876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzU1LjYiTiA3McKwNDAnMjAuNCJF!5e0!3m2!1sen!2suz!4v1234567890123!5m2!1sen!2suz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Novda School Location"
                className="absolute inset-0"
              />
              {/* Map overlay for better visibility */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Brand Section */}
      <div className="bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">N</span>
                </div>
              </div>
              <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">NOVDA SCHOOL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}