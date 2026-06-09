"use client";

import { ReactNode, Children, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // ماژول Navigation را کاملاً حذف کردیم
import 'swiper/css';
import 'swiper/css/pagination';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ModernSliderProps {
  children: ReactNode[];
  slidesPerView?: number;
  className?: string;
}

export default function ModernSlider({ children, slidesPerView = 3, className = '' }: ModernSliderProps) {
  const slides = Children.toArray(children);
  
  // ذخیره کردن نمونه‌ی سوییپر در استیت برای کنترل دستی و بدون باگ
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className={`relative bg-white/[0.01] backdrop-blur-md border border-white/[0.02] rounded-2xl p-6 md:p-8 ${className}`} dir="rtl">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        loop={false}      // لوپ و کپی کردن اسلایدها کاملاً غیرفعال شد
        rewind={true}    // فعال کردن قابلیت برگشت به اولِ لیست در انتهای اسلایدر
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // گرفتن رفرنس مستقیم سوییپر در لایه کلاینت
        onSwiper={setSwiperRef}
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
        {/* دکمه قبلی: با متد bult-in خود سوییپر کار می‌کند */}
        <button 
          onClick={() => swiperRef?.slidePrev()}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-pointer z-10" 
          aria-label="قبلی"
        >
          <ChevronRight size={20} />
        </button>
        
        {/* دکمه بعدی: با متد bult-in خود سوییپر کار می‌کند */}
        <button 
          onClick={() => swiperRef?.slideNext()}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-pointer z-10" 
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
          background: #a855f7;
          width: 24px;
          box-shadow: 0 0 12px rgba(168,85,247,0.5);
        }
      `}</style>
    </div>
  );
}