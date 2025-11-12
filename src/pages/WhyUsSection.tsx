import { motion } from 'framer-motion';
import { GraduationCap, Users, Target, Lightbulb } from 'lucide-react';

export default function WhyUsSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Yuksak sifatli Ta'lim",
      description: "Biz farzandingizning bilim olish jarayonini zamonaviy va samarali metodlar bilan tashkil etamiz, sifatli ta'lim bizning ustuvor vazifamizdir."
    },
    {
      icon: Users,
      title: "Shaxsiy yondashuv",
      description: "Har bir o'quvchi o'z qobiliyatlari va ehtiyojlariga mos ravishda alohida e'tibor oladi, bu ularning shaxsiy rivojlanishiga yordam beradi."
    },
    {
      icon: Target,
      title: "Innovatsion texnologiyalari",
      description: "Darslarimizda yangi ilg'or o'qitish metodlarini qo'llab, o'quvchilarga qiziqarli va samarali ta'lim jarayonini taqdim etamiz."
    },
    {
      icon: Lightbulb,
      title: "Xavfsiz qulay Muhit",
      description: "Farzandingiz bizda o'zini xavfsiz va qulay his qiladi. Biz har tomonlama sog'lom va ijodiy rivojlanish uchun zarur sharoitlarni yaratamiz."
    }
  ];

  const hashtags = [
    { text: "# IT", color: "bg-orange-400", rotation: 5 },
    { text: "# Yurisprudensiya", color: "bg-pink-300", rotation: -8 },
    { text: "# Iqtisod", color: "bg-yellow-300", rotation: 3 },
    { text: "# Tibbiyot", color: "bg-white", rotation: -5 }
  ];

  return (
    <section id="about" className="py-6 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-emerald-500 to-emerald-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00502c]"
            >
              Nega aynan biz?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-lg leading-relaxed"
            >
              Novda School - zamonaviy metodika va tarixbali o'qituvchilar bilan farzandingizning intellektual rivojlanishini ta'minlaydi. Biz nafaqat bilim beramiz, balki farzandingizning kelajagini muvaffaqiyatli qurishiga yordam beramiz.
            </motion.p>

            {/* Image with Hashtags */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-[#2f584e] rounded-3xl p-4 shadow-2xl overflow-hidden">
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
                    alt="Maktab o'quvchilari"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>

                {/* Floating Hashtags */}
                <div className="absolute inset-0 pointer-events-none">
                  {hashtags.map((tag, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0, rotate: 0 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: tag.rotation }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      className={`absolute ${tag.color} px-4 py-2 rounded-full shadow-lg font-semibold text-gray-800 text-sm sm:text-base`}
                      style={{
                        top: index === 0 ? '15%' : index === 1 ? '45%' : index === 2 ? '75%' : '55%',
                        right: index === 0 ? '5%' : index === 1 ? '10%' : index === 2 ? '15%' : '-5%',
                        left: index === 3 ? 'auto' : 'auto'
                      }}
                    >
                      {tag.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-2 sm:space-y-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="flex gap-4 p-4 hover:bg-opacity-40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="shrink-0"
                >
                  <div className="w-16 h-16 bg-lime-300 rounded-2xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-8 h-8 text-gray-800" />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00502c] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}