"use client";

import { ReactNode, useRef, Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ModernSliderProps {
  children: ReactNode[];
  slidesPerView?: number;
  className?: string;
}

export default function ModernSlider({ children, slidesPerView = 3, className = '' }: ModernSliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const slides = Children.toArray(children);

  return (
    <div className={`relative bg-white/[0.01] backdrop-blur-md border border-white/[0.02] rounded-2xl p-6 md:p-8 ${className}`} dir="rtl">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ clickable: true }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="modern-swiper"
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {slides.map((child, idx) => (
          <SwiperSlide key={idx} className="flex items-stretch justify-center py-4">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button 
          ref={prevRef} 
          className="modern-swiper-nav w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 disabled:opacity-20" 
          aria-label="قبلی"
        >
          <ChevronRight size={20} />
        </button>
        <button 
          ref={nextRef} 
          className="modern-swiper-nav w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 disabled:opacity-20" 
          aria-label="بعدی"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .modern-swiper .swiper-pagination {
          bottom: 0 !important;
          position: relative !important;
          margin-top: 16px;
        }
        .modern-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.15);
          opacity: 1;
          margin: 0 5px !important;
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .modern-swiper .swiper-pagination-bullet-active {
          background: #a855f7; /* بنفش هماهنگ با تم سایت */
          width: 24px; /* افکت کشیدگی کپسولی مدرن */
          box-shadow: 0 0 12px rgba(168,85,247,0.5);
        }
      `}</style>
    </div>
  );
}