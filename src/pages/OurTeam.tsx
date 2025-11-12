import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  experience: string;
  image: string;
  cardColor: string;
  imagePosition: 'top' | 'bottom';
}

interface TeacherCardProps {
  member: TeamMember;
  index: number;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jahongir Rafikov",
    position: "Direktor",
    experience: "+15 yillik tajriba",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    cardColor: "bg-gradient-to-br from-amber-200 to-amber-300",
    imagePosition: "top"
  },
  {
    id: 2,
    name: "Otifjon Jo'raboyev",
    position: "O'quv ishlari bo'yicha direktor o'rinbosari",
    experience: "+13 yillik tajriba",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    cardColor: "bg-gradient-to-br from-lime-200 to-lime-300",
    imagePosition: "bottom"
  },
  {
    id: 3,
    name: "Isroilov Qodirxon",
    position: "Manaviy va ma'rifiy ishlari bo'yicha direktor o'rinbosari",
    experience: "+2 yillik tajriba",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
    cardColor: "bg-gradient-to-br from-orange-200 to-orange-300",
    imagePosition: "top"
  },
  {
    id: 4,
    name: "Malika Rahimova",
    position: "Ingliz tili o'qituvchisi",
    experience: "+8 yillik tajriba",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    cardColor: "bg-gradient-to-br from-sky-200 to-sky-300",
    imagePosition: "bottom"
  },
  {
    id: 5,
    name: "Rustam Abdullayev",
    position: "Matematika o'qituvchisi",
    experience: "+12 yillik tajriba",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    cardColor: "bg-gradient-to-br from-purple-200 to-purple-300",
    imagePosition: "top"
  },
  {
    id: 6,
    name: "Dilnoza Karimova",
    position: "Kimyo o'qituvchisi",
    experience: "+10 yillik tajriba",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    cardColor: "bg-gradient-to-br from-rose-200 to-rose-300",
    imagePosition: "bottom"
  }
];

const TeacherCard = ({ member, index }: TeacherCardProps) => {
  const isTopImage = member.imagePosition === "top";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] snap-center"
    >
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        transition={{ duration: 0.3 }}
        className={`relative h-[280px] sm:h-[300px] overflow-hidden ${member.cardColor} shadow-xl rounded-4xl cursor-pointer`}
      >
        {/* Rasm Container */}
        <motion.div
          className={`absolute ${isTopImage ? 'top-0 rounded-tr-4xl' : 'bottom-0 rounded-br-4xl'} right-0 w-[45%] h-full overflow-hidden`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </motion.div>

        {/* Ma'lumotlar Container */}
        <div className={`absolute ${isTopImage ? 'bottom-0' : 'top-0'} left-0 w-[60%] h-full flex flex-col justify-center p-6 sm:p-8`}>
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="inline-flex mb-3"
          >
            <div className="bg-white/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/50">
              <span className="text-xs sm:text-sm font-semibold text-gray-900">
                {member.experience}
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight"
          >
            {member.name}
          </motion.h3>

          {/* Position */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="text-sm sm:text-base text-gray-800 font-medium leading-snug"
          >
            {member.position}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const OurTeam = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-800 mb-5"
          >
            Bizning Jamoa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed mb-6"
          >
            Novda School faxatgina akademik bilimlar bilan cheklanib qolmay, o'quvchilarimizning har
            tomonlama rivojlanishiga yordam beruvchi ko'plab darsdan tashqari mashg'ulotlar o'tkazamiz.
            Biz o'quvchilarning qiziqishi va qobiliyatlarini rivojlantirishga ko'maklashuvchi turli yo'nalishdagi
            tadbirlar va mashg'ulotlar tashkil etamiz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:inline-flex"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
            >
              Ma'muriyat
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Cards Container */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          {/* Left Arrow Button */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-2xl rounded-full p-3 sm:p-4 transition-all duration-200 hidden md:flex items-center justify-center border border-gray-200"
              aria-label="Chapga scroll"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </motion.button>
          )}

          {/* Right Arrow Button */}
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-2xl rounded-full p-3 sm:p-4 transition-all duration-200 hidden md:flex items-center justify-center border border-gray-200"
              aria-label="O'ngga scroll"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </motion.button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 lg:gap-8 overflow-x-auto cursor-grab select-none py-6 px-2 snap-x snap-mandatory scroll-smooth"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {teamMembers.map((member, index) => (
              <TeacherCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;