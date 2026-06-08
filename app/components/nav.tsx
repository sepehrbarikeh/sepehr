"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { name: "خانه", id: "home", href: '/' },
  { name: "درباره من", id: "about", href: '/about' },
  { name: "پروژه‌ها", id: "projects", href: '/project' },
  { name: 'مقالات', href: '/articles', id: 'articles' },
  { name: "ارتباط با من", id: "contact", href: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navInnerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // بررسی اینکه آیا کاربر در صفحه اصلی است یا نه
  const isHomePage = pathname === "/";

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      if (isHomePage) {
        // --- سناریو اول: تنظیمات مخصوص صفحه اصلی (Landing Page) ---
        // حالت اولیه: ناوبار کاملاً پنهان و خارج از صفحه
        gsap.set(navContainerRef.current, { y: -100, opacity: 0 });

        // انیمیشن اول: ورود ناوبار به صورت تمام‌عرض در پایان لندینگ پیج
        ScrollTrigger.create({
          trigger: document.body,
          start: () => `top -${(window.innerHeight * 1.8) - 100}px`,
          onEnter: () => {
            gsap.to(navContainerRef.current, {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(navContainerRef.current, {
              y: -100,
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            });
          }
        });

        // انیمیشن دوم: تبدیل ناوبار تمام‌عرض به حالت کپسولِ شیشه‌ای لوکس
        gsap.to(navInnerRef.current, {
          maxWidth: "1024px",
          marginTop: "16px",
          borderRadius: "9999px",
          backgroundColor: "rgba(10, 10, 12, 0.85)",
          backdropFilter: "blur(16px)",
          paddingLeft: "32px",
          paddingRight: "32px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          duration: 0.35,
          scrollTrigger: {
            trigger: document.body,
            start: () => `top -${(window.innerHeight * 3.8) + 150}px`,
            toggleActions: "play none none reverse",
          }
        });

      } else {
        // --- سناریو دوم: تنظیمات صفحات فرعی (درباره من، مقالات و ...) ---
        // ناوبار از همان اول بدون هیچ انیمیشن اسکرولی، به صورت کپسول کامل رندر می‌شود
        gsap.set(navContainerRef.current, { y: 0, opacity: 1 });
        gsap.set(navInnerRef.current, {
          maxWidth: "1024px",
          marginTop: "16px",
          borderRadius: "9999px",
          backgroundColor: "rgba(10, 10, 12, 0.85)",
          backdropFilter: "blur(16px)",
          paddingLeft: "32px",
          paddingRight: "32px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          borderColor: "rgba(255, 255, 255, 0.08)",
        });
      }

    }, navContainerRef);

    return () => ctx.revert();
  }, [isHomePage]); // با تغییر صفحه، افکت‌ها بر اساس آدرس جدید بازنویسی می‌شوند

  return (
    <div ref={navContainerRef} className="fixed font-vazir top-0 left-0 right-0 z-50 w-full px-4 transition-all duration-300">
      <nav
        ref={navInnerRef}
        dir="rtl"
        className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-white/5 bg-[#0a0a0c]/40 py-4 px-6 md:px-12 transition-all duration-300"
      >
        {/* لوگو */}
        <Link href="/" className="flex items-center space-x-2 space-x-reverse text-lg font-bold text-white select-none">
          <span className="text-purple-500 font-mono">{"</>"}</span>
          <span className="tracking-tight">Sepehr</span>
        </Link>

        {/* منو دسکتاپ */}
        <div className="relative hidden items-center space-x-2 space-x-reverse md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-xl ${
                pathname === item.href ? "text-purple-400 bg-white/5" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* دکمه اکشن دسکتاپ */}
        <div className="hidden items-center md:flex">
           <Link href="/contact" >
          <button className="rounded-xl bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105 hover:bg-purple-500">
            شروع گفتگو
          </button>
          </Link>
        </div>

        {/* دکمه همبرگری موبایل */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* منوی موبایل کشویی اصلاح‌شده */}
      {isOpen && (
        <div dir="rtl" className="absolute left-4 right-4 top-24 z-40 flex flex-col space-y-3 rounded-2xl border border-white/10 bg-[#0a0a0c]/95 p-6 backdrop-blur-xl md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`w-full text-right py-2 text-base font-medium transition-colors ${
                pathname === item.href ? "text-purple-400" : "text-zinc-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-white/5 my-2" />
           <Link href="/contact" >
          <button  onClick={() => setIsOpen(false)} className="w-full rounded-xl bg-purple-600 py-3 text-center text-sm font-semibold text-white">
            شروع گفتگو
          </button>
          </Link>
        </div>
      )}
    </div>
  );
}