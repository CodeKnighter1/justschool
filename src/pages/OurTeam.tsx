import { useRef, useState } from 'react';
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
    position: "Manaviy va ma'rifiy bo'yicha direktor o'rinbosari",
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="shrink-0 w-[300px] sm:w-[340px] md:w-[380px] snap-center"
    >
      <div className={`relative h-[280px] overflow-hidden ${member.cardColor} shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl`}>
        {/* Rasm */}
        <motion.div
          className={`absolute ${isTopImage ? 'top-0' : 'bottom-0'} right-0 w-40 sm:w-[180px] h-full overflow-hidden ${isTopImage ? 'rounded-tr-3xl' : 'rounded-br-3xl'}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Ma'lumotlar */}
        <div className={`absolute ${isTopImage ? 'bottom-0' : 'top-0'} left-0 p-5 sm:p-6 pr-[180px] sm:pr-[200px] w-full flex flex-col justify-center h-full`}>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-block mb-3 w-fit">
            <span className="text-xs font-semibold text-gray-800">
              {member.experience}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
            {member.name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-700 leading-snug">
            {member.position}
          </p>
        </div>
      </div>
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
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
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
      const scrollAmount = 400;
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Bizning Jamoa
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Novda School faqatgina akademik bilimlar bilan cheklanib qolmay, o'quvchilarimizning har
            tomonlama rivojlanishiga yordam beruvchi ko'plab darsdan tashqari mashg'ulotlar o'tkazamiz.
            Biz o'quvchilarning qiziqishi va qobiliyatlarini rivojlantirishga ko'maklashuvchi turli yo'nalishdagi
            tadbirlar va mashg'ulotlar tashkil etamiz.
          </p>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-100 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-200 transition-colors duration-300"
            >
              Ma'muriyat
            </motion.button>
          </div>
        </motion.div>

        {/* Cards Container - Draggable with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('left')}
              className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hidden md:flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('right')}
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hidden md:flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto cursor-grab select-none pb-4 snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onScroll={checkScrollPosition}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {teamMembers.map((member, index) => (
              <TeacherCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Gradient Fades */}
          {/* <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent" /> */}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;