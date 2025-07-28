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
    <div className={`relative bg-gradient-to-br from-sky-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 rounded-2xl p-6 md:p-8 ${className}`} dir="rtl">
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
      <div className="flex justify-center gap-4 mt-6">
        <button ref={prevRef} className="modern-swiper-nav bg-[#22395a] hover:bg-[#1e2e47] text-white w-10 h-10 rounded-full flex items-center justify-center shadow transition disabled:opacity-40" aria-label="قبلی">
          <ChevronRight size={22} />
        </button>
        <button ref={nextRef} className="modern-swiper-nav bg-[#22395a] hover:bg-[#1e2e47] text-white w-10 h-10 rounded-full flex items-center justify-center shadow transition disabled:opacity-40" aria-label="بعدی">
          <ChevronLeft size={22} />
        </button>
      </div>
      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .modern-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .modern-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #22395a;
          opacity: 0.5;
          margin: 0 4px;
          border-radius: 9999px;
          transition: background 0.2s, opacity 0.2s;
        }
        .modern-swiper .swiper-pagination-bullet-active {
          background: #fff;
          opacity: 1;
          box-shadow: 0 2px 8px #22395a99;
        }
      `}</style>
    </div>
  );
} 