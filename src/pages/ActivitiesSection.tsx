import { motion } from 'framer-motion';
import { Dribbble, Sparkles, Map, GraduationCap } from 'lucide-react';

export default function ActivitiesSection() {
    const activities = [
        {
            title: "Sport mashg'ulotlari",
            icon: Dribbble,
            color: "bg-[#00d46f]",
            iconColor: "text-[#00371e]",
            items: [
                "• Futbol",
                "• Basketbol",
                "• Suzish",
                "• Yengil atletika"
            ]
        },
        {
            title: "Ijodiy va ijtimoiy tadbirlar",
            icon: Sparkles,
            color: "bg-purple-500",
            iconColor: "text-purple-900",
            items: [
                "• Xayriya aksiyalari",
                "• Teatr va drama klubi",
                "• Madaniy tadbirlar",
                "• Eko tadbirlar"
            ]
        },
        {
            title: "Madaniy va o'quv sayohatlar",
            icon: Map,
            color: "bg-gradient-to-br from-blue-300/80 to-blue-400/80",
            iconColor: "text-blue-900",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
            items: [
                "• Muzeylarga sayohatlar",
                "• Tabiat bog'lari va ilmiy markazlar",
                "• Tarixiy joylarga ekskursiyalar"
            ]
        },
        {
            title: "Madaniy va o'quv sayohatlar",
            icon: GraduationCap,
            color: "bg-blue-500",
            iconColor: "text-blue-900",
            items: [
                "• Muzeylarga sayohatlar",
                "• Tabiat bog'lari va ilmiy markazlar",
                "• Tarixiy joylarga ekskursiyalar"
            ]
        }
    ];

    return (
        <section className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2f584e] mb-4 sm:mb-6">
                        Darsdan tashqari mashg'ulotlar
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl font-medium text-[#007d5e] leading">
                        Novda School faqatgina akademik bilimlar bilan cheklanib qolmay, o'quvchilarimizning har tomonlama rivojlanishiga yordam beruvchi ko'plab darsdan tashqari mashg'ulotlarni o'tkazamiz. Biz o'quvchilarning qiziqish va qobiliyatlarini rivojlantirishga ko'maklashuvchi turli yo'nalishdagi tadbirlar va mashg'ulotlar tashkillashtiramiz.
                    </p>
                </motion.div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`${activity.color} rounded-4xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden sm:min-h-[340px] lg:min-h-[360px] flex flex-col`}
                        >
                            {/* Background Image for third card */}
                            {activity.image && (
                                <div className="absolute inset-0">
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-300/70 to-blue-400/70"></div>
                                </div>
                            )}

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: 0.3 + index * 0.12,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    className="mb-4 sm:mb-5 lg:mb-6"
                                >
                                    <activity.icon 
                                        className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-16 lg:h-16 ${activity.iconColor}`} 
                                        strokeWidth={2.5} 
                                    />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6 leading-tight">
                                    {activity.title}
                                </h3>

                                {/* Items List */}
                                <ul className="space-y-2 sm:space-y-2.5 lg:space-y-2 grow">
                                    {activity.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: 0.5 + itemIndex * 0.08 
                                            }}
                                            className="text-gray-900 text-base sm:text-base lg:text-xl font-medium leading-relaxed"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover effect overlay */}
                            <motion.div
                                className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-300 rounded-3xl pointer-events-none"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}