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
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop"
  ];

  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 to-white pt-24 pb-12 px-4 sm:px-6 lg:px-28">
      <div className="mx-auto">
        <div className="gap-8 lg:gap-8 items-start">
          <div className='flex items-center justify-between gap-4 lg:gap-10'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-emerald-600 leading-tight">
                  Farzandingiz yorqin kelajagini birgalikda quramiz!
                </h1>
                <p className="text-xl sm:text-2xl text-[#053832] font-medium leading-relaxed">
                  Innovatsion metodlar va individual yondashuv bilan farzandingizning iste'dodini rivojlantiramiz.
                </p>
              </motion.div>

              {/* Desktop Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden lg:flex gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-16 py-4 cursor-pointer bg-[#00502c] hover:bg-emerald-800 text-white font-semibold rounded-2xl transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Ariza topshirish
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-24 py-4 cursor-pointer bg-white hover:bg-gray-50 text-emerald-700 font-semibold rounded-2xl border-2 border-gray-300 hover:border-emerald-700 transition-all duration-300"
                >
                  Batafsil
                </motion.button>
              </motion.div>

              {/* Desktop Gallery and Stats */}
              <div className="hidden lg:flex gap-2 items-start">
                {/* Gallery Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex-"
                >
                  <div className="grid grid-cols-7 gap-2">
                    {/* Top row - 3 large images */}
                    <motion.div
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className="col-span-2 relative overflow-hidden rounded-3xl aspect-4/3 shadow-lg"
                    >
                      <img
                        src={galleryImages[0]}
                        alt="Gallery 1"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className="col-span-2 relative overflow-hidden rounded-3xl aspec-4/3 shadow-lg"
                    >
                      <img
                        src={galleryImages[1]}
                        alt="Gallery 2"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className="col-span-2 relative overflow-hidden rounded-3xl aspect-4/3 shadow-lg"
                    >
                      <img
                        src={galleryImages[2]}
                        alt="Gallery 3"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Bottom row - 3 circular images */}
                    <div className="col-span-7 flex gap-2 justify-start mt-2">
                      <motion.div
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        className="w-20 h-20 relative overflow-hidden rounded-full shadow-lg"
                      >
                        <img
                          src={galleryImages[3]}
                          alt="Gallery 4"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        className="w-20 h-20 relative overflow-hidden rounded-full shadow-lg"
                      >
                        <img
                          src={galleryImages[4]}
                          alt="Gallery 5"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1, zIndex: 10 }}
                        className="w-20 h-20 relative overflow-hidden rounded-full shadow-lg"
                      >
                        <img
                          src={galleryImages[5]}
                          alt="Gallery 6"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-emerald-500 rounded-3xl p-4 text-white shadow-xl w-96 shrink-0"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{stats[0].number} {stats[0].label}</h3>
                      <p className="text-emerald-50 text-sm font-medium leading-relaxed">
                        {stats[0].description}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{stats[1].number} {stats[1].label}</h3>
                      <p className="text-emerald-50 text-sm font-medium leading-relaxed">
                        {stats[1].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Main Image Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-[550px] h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=900&fit=crop"
                  alt="Maktab o'quvchilari"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Content */}
          <div className="lg:hidden space-y-6">
            {/* Mobile Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <div className="grid grid-cols-7 gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 relative overflow-hidden rounded-2xl aspect-4/3 shadow-lg"
                >
                  <img
                    src={galleryImages[0]}
                    alt="Gallery 1"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-3 relative overflow-hidden rounded-2xl aspect-4/3 shadow-lg"
                >
                  <img
                    src={galleryImages[1]}
                    alt="Gallery 2"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 relative overflow-hidden rounded-2xl aspect-4/3 shadow-lg"
                >
                  <img
                    src={galleryImages[2]}
                    alt="Gallery 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="flex gap-2 justify-start">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 relative overflow-hidden rounded-full shadow-lg"
                >
                  <img
                    src={galleryImages[3]}
                    alt="Gallery 4"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 relative overflow-hidden rounded-full shadow-lg"
                >
                  <img
                    src={galleryImages[4]}
                    alt="Gallery 5"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 relative overflow-hidden rounded-full shadow-lg"
                >
                  <img
                    src={galleryImages[5]}
                    alt="Gallery 6"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-emerald-500 rounded-3xl p-6 text-white shadow-xl"
            >
              <div className="space-y-5">
                <div>
                  <h3 className="text-3xl font-bold mb-1">{stats[0].number}</h3>
                  <p className="text-base font-semibold mb-1">{stats[0].label}</p>
                  <p className="text-emerald-50 text-sm leading-relaxed">
                    {stats[0].description}
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-1">{stats[1].number}</h3>
                  <p className="text-base font-semibold mb-1">{stats[1].label}</p>
                  <p className="text-emerald-50 text-sm leading-relaxed">
                    {stats[1].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=500&fit=crop"
                alt="Maktab o'quvchilari"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Mobile Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col gap-3"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-emerald-700 text-white font-semibold rounded-full shadow-lg"
              >
                Ariza topshirish
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-white text-emerald-700 font-semibold rounded-full border-2 border-gray-300"
              >
                Batafsil
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}