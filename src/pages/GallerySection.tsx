import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  // Mock data - kelajakda API dan keladi
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=800&fit=crop",
      alt: "Maktab kirish qismi"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=800&fit=crop",
      alt: "Kutish xonasi"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=900&fit=crop",
      alt: "Koridor"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=700&fit=crop",
      alt: "Sinf xonasi"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=700&fit=crop",
      alt: "Kompyuter sinfi"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=800&fit=crop",
      alt: "Sinf"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=900&fit=crop",
      alt: "Sport zali"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=800&fit=crop",
      alt: "Teatr zali"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=700&fit=crop",
      alt: "O'quvchilar"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=700&fit=crop",
      alt: "Dars jarayoni"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop",
      alt: "Jamoa"
    }
  ];

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    // use clientX and bounding rect for accurate coordinates
    const x = e.clientX - container.getBoundingClientRect().left;
    setStartX(x);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.clientX - container.getBoundingClientRect().left;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      const container = scrollContainerRef.current;
      if (container) {
        container.style.cursor = 'grab';
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 400;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  // Alternating [2 vertical, 1 tall] layout, all images half size
  const renderGalleryPattern = () => {
    const result: React.ReactNode[] = [];
    let i = 0;
    let patternIndex = 0;
    const pattern = [2, 1];
    const itemWidth = 220; // px
    const itemHeight = 200; // px

    while (i < galleryImages.length) {
      const size = pattern[patternIndex % pattern.length];
      if (size === 2) {
        // Two images stacked vertically
        const top = galleryImages[i];
        const bottom = galleryImages[i + 1];
        result.push(
          <div key={`col-2-${i}`} className="flex flex-col gap-4 shrink-0 items-center" style={{width: `${itemWidth}px`, height: `${itemHeight * 2 + 16}px`}}>
            {top && (
              <motion.div
                key={top.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl shadow-lg w-full"
                style={{height: `${itemHeight}px`}}
              >
                <img src={top.url} alt={top.alt} className="w-full h-full object-cover" />
              </motion.div>
            )}
            {bottom && (
              <motion.div
                key={bottom.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl shadow-lg w-full"
                style={{height: `${itemHeight}px`}}
              >
                <img src={bottom.url} alt={bottom.alt} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </div>
        );
        i += 2;
      } else {
        // One tall image
        const img = galleryImages[i];
        result.push(
          <motion.div
            key={`col-1-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl shadow-lg shrink-0"
            style={{width: `${itemWidth}px`, height: `${itemHeight * 2 + 16}px`}}
          >
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
          </motion.div>
        );
        i += 1;
      }
      patternIndex++;
    }
    return result;
  };

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white overflow-y-hidden overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Gallery Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab select-none pb-4 px-2 scroll-smooth"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
              {renderGalleryPattern()}
          </div>
          </div>
        </div>
    </section>
  );
}