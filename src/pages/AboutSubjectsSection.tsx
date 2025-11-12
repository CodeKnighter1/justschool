import { motion } from 'framer-motion';
import { ChevronRightIcon, Sparkles } from 'lucide-react';

export default function AboutSubjectsSection() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=300&fit=crop"
  ];

  const languages = [
    { name: "Ingliz tili", color: "bg-purple-300" },
    { name: "Matematika", color: "bg-yellow-300" }
  ];

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-2 lg:p-5 md:w-[800px] border-4 border-gray-800 shadow-lg order-2 lg:order-1"
          >
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
              Novda School haqida
            </h2>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              Novda School – zamonaviy va innovatsion ta'lim yondashuviga ega bo‘lgan hususiy maktab. Bizning maqsadimiz – har bir o‘quvchiga o‘z salohiyatini to‘liq ochib berishda ko‘maklashish va ularni kelajakdagi muvaffaqiyatli hayotga tayyorlashdir. Maktabimizda tajribali pedagoglar va zamonaviy texnologiyalar orqali sifatli ta'lim berish yo‘lga qo‘yilgan. Shaxsiy rivojlanishga katta e'tibor qaratilib, o‘quvchilarimizga bilim olish jarayoni qiziqarli va samarali tarzda tashkil etilgan.
            </p>
          </motion.div>

          {/* Right - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-2 sm:gap-4 order-1 lg:order-2"
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={img}
                  alt={`Maktab ${index + 1}`}
                  className="w-64 h-32 sm:h-32 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Subjects Section */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Left - School Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-emerald-500 rounded-3xl p-4 shadow-xl relative overflow-hidden h-full flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=500&fit=crop"
                  alt="Maktab binosining ichki ko'rinishi"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </motion.div>

              {/* Decorative Icon */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-6 left-6 w-16 h-16 bg-lime-300 rounded-full flex items-center justify-center shadow-lg z-20"
              >
                <Sparkles className="w-8 h-8 text-gray-800" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Subjects Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-3 lg:p-5 max-w-4xl border-3 border-[#00502c] shadow-lg space-y-6"
          >
            {/* Header with Arrow */}
            <div className="flex items-start justify-between">
              <h2 className="text-2xl lg:text-4xl font-bold text-[#00502c]">
                Chuqurlashtirilgan fanlar
              </h2>
              <motion.div
                whileHover={{ scale: 1.2, x: 5 }}
                className="w-14 h-10 bg-[#00502c] rounded-2xl flex items-center justify-center cursor-pointer"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Language Tags */}
            <div className="flex flex-col gap-3">
              {languages.map((lang, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`${lang.color} px-5 py-2 rounded-t-2xl rounded-bl-2xl font-semibold text-gray-800 text-sm shadow-md`}
                >
                  {lang.name}
                </motion.span>
              ))}
            </div>

            {/* Ta'lim tili */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#00502c]">Ta'lim tili</h3>
              <p className="text-gray-900 font-medium leading-relaxed">
                Maktabimizda asosiy ta'lim tili – <span className="font-semibold text-emerald-600">O'zbek tili</span>. 
                Qo'shimcha ravishda <span className="font-semibold">Ingliz</span> va <span className="font-semibold">Rus tillari</span> chuqur o'rganiladi. Bu farzandingizning xalqaro miqyosda raqobatbardosh bo'lishiga ko'mak beradi.
              </p>
            </div>

            {/* Yosh guruhlari */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#00502c]">Yosh guruhlari</h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-orange-400 px-5 py-2 rounded-full font-semibold text-white text-base shadow-md"
              >
                1-11 sinf
              </motion.div>
              <p className="text-gray-900 font-medium leading-relaxed mt-2">
                Har bir sinfda o'quvchilarning yoshiga va bilim darajasiga mos dasturlar ishlab chiqilgan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}