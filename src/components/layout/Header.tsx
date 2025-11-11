import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, Instagram, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Nega aynan biz?", href: "#about" },
    { name: "Ma'muriyat", href: "#team" },
    { name: "Qabul", href: "#admission" },
    { name: "Aloqa", href: "#contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-bold text-lg leading-tight">NOVDA</span>
              <span className="text-gray-900 font-semibold text-sm leading-tight">SCHOOL</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.a
              href="tel:+998901234567"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Phone className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://t.me/novdaschool"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Send className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://instagram.com/novdaschool"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Instagram className="w-5 h-5 text-white" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="pt-4 pb-3 space-y-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ x: 5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex items-center space-x-3 pt-3">
              <motion.a
                href="tel:+998901234567"
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center"
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://t.me/novdaschool"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center"
              >
                <Send className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://instagram.com/novdaschool"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}