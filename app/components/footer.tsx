"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MessageCircle, Code, Zap, Layers, Github, Linkedin, ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ScrollTrigger.refresh();

        const ctx = gsap.context(() => {
            gsap.fromTo(".footer-anim", 
                { opacity: 0, y: 25 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer 
            ref={footerRef} 
            className="w-full relative bg-[#03030c] text-zinc-300 py-16 mt-20 border-t border-white/[0.03] overflow-hidden"
        >
            {/* ۱. لایه هاله‌های نوری نئونی (Aurora) فیکس شده در بک‌گراند فوتر */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[90vw] md:w-[70vw] h-[220px] bg-gradient-to-r from-purple-600/10 via-indigo-500/10 to-cyan-500/5 blur-[90px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-[-100px] right-[-50px] w-[250px] h-[250px] bg-purple-900/5 blur-[80px] rounded-full pointer-events-none z-0" />

            {/* ۲. پترن خطوط ریز شطرنجی که در بالای فوتر محو می‌شود (Tech Grid Overlay) */}
            <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" 
                style={{
                    maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8))",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8))"
                }}
            />

            {/* محتوای اصلی - بالاتر از لایه‌های بک‌گراند */}
            <div 
                dir="rtl" 
                className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10"
            >
                {/* ستون اول: دسترسی سریع */}
                <div className="footer-anim flex flex-col space-y-4 text-right">
                    <h3 className="text-white text-sm font-bold tracking-wide uppercase font-mono text-purple-400/80">
                        دسترسی سریع
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/articles" className="group flex items-center gap-1.5 text-zinc-400 hover:text-purple-400 text-sm transition-colors duration-300" style={{ fontFamily: 'vazir' }}>
                                <ArrowLeft size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-400" />
                                مقالات
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="group flex items-center gap-1.5 text-zinc-400 hover:text-purple-400 text-sm transition-colors duration-300" style={{ fontFamily: 'vazir' }}>
                                <ArrowLeft size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-400" />
                                درباره من
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="group flex items-center gap-1.5 text-zinc-400 hover:text-purple-400 text-sm transition-colors duration-300" style={{ fontFamily: 'vazir' }}>
                                <ArrowLeft size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                تماس با من
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ستون دوم: تکنولوژی‌ها */}
                <div className="footer-anim flex flex-col space-y-4 text-right">
                    <h3 className="text-white text-sm font-bold tracking-wide uppercase font-mono text-purple-400/80">
                        تکنولوژی‌های این سایت
                    </h3>
                    <div className="flex flex-wrap gap-2.5 pt-1">
                        <span className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm text-cyan-400 hover:border-cyan-500/30 transition-all duration-300">
                            <Zap className="w-4 h-4 fill-cyan-400/10" /> React
                        </span>
                        <span className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm text-white hover:border-white/20 transition-all duration-300">
                            <Code className="w-4 h-4" /> Next.js
                        </span>
                        <span className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-xl border border-white/[0.03] bg-white/[0.01] backdrop-blur-sm text-sky-400 hover:border-sky-500/30 transition-all duration-300">
                            <Layers className="w-4 h-4 fill-sky-400/10" /> Tailwind
                        </span>
                    </div>
                </div>

                {/* ستون سوم: شبکه‌های اجتماعی */}
                <div className="footer-anim flex flex-col space-y-4 text-right">
                    <h3 className="text-white text-sm font-bold tracking-wide uppercase font-mono text-purple-400/80">
                        شبکه‌های اجتماعی
                    </h3>
                    <div className="flex gap-3 pt-1">
                        <a 
                            href="https://github.com/sepehrbarikeh" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 rounded-xl bg-white/[0.01] border border-white/[0.04] backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-110 transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/sepehr-barike-9bb9242a9" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 rounded-xl bg-white/[0.01] border border-white/[0.04] backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-sky-400 hover:border-sky-500/30 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:scale-110 transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://t.me/srbe_sepehr" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 rounded-xl bg-white/[0.01] border border-white/[0.04] backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:scale-110 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* بخش کپی رایت */}
            <div 
                className="footer-anim mt-12 pt-6 border-t border-white/[0.01] text-center text-zinc-500 text-xs tracking-wide relative z-10" 
                style={{ fontFamily: 'vazir' }}
            >
                © {new Date().getFullYear()} سپهر باریکه | توسعه داده شده با عشق و کد ♥
            </div>
        </footer>
    )
}

export default Footer;