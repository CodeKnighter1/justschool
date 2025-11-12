import { motion } from 'framer-motion';

export default function HeroSection() {
  const stats = [
    {
      number: "400+",
      label: "o'quvchilar",
      description: "Hozirda maktabimizda o'qiyotgan o'quvchilar soni"
    },
    {
      number: "2+",
      label: "yillik tajriba",
      description: "Maktabimiz 2023-yil ochilgan va shu vaqtdan beri faoliyat olib boramiz"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop"
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="bg-linear-to-br from-gray-50 via-white to-emerald-50 pt-20 sm:pt-24 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Left Column - Text Content and Gallery */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Heading */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-center lg:text-left"
            >
              <h1 className="text-4xl xl:text-5xl font-bold text-emerald-600 leading-tight">
                Farzandingiz yorqin kelajagini birgalikda quramiz!
              </h1>
              <p className="text-lg xl:text-xl text-gray-700 leading-relaxed">
                Innovatsion metodlar va individual yondashuv bilan farzandingizning iste'dodini rivojlantiramiz.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
              >
                Ariza topshirish
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-3.5 bg-white hover:bg-gray-50 text-emerald-700 font-semibold rounded-full border-2 border-gray-300 hover:border-emerald-600 transition-all duration-300"
              >
                Batafsil
              </motion.button>
            </motion.div>

            {/* Gallery and Stats Container */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4 items-start"
            >
              {/* Gallery Grid - 3 qator: 2+2+3 */}
              <div className="shrink-0">
                <div className="space-y-2.5">
                  {/* Birinchi qator - 2 ta rasm */}
                  <div className="flex gap-2.5">
                    {galleryImages.slice(0, 2).map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.08, zIndex: 10 }}
                        transition={{ duration: 0.3 }}
                        className="w-24 h-24 xl:w-28 xl:h-28 relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Ikkinchi qator - 2 ta rasm */}
                  <div className="flex gap-2.5">
                    {galleryImages.slice(2, 4).map((img, idx) => (
                      <motion.div
                        key={idx + 2}
                        whileHover={{ scale: 1.08, zIndex: 10 }}
                        transition={{ duration: 0.3 }}
                        className="w-24 h-24 xl:w-28 xl:h-28 relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx + 3}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Uchinchi qator - 3 ta kichik rasm */}
                  <div className="flex gap-2.5">
                    {galleryImages.slice(4, 7).map((img, idx) => (
                      <motion.div
                        key={idx + 4}
                        whileHover={{ scale: 1.12, zIndex: 10 }}
                        transition={{ duration: 0.3 }}
                        className="w-18 h-18 xl:w-20 xl:h-20 relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${idx + 5}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 xl:p-8 text-white shadow-xl flex-1 max-w-sm"
              >
                <div className="space-y-6">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                    >
                      <h3 className="text-3xl xl:text-4xl font-bold mb-1">
                        {stat.number}
                      </h3>
                      <p className="text-lg font-semibold mb-2">
                        {stat.label}
                      </p>
                      <p className="text-emerald-50 text-sm leading-relaxed">
                        {stat.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Main Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              transition={{ duration: 0.4 }}
              className="relative w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=900&fit=crop"
                alt="Maktab o'quvchilari"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Heading */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <h1 className="text-2xl sm:text-4xl font-bold text-emerald-600 leading-tight">
              Farzandingiz yorqin kelajagini birgalikda quramiz!
            </h1>
            <p className="text-lg font-sans sm:text-lg text-gray-700 leading-relaxed">
              Innovatsion metodlar va individual yondashuv bilan farzandingizning iste'dodini rivojlantiramiz.
            </p>
          </motion.div>

          {/* Gallery and Stats Row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-2 items-start"
          >
            {/* Gallery - 3 qator: 2+2+3 */}
            <div className="shrink-0">
              <div className="space-y-2">
                {/* Birinchi qator - 2 ta rasm */}
                <div className="flex gap-2">
                  {galleryImages.slice(0, 2).map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-10 sm:w-20 sm:h-20 relative overflow-hidden rounded-full shadow-md"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Ikkinchi qator - 2 ta rasm */}
                <div className="flex gap-2">
                  {galleryImages.slice(2, 4).map((img, idx) => (
                    <motion.div
                      key={idx + 2}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-10 sm:w-20 sm:h-20 relative overflow-hidden rounded-full shadow-md"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx + 3}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Uchinchi qator - 3 ta kichik rasm */}
                <div className="flex gap-2">
                  {galleryImages.slice(4, 7).map((img, idx) => (
                    <motion.div
                      key={idx + 4}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-11 sm:w-13 sm:h-13 relative overflow-hidden rounded-2xl shadow-md"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx + 5}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-3xl px-4 sm:px-5 sm:py-2 text-white shadow-xl shrink-0 w-56 sm:w-56"
            >
              <div className="space-y-1 sm:space-y-4">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl sm:text-2xl font-semibold">{stat.number}{stat.label}</h3>
                    {/* <p className="text-xs sm:text-sm font-semibold mb-1"></p> */}
                    <p className="text-emerald-50 text-xs sm:text-xs">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-4xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=500&fit=crop"
              alt="Maktab o'quvchilari"
              className="w-full h-[180px] md:h-auto object-cover"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-3"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="w-full px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-2xl shadow-lg active:shadow-md transition-all"
            >
              Ariza topshirish
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="w-full px-6 py-4 bg-white text-emerald-700 font-semibold rounded-2xl border-2 border-gray-300 hover:border-emerald-600 transition-all"
            >
              Batafsil
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}