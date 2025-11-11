import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ChevronDown } from 'lucide-react';

export default function FAQContactSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childClass: ''
  });

  const faqItems = [
    {
      question: "Maktab nechanchi sinfdan qabul qiladi?",
      answer: "Maktabimizga 1-sinfdan 11-sinfgacha bo'lgan o'quvchilarni qabul qilamiz."
    },
    {
      question: "O'quvchilarga ovqat beriladimi?",
      answer: "Ha, maktabimizda o'quvchilar uchun sog'lom va to'yimli ovqatlanish ta'minlangan. Har kuni nonushta, tushlik va kechki ovqat xizmatlari mavjud."
    },
    {
      question: "Maktab qayerda joylashgan?",
      answer: "Maktabimiz Toshkent shahri, Yunusobod tumani, Amir Temur ko'chasi, 107-uyda joylashgan. Qulay transport aloqalari mavjud."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.childClass) {
      console.log('Form submitted:', formData);
      alert('Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.');
      setFormData({ name: '', phone: '', childClass: '' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
            >
              {/* Question Header */}
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ backgroundColor: 'rgba(243, 244, 246, 0.5)' }}
              >
                <span className="text-lg sm:text-xl font-bold text-emerald-700 pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  {openIndex === index ? (
                    <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
                      <X className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                  )}
                </motion.div>
              </motion.button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-200"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Qabulga ro'yxatdan o'ting
          </h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg">
            Biz siz bilan imkon qadar tezda bog'lanamiz va maktabimiz haqida yanada batafsil ma'lumot beramiz.
          </p>

          <div className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ismingiz"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-base sm:text-lg"
              />
            </motion.div>

            {/* Phone Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-3"
            >
              <div className="flex items-center px-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <span className="text-2xl mr-2">🇺🇿</span>
                <span className="text-gray-700 font-semibold">+998</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="00-000-0000"
                className="flex-1 px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-base sm:text-lg"
              />
            </motion.div>

            {/* Class Select */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <select
                name="childClass"
                value={formData.childClass}
                onChange={handleInputChange}
                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-emerald-500 transition-colors duration-300 appearance-none cursor-pointer text-base sm:text-lg"
              >
                <option value="">Farzandingiz nechanchi sinfda o'qiydi?</option>
                <option value="1">1-sinf</option>
                <option value="2">2-sinf</option>
                <option value="3">3-sinf</option>
                <option value="4">4-sinf</option>
                <option value="5">5-sinf</option>
                <option value="6">6-sinf</option>
                <option value="7">7-sinf</option>
                <option value="8">8-sinf</option>
                <option value="9">9-sinf</option>
                <option value="10">10-sinf</option>
                <option value="11">11-sinf</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
            >
              Ariza topshirish
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}