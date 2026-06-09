"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft } from "lucide-react";
import {
  FaReact,
  FaJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiGo,
  SiMysql,
  SiDocker,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// دیتای بخش آمار جدید شما
const STATS = [
  { value: "2+", label: "Years Exp." },
  { value: "10+", label: "Projects" },
  { value: "100%", label: "Client Focused" },
  { value: "∞", label: "Keep Learning" },
];

const TECH_STACK = [
  {
    name: "React",
    color:
      "hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] text-cyan-400",
    icon: <FaReact className="w-10 h-10" />,
  },
  {
    name: "Next.js",
    color:
      "hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] text-white",
    icon: <SiNextdotjs className="w-10 h-10" />,
  },
  {
    name: "TypeScript",
    color:
      "hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] text-[#3178C6]",
    icon: <SiTypescript className="w-10 h-10" />,
  },
  {
    name: "JavaScript",
    color:
      "hover:border-yellow-500/40 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] text-yellow-400",
    icon: <FaJs className="w-10 h-10" />,
  },
  {
    name: "Tailwind CSS",
    color:
      "hover:border-sky-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] text-sky-400",
    icon: <SiTailwindcss className="w-10 h-10" />,
  },
  {
    name: "Go",
    color:
      "hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] text-cyan-400",
    icon: <SiGo className="w-10 h-10" />,
  },
  {
    name: "PostgreSQL",
    color:
      "hover:border-blue-600/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] text-blue-500",
    icon: <SiPostgresql className="w-10 h-10" />,
  },
  {
    name: "MySQL",
    color:
      "hover:border-orange-600/40 hover:shadow-[0_0_20px_rgba(248,150,34,.15)] text-orange-500",
    icon: <SiMysql className="w-10 h-10" />,
  },
  {
    name: "Docker",
    color:
      "hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] text-blue-400",
    icon: <SiDocker className="w-10 h-10" />,
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.fromTo(".about-anim", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.08, // سرعت استگر کمی بیشتر شد تا باکس‌های جدید روان حرکت کنند
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#03030f] py-24 px-6 md:px-16 lg:px-24 border-t border-white/[0.02]"
    >
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
        
        {/* کلمن سمت راست: اطلاعات درباره من */}
        <div dir="rtl" className="w-full lg:w-5/12 flex flex-col text-right space-y-4">
          <span className="about-anim text-xs font-bold tracking-widest text-purple-500 uppercase font-mono">
            ABOUT ME
          </span>
          <h2 className="about-anim text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            من یک توسعه‌دهنده مشتاق هستم که به خلق محصولات یکپارچه روی بستر اینترنت عشق می‌ورزم.
          </h2>
          <p className="about-anim text-sm md:text-base text-zinc-400 leading-relaxed font-sans">
            تخصص من ساخت وب‌اپلیکیشن‌های مدرن فرانت‌اند و معماری میکروسرویس‌های بک‌اند با کارایی بالا، امنیت فوق‌العاده و کدهای تمیز و استاندارد است.
          </p>
          <a 
            href="#contact" 
            className="about-anim group w-fit pt-2 flex items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
          >
            جزئیات بیشتر درباره من
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </div>

        {/* کلمن سمت چپ: بخش تک‌استک + باکس آمار جدید */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-8">
          
          {/* ─── باکس آمار سفارشی (دقیقا شبیه به اسکرین‌شات) ─── */}
          <div className="about-anim w-full grid grid-cols-2 md:grid-cols-4 py-5 rounded-2xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300">
            {STATS.map((stat, index) => (
              <div 
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center px-2 relative
                  /* خط عمودی دسکتاپ برای جدا کردن ۳ ستون اول */
                  ${index !== 3 ? 'md:border-r md:border-white/[0.06]' : ''}
                  /* خط عمودی موبایل برای ستون اول در گرید ۲ ستونه */
                  ${index % 2 === 0 ? 'border-r border-white/[0.06] md:border-none' : ''}
                  /* خط افقی موبایل برای ردیف اول */
                  ${index < 2 ? 'border-b border-white/[0.06] md:border-none pb-4 md:pb-0' : 'pt-4 md:pt-0'}
                `}
              >
                <span className="text-3xl md:text-4xl font-black text-purple-500 tracking-tight font-sans mb-1">
                  {stat.value}
                </span>
                <span className="text-[11px] ltr  md:text-xs font-medium text-zinc-400 font-sans tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* ─── بخش تک‌استک ─── */}
          <div className="flex flex-col space-y-4">
            <span className="about-anim text-xs font-bold tracking-widest text-purple-500 uppercase font-mono">
              TECH STACK
            </span>
            
            {/* گرید ۷ ستونه دسکتاپ و ۲ ستونه موبایل */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className={`about-anim group flex flex-col items-center justify-center p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md transition-all duration-300 h-[120px] ${tech.color}`}
                >
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-10 h-10">
                    {tech.icon}
                  </div>
                  <span className="text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors duration-300 font-sans text-center whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}