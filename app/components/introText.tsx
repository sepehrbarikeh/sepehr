"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

export default function IntroText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // انیمیشن ورودی المان‌ها به محض لود شدن صفحه (حالت Stagger حرفه‌ای)
    const ctx = gsap.context(() => {
      gsap.from([".anim-badge", ".anim-title", ".anim-subtitle", ".anim-btn"], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      dir="rtl"
      className="relative flex flex-col text-right font-sans space-y-4 md:space-y-6 lg:space-y-8 select-none w-full"
    >

      {/* بچ وضعیت: اندازه متن بهینه‌سازی شد تا در موبایل خط دوم نرود */}
      <div className="anim-badge landing-badge w-fit rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 md:px-5 md:py-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(147,51,234,0.1)]">
        <span className="text-[11px] md:text-sm font-semibold tracking-wide text-purple-400">
          در دسترس برای پروژه‌های جدید
        </span>
      </div>

      {/* تیتر اصلی: کوتاه، خلاصه و متمرکز در دو خط */}
      <h1 className="anim-title landing-title text-[32px] sm:text-[42px] md:text-[56px] lg:text-[66px] font-black leading-[1.2] text-white">
        توسعه‌ی محصولات وب یکپارچه
        <br />
        با <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(139,92,246,0.2)]">
          کدنویسی تمیز و مقیاس‌پذیر.
        </span>
      </h1>

      {/* زیرعنوان: تبدیل به یک خط و نیم، بسیار روان و مدرن */}
      <p className="anim-subtitle landing-subtitle max-w-[540px] text-xs sm:text-sm md:text-base leading-6 sm:leading-7 md:leading-8 text-zinc-400">
        توسعه‌دهنده فول‌استک؛ متخصص معماری سیستم‌های بک‌اند پایدار و خلق رابط‌های کاربری مدرن، سریع و تعاملی.
      </p>
      {/* دکمه‌ها: پاکسازی کدهای اضافی و تکراری دوقلو با پدینگ رسپانسیو */}
      <div className="anim-btn flex flex-wrap gap-3 md:gap-5 pt-2">
        <Link href="/project">
          <button className="group flex items-center gap-2 rounded-xl md:rounded-2xl bg-purple-600 px-5 py-3 md:px-8 md:py-4 font-bold text-xs md:text-base text-white shadow-[0_4px_25px_rgba(147,51,234,0.35)] transition-all duration-300 hover:bg-purple-500 hover:scale-[1.03]">
            مشاهده پروژه‌ها
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1.5"
            />
          </button>
        </Link>
        <Link href="/contact">
          <button className="rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 md:px-8 md:py-4 font-semibold text-xs md:text-base text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.08]">
            ارتباط با من
          </button>
        </Link>
      </div>

    </div>
  );
}