import { ReactNode, useRef, Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomSwiperProps {
  children: ReactNode[];
  slidesPerView?: number;
  className?: string;
}

export default function CustomSwiper({ children, slidesPerView = 1, className = '' }: CustomSwiperProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const slides = Children.toArray(children);

  return (
    <div className={`relative rounded-2xl shadow-xl bg-white dark:bg-slate-800 p-4 md:p-6 ${className}`}>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={28}
        slidesPerView={slidesPerView}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper rounded-xl"
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {slides.map((child, idx) => (
          <SwiperSlide key={idx} className="flex items-center justify-center py-4">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4 mt-6">
        <button ref={prevRef} className="swiper-button-prev !static !translate-y-0" aria-label="قبلی">
       
        </button>
        <button ref={nextRef} className="swiper-button-next !static !translate-y-0" aria-label="بعدی">
          
        </button>
      </div>
    </div>
  );
} 