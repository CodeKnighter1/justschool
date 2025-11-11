import { motion } from 'framer-motion';

export default function AdmissionSection() {
  const admissionSteps = [
    {
      number: "1",
      title: "Belgilangan fanlardan imtihon",
      description: "O'quvchilar belgilangan fanlardan imtihon topshirib, bilim darajalarini baholanadi."
    },
    {
      number: "2",
      title: "Suhbat",
      description: "O'quvchi va ota-onalar bilan suhbat o'tkaziladi. Ushbu suhbatda o'quvchining qiziqishlari, maktab qadiriyatlari bilan tanishishdan tashqari, o'quvchining IQ darajasi ham baholanadi."
    },
    {
      number: "3",
      title: "Kerakli hujjatlarni taqdim etish",
      description: "Yuqoridagi bosqichlardan muvaffaqiyatli o'tgan o'quvchilar quyidagi hujjatlarni taqdim etishlari kerak:",
      items: [
        "Tug'ilganlik haqida guvohnoma yoki passport nusxasi",
        "Tibbiy ma'lumotnoma",
        "O'quvchining oldingi maktab baholari"
      ],
      note: "Zarur hujjatlar ro'yxati maktab talablariga qarab o'zgarishi mumkin. To'liq ro'yxatni maktab ma'muriyatidan olish tavsiya etiladi."
    }
  ];

  return (
    <section id="admission" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#00b262]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Admission Process */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#f8f8f8] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#315d56] mb-6 lg:mb-8">
              Qabul jarayoni
            </h2>

            <div className="space-y-2 lg:space-y-4">
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  {/* Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#315d56] rounded-full flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-lg sm:text-xl">{step.number}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#315d56]">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-[18px] text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Items List */}
                    {step.items && (
                      <ul className="space-y-1.5 sm:space-y-2">
                        {step.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + itemIndex * 0.1 }}
                            className="text-sm sm:text-[18px] font-sans text-gray-700 pl-3 sm:pl-4"
                          >
                            • {item}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {/* Note */}
                    {step.note && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-xs sm:text-base text-gray-700 italic bg-gray-200 p-2.5 sm:p-3 rounded-xl mt-3"
                      >
                        <span className="font-bold text-[#315d56]">Eslatma:</span> {step.note}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Future Building */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6 lg:space-y-8"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00502c] leading-tight mb-4 lg:mb-6">
                Kelajak poydevorini birga yarating!
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
                Biz farzandingizga sifatli ta'lim va keng imkoniyatlar dunyosini taqdim etamiz, chunki bugungi ta'lim – ertangi muvaffaqiyatning garovi.
              </p>
            </motion.div>

            {/* Image with Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-gray-900 rounded-3xl p-3 sm:p-4 shadow-2xl overflow-visible">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl h-[300px] overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
                    alt="Novda School kirish"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                {/* Decorative Star/Sparkle */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                  className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 z-10"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-full h-full"
                  >
                    {/* Main star shape */}
                    <svg 
                      viewBox="0 0 100 100" 
                      className="w-full h-full"
                      style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}
                    >
                      {/* Yellow star */}
                      <path
                        d="M50 5 L58 35 L90 35 L64 55 L72 85 L50 65 L28 85 L36 55 L10 35 L42 35 Z"
                        fill="#FCD34D"
                        stroke="#F59E0B"
                        strokeWidth="2"
                      />
                      {/* Inner highlights */}
                      <circle cx="50" cy="30" r="3" fill="#FEF3C7" opacity="0.8" />
                      <circle cx="40" cy="50" r="2" fill="#FEF3C7" opacity="0.6" />
                      <circle cx="60" cy="50" r="2" fill="#FEF3C7" opacity="0.6" />
                    </svg>
                    
                    {/* Sparkle effects */}
                    <motion.div
                      animate={{ 
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full"
                      style={{ boxShadow: '0 0 10px rgba(252, 211, 77, 0.8)' }}
                    />
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.9, 0.3],
                        scale: [0.7, 1.1, 0.7]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      className="absolute bottom-3 left-3 w-2 h-2 bg-yellow-200 rounded-full"
                      style={{ boxShadow: '0 0 8px rgba(254, 240, 138, 0.8)' }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}