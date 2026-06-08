"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import LastArtikels from "@/app/components/lastArtikels";
import LastProject from "@/app/components/lastProject";
import { BoltIcon, CodeBracketIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import Landing from "@/app/components/landing/landing";
import HeroSection from "@/app/components/heroSection";
import AboutSection from "@/app/components/aboutSection";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <BoltIcon className="w-8 h-8 text-sky-400 transition-transform duration-300 group-hover:scale-110" />,
    title: "توسعه سریع و مدرن",
    desc: "استفاده از جدیدترین تکنولوژی‌ها برای ساخت رابط‌های کاربری حرفه‌ای و سریع.",
    glowColor: "hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]"
  },
  {
    icon: <CodeBracketIcon className="w-8 h-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />,
    title: "کدنویسی تمیز و مقیاس‌پذیر",
    desc: "رعایت اصول مهندسی نرم‌افزار و معماری مناسب برای پروژه‌های بزرگ و کوچک.",
    glowColor: "hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
  },
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />,
    title: "کاملاً ریسپانسیو",
    desc: "نمایش عالی در موبایل، تبلت و دسکتاپ با طراحی واکنش‌گرا.",
    glowColor: "hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
  },
];

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.fromTo(".feature-card-anim", 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav />
      <Landing />
      <HeroSection />
      <AboutSection />
      
      <main className="min-h-screen w-full flex flex-col items-center justify-start bg-[#03030f] border-t border-white/[0.02]">

        {/* Features Section */}
        <section ref={containerRef} className="w-full max-w-5xl mx-auto my-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div 
                key={i} 
                className={`feature-card-anim group flex flex-col items-center bg-white/[0.01] backdrop-blur-md border border-white/[0.04] rounded-2xl p-8 text-center transition-all duration-300 ${f.glowColor}`}
              >
                {/* باکس آیکون */}
                <div className="p-3 bg-white/[0.02] rounded-xl border border-white/[0.02] mb-4 transition-colors duration-300 group-hover:bg-white/[0.04]">
                  {f.icon}
                </div>
                
                {/* عنوان کارت */}
                <h3 
                  className="mt-2 mb-3 text-lg font-bold text-white transition-colors duration-300" 
                  style={{ fontFamily: 'vazir-bold' }}
                >
                  {f.title}
                </h3>
                
                {/* توضیحات کارت */}
                <p 
                  className="text-zinc-400 text-sm leading-relaxed" 
                  style={{ fontFamily: 'vazir' }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Last Articles Section */}
        <LastArtikels />
        
        {/* Last Projects Section */}
        <LastProject />
        
        <Footer />
      </main>
    </>
  );
}

export default Home;