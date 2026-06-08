"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/public/hero-image.png";
import IntroText from "./introText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // ۱. سناریوی انیمیشن دسکتاپ (صفحات بزرگتر از 1024px)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });

        tl.fromTo(".hero-text", 
          { x: -150, opacity: 0 },
          { x: 0, opacity: 1, ease: "power2.out" },
          0
        )
        .fromTo(".hero-media",
          { x: 150, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, ease: "power2.out" },
          0
        );
      });

      // ۲. سناریوی انیمیشن موبایل و تبلت (صفحات کوچکتر از 1023px) 🚀
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2, // انیمیشن کاملاً نرم و متصل به حرکت انگشت کاربر
          },
        });

        // تصویر از سمت راست (x: 100) وارد می‌شود
        tl.fromTo(".hero-media",
          { x: -100, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, ease: "power2.out" },
          0
        )
        // متن‌ها همزمان از سمت چپ (x: -100) وارد می‌شوند
        .fromTo(".hero-text",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, ease: "power2.out" },
          0
        );
      });

    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero-section"
      ref={mainContainerRef}
      className="relative h-[200vh] font-vazir lg:h-[280vh] w-full bg-[#00000c]"
    >
      {/* کانتینر استیکی با کلاس overflow-hidden برای جلوگیری از اسکرول خوردن عرضی صفحه در موبایل */}
      <div className="sticky top-0 flex h-screen w-full flex-col lg:flex-row-reverse items-center justify-center lg:justify-between overflow-hidden px-6 md:px-12 lg:px-24 gap-8 lg:gap-12 py-12 lg:py-0">
        
         {/* بخش متون فارسی خلاصه شده */}
        <div className="hero-text w-full lg:w-1/2 flex items-center justify-start z-20">
          <IntroText />
        </div>

        
        {/* بخش تصویر/مدیا */}
        <div className="hero-media w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-none lg:w-1/2 flex items-center justify-center z-10">
          <Image 
            src={heroImage} 
            alt="Hero Image" 
            className="w-full h-auto object-contain "
            priority 
          />
        </div>

       

        {/* دکمه راهنمای اسکرول */}
        <div className="scroll-down absolute bottom-6 left-12 hidden lg:flex items-center space-x-2 space-x-reverse text-xs text-zinc-500 font-mono select-none">
          <span>Scroll Down</span>
          <span className="animate-bounce">↓</span>
        </div>

      </div>
    </section>
  );
}