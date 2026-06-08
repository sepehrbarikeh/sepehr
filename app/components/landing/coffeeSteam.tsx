"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

export default function CoffeeSteam() {
  const steamContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = steamContainerRef.current;
    if (!container) return;

    // تولید مداوم ذرات بخار (هر ۴۰۰ میلی‌ثانیه یک ذره)
    const interval = setInterval(() => {
      spawnSteam(container);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const spawnSteam = (container: HTMLDivElement) => {
    const particle = document.createElement("div");
    
    // استایل ذره بخار: یک دایره کوچک سفید و نیمه‌شفاف با بلور شدید
    particle.className = "absolute rounded-full bg-gradient-to-t from-white/20 to-transparent blur-[6px] will-change-transform";
    
    // اندازه تصادفی برای طبیعی‌تر شدن بخار
    const size = gsap.utils.random(8, 16);
    particle.style.width = `${size}px`;
    particle.style.height = `${size * 1.5}px`; // کمی کشیده به سمت بالا

    container.appendChild(particle);

    // پوزیشن اولیه (دقیقاً روی دهانه لیوان)
    gsap.set(particle, {
      x: 0,
      y: 0,
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
      scale: 0.5,
    });

    // انیمیشن ظاهر شدن سریع بخار
    gsap.to(particle, {
      opacity: 0.4,
      duration: 0.4,
    });

    // انیمیشن اصلی بالا رفتن و پخش شدن بخار در هوا
    gsap.to(particle, {
      // بخار موقع بالا رفتن کمی به چپ و راست منحرف می‌شود (حرکت موجی)
      x: gsap.utils.random(-15, 15), 
      
      // ارتفاع بالا رفتن بخار (منفی به سمت بالا)
      y: gsap.utils.random(-60, -110), 
      
      // بخار در هوا پخش و بزرگتر می‌شود
      scale: gsap.utils.random(2, 3), 
      
      // در انتها کاملاً محو و بلورین می‌شود
      opacity: 0,
      filter: "blur(12px)",
      
      duration: gsap.utils.random(2.5, 4),
      ease: "sine.out", // حرکت نرم و یکنواخت مثل گاز
      onComplete: () => {
        particle.remove(); // حذف المان برای بهینه ماندن رم
      },
    });
  };

  return (
    // کانتینر اصلی بخار
    <div ref={steamContainerRef} className="relative w-0 h-0" />
  );
}