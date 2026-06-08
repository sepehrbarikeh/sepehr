"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import FloatingWords from "./floatingWords";
import CoffeeSteam from "./coffeeSteam";
import { useMouseParallax } from "./useMouseParallax";
import Image from "next/image";
import background from "@/public/image/background.png"
import hand from "@/public/image/hand.png"

export default function DeveloperScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLImageElement>(null);
  const screenRef = useRef<SVGSVGElement>(null); // <-- ۱. رفرنس برای لایه مانیتور

  useMouseParallax(sceneRef);

  useEffect(() => {
    // انیمیشن حرکت ملایم دست
    const handAnimation = gsap.to(handRef.current, {
      rotation: 1,
      x: -1,
      y: 2,
      transformOrigin: "bottom right",
      duration: 0.23,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // ۲. انیمیشن گلایچ و روشن/خاموش شدن مانیتور
    const screenTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });

    screenTimeline
      .to(screenRef.current, { opacity: 0.1, duration: 0.05 }) // ناگهان کم‌نور شدن
      .to(screenRef.current, { opacity: 1, duration: 0.04, repeat: 3, yoyo: true }) // چشمک زدن سریع (Flicker)
      .to(screenRef.current, { opacity: 0, duration: 0.15 }) // خاموش شدن کامل به مدت کوتاه
      .to(screenRef.current, { opacity: 0.8, duration: 0.05 }) // نیمه روشن
      .to(screenRef.current, { opacity: 0.2, duration: 0.05 }) // یه چشمک دیگه
      .to(screenRef.current, { opacity: 1, duration: 0.1 }); // روشن شدن کامل و ثابت ماندن

    return () => {
      handAnimation.kill();
      screenTimeline.kill();
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="landing-scene relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0c]"
    >
      {/* هاله‌های نوری محیطی */}
      <div className="glow-left absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="glow-right absolute right-[15%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" />

      {/* باکس اصلی صحنه */}
      <div className="parallax-scene relative flex items-center justify-center w-full max-w-[650px] aspect-[4/3] px-4">

        {/* تصویر پس‌زمینه بدون بک‌گراند */}
        <Image
          width={1200}
          height={864}
          src={background}
          alt="Developer Artwork"
          className="w-full h-full object-contain select-none will-change-transform"
        />

        {/* ۳. لایه هوشمند مانیتور با خطوط نئونی لایه‌بندی شده */}
        <svg
          ref={screenRef}
          viewBox="0 0 800 600"
          className="absolute inset-0 w-full h-full z-20 mix-blend-screen blur-sm pointer-events-none"
        >
          {/* لایه اول: هاله نوری عمیق و پهن (Deep Glow) */}
          <polyline
            points="190,345 331,355 373,500"
            stroke="#38bdf8"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="opacity-25 blur-md"
          />

          {/* لایه دوم: هاله نوری متمرکزتر (Mid Glow) */}
          <polyline
            points="190,345 331,355 373,500"
            stroke="#38bdf8"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="opacity-60 blur-[2px]"
          />

          {/* لایه سوم: هسته اصلی و درخشان خط (Neon Core) */}
          {/* نکته مهارتی: استفاده از رنگ سفید یا آبی بسیار روشن در مغز خط، افکت نئون را ۱۰۰٪ طبیعی‌تر می‌کند */}
          <polyline
            points="190,345 331,355 373,500"
            stroke="#e0f2fe"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="opacity-95"
          />
        </svg>
        {/* لایه رویی دست انیمیشنی */}
        <Image
          width={1200}
          height={864}
          ref={handRef}
          src={hand}
          alt="Animated Hand"
          className="absolute top-0 left-0 w-full h-full object-contain select-none z-10"
        />

        {/* کلمات معلق بالای مانیتور */}
        <div className="absolute bottom-[48%] left-[40%] z-30">
          <FloatingWords />
        </div>
        <div className="absolute bottom-[24%] right-[22%] z-20">
          <CoffeeSteam />
        </div>
      </div>

      {/* سایه زیر صحنه */}
      <div className="absolute bottom-[70px] h-[18px] w-[760px] rounded-full bg-white/5 blur-xl" />
    </div>
  );
}