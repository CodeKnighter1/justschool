'use client';

import { motion, type Variants } from 'framer-motion';

const pricingCards = [
  {
    grade: '1-4 sinf',
    price: '2.300.000',
    bgColor: 'bg-white',
    badgeBg: 'bg-orange-500',
    badgeText: 'text-white',
    priceColor: 'text-emerald-600',
    textColor: 'text-gray-600',
    delay: 0.1,
  },
  {
    grade: '5-8 sinf',
    price: '2.500.000',
    bgColor: 'bg-emerald-500',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    priceColor: 'text-white',
    textColor: 'text-white',
    delay: 0.2,
  },
  {
    grade: '9-11 sinf',
    price: '2.700.000',
    bgColor: 'bg-white',
    badgeBg: 'bg-yellow-400',
    badgeText: 'text-gray-900',
    priceColor: 'text-emerald-600',
    textColor: 'text-gray-600',
    delay: 0.3,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

export default function PaymentType() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-left mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#00502c] mb-3 sm:mb-4">
            Ta'lim narxlarimiz
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#2f584e] max-w-4xl leading-relaxed">
            Ushbu narxlar sifatli ta'lim, zamonaviy resurslar, keng qo'llab-quvvatlovchi o'qituvchilar
            jamoasi va sog'lom ovqatlanish dasturini o'z ichiga oladi.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-[#2f584e] max-w-4xl leading-relaxed mt-1">
            Novda School'da o'qish — farzandingiz uchun yorqin kelajak sari eng yaxshi investitsiyadir!
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {pricingCards.map((card) => (
            <motion.div
              key={card.grade}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className={`${card.bgColor} rounded-3xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer relative overflow-hidden`}
            >
              {/* Subtle gradient overlay for middle card */}
              {card.grade === '5-8 sinf' && (
                <div className="absolute inset-0 bg-linear-to-b from-emerald-400/10 to-transparent pointer-events-none" />
              )}

              <div className="relative z-10 space-y-3 sm:space-y-5">
                {/* Badge Section */}
                <div className="flex flex-col items-center space-y-2">
                  <span className={`text-lg font-medium ${card.textColor === 'text-white' ? 'text-emerald-100' : 'text-gray-500'}`}>
                    Oylik
                  </span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className={`px-5 py-2 rounded-full text-base font-semibold ${card.badgeBg} ${card.badgeText}`}
                  >
                    {card.grade}
                  </motion.span>
                </div>

                {/* Price */}
                <div className="text-center space-y-1">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: card.delay + 0.2, duration: 0.5 }}
                    className="flex items-baseline justify-center gap-1"
                  >
                    <span className={`text-4xl sm:text-5xl lg:text-5xl font-bold ${card.priceColor}`}>
                      {card.price} so'm
                    </span>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay + 0.3, duration: 0.5 }}
                  className={`text-base sm:text-sm ${card.textColor} leading-relaxed text-center pt-2`}
                >
                  Narxlar o'quvchilarning ehtiyojlarini hisobga olgan holda belgilangan
                </motion.p>
              </div>

              {/* Decorative element - subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <div className={`w-full h-full rounded-bl-full ${card.grade === '5-8 sinf' ? 'bg-white' : 'bg-emerald-500'}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}