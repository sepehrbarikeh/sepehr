"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/app/components/nav";
import { Download, Briefcase, FolderGit2, Code, Layers, Wrench, GraduationCap, Languages } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ScrollTrigger.refresh();

        const ctx = gsap.context(() => {
            gsap.fromTo(".about-anim", 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.12,
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

    // آرایه بندی مهارت‌ها برای رندر تمیز و شیشه‌ای
    const skills = {
        languages: ["JavaScript", "TypeScript", "Golang"],
        frameworks: ["ReactJS", "NextJS", "Redux Toolkit", "SWR", "Formik", "Yup", "Echo (Golang)","Fiber (Golang)","grpc (Golang)","Postgresql (Golang)","rabbitmq (Golang)"],
        ui: ["Tailwind CSS", "CSS Modules", "Swiper", "Rive", "Particle.js"],
        data: ["Axios", "RESTful APIs", "ECharts", "Git", "Toastify"]
    };

    return (
        <>
            <Nav />
            <div ref={containerRef} className="min-h-screen bg-[#03030f] mt-16 text-zinc-300 py-16 px-4 md:px-8 border-t border-white/[0.01]">
                
                {/* باکس اصلی شیشه‌ای رزومه */}
                <section dir="rtl" className="about-anim w-full max-w-4xl mx-auto bg-white/[0.01] backdrop-blur-xl border border-white/[0.04] rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.3)] mb-12">
                    
                    {/* هدر صفحه */}
                    <div className="border-b border-white/[0.04] pb-6 mb-8">
                        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'vazir-bold' }}>
                            درباره من
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl text-justify" style={{ fontFamily: 'vazir' }}>
                        توسعه‌دهنده فول‌استک (Full-Stack) با تمرکز بر ساخت سیستم‌های مقیاس‌پذیر و ابری. متخصص در پیاده‌سازی معماری‌های ماژولار در سمت بک‌اند با استفاده از Golang و خلق تجربه‌های کاربری حرفه‌ای، بهینه و واکنش‌گرا با Next.js و React. دارای تجربه عملی در رهبری پروژه‌ها از صفر تا صد؛ شامل طراحی رابط کاربری، مدیریت وضعیت، اتصال به API، پیاده‌سازی احراز هویت، گزارش‌گیری و دیپلوی نهایی سامانه‌های مدیریتی در سطح کلان و دولتی. علاقه‌مند به توسعه رابط‌های ماژولار، بهینه‌سازی عملکرد (Performance) و پایبند به اصول کدنویسی تمیز (Clean Code).
                        </p>
                    </div>

                    <div className="space-y-10">
                        {/* سوابق شغلی */}
                        <div className="about-anim">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4" style={{ fontFamily: 'vazir-bold' }}>
                                <Briefcase size={20} className="text-purple-400" /> سوابق شغلی
                            </h2>
                            <div className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-5 md:p-6 relative overflow-hidden group hover:border-purple-500/20 transition-colors duration-300">
                                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-600" />
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                    <div>
                                        <h3 className="text-white font-bold text-base" style={{ fontFamily: 'vazir-bold' }}>توسعه‌دهنده فرانت‌اند</h3>
                                        <span className="text-purple-400 text-sm font-medium">شرکت X Code (تبریز)</span>
                                    </div>
                                    <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full font-medium">
                                        از آذر ۱۴۰۲ تا کنون
                                    </span>
                                </div>
                                <ul className="space-y-2 text-sm text-zinc-400 leading-relaxed list-disc list-inside pr-1" style={{ fontFamily: 'vazir' }}>
                                    <li>توسعه کامل سامانه مدیریتی برای شرکت آب منطقه‌ای</li>
                                    <li>طراحی داشبورد مدیریتی با نمودارهای تعاملی (ECharts)</li>
                                    <li>پیاده‌سازی احراز هویت، سطح دسترسی و مدیریت کاربران</li>
                                    <li>ساخت فرم‌های داینامیک با Formik و اعتبارسنجی با Yup</li>
                                    <li>استفاده از SWR برای کشینگ سمت کلاینت و بهینه‌سازی واکشی داده</li>
                                    <li>طراحی نوبار واکنش‌گرا، سایدبار چند حالته و تعامل‌های حرفه‌ای در UI</li>
                                </ul>
                            </div>
                        </div>

                        {/* پروژه‌ها */}
                        <div className="about-anim">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4" style={{ fontFamily: 'vazir-bold' }}>
                                <FolderGit2 size={20} className="text-cyan-400" /> پروژه‌های شاخص
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-5 hover:border-cyan-500/20 transition-colors duration-300 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: 'vazir-bold' }}>سامانه مدیریت داخلی آب منطقه‌ای آذربایجان شرقی</h3>
                                        <p className="text-xs text-zinc-500 mb-3">Next.js – SWR – Axios – Tailwind – ECharts</p>
                                        <p className="text-xs text-zinc-400 leading-relaxed" style={{ fontFamily: 'vazir' }}>توسعه کامل پنل مدیریتی شامل احراز هویت، فرم‌سازی، سطوح دسترسی و گزارش‌گیری نهایی.</p>
                                    </div>
                                </div>
                                <div className="bg-white/[0.01] border border-white/[0.03] rounded-2xl p-5 hover:border-cyan-500/20 transition-colors duration-300 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-white font-bold text-sm mb-1" style={{ fontFamily: 'vazir-bold' }}>سایت شخصی و پورتفولیو</h3>
                                        <p className="text-xs text-zinc-500 mb-3">Next.js – Particle.js – Swiper – Tailwind</p>
                                        <p className="text-xs text-zinc-400 leading-relaxed" style={{ fontFamily: 'vazir' }}>نمایش رزومه، اطلاعات تماس و نمونه‌کارها با انیمیشن‌های پیشرفته و رابط کاربری تعاملی مدرن.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* تخصص‌ها و مهارت‌ها */}
                        <div className="about-anim">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-6" style={{ fontFamily: 'vazir-bold' }}>
                                <Code size={20} className="text-emerald-400" /> مهارت‌های فنی و ابزارها
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/[0.01] border border-white/[0.02] p-6 rounded-2xl">
                                
                                <div>
                                    <h4 className="text-xs font-bold text-zinc-400 mb-3 flex items-center gap-1.5"><Layers size={14} className="text-emerald-400" /> زبان‌ها و فریم‌ورک‌ها</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {[...skills.languages, ...skills.frameworks].map((tech, idx) => (
                                            <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg border border-white/[0.04] bg-white/[0.01] text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/20 transition-colors duration-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-zinc-400 mb-3 flex items-center gap-1.5"><Wrench size={14} className="text-cyan-400" /> اکوسیستم توسعه و ابزارها</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {[...skills.ui, ...skills.data].map((tool, idx) => (
                                            <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg border border-white/[0.04] bg-white/[0.01] text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/20 transition-colors duration-300">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* تحصیلات و زبان */}
                        <div className="about-anim grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div>
                                <h2 className="text-base font-bold text-white flex items-center gap-2 mb-3" style={{ fontFamily: 'vazir-bold' }}>
                                    <GraduationCap size={18} className="text-orange-400" /> تحصیلات
                                </h2>
                                <div className="bg-white/[0.01] border border-white/[0.03] p-4 rounded-xl">
                                    <p className="text-sm font-bold text-zinc-200">مهندسی کامپیوتر / نرم‌افزار</p>
                                    <p className="text-xs text-zinc-400 mt-1">دانشگاه آزاد اسلامی – واحد اسلامشهر</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-base font-bold text-white flex items-center gap-2 mb-3" style={{ fontFamily: 'vazir-bold' }}>
                                    <Languages size={18} className="text-pink-400" /> زبان‌ها
                                </h2>
                                <div className="bg-white/[0.01] border border-white/[0.03] p-4 rounded-xl space-y-2 text-xs">
                                    <p className="flex justify-between"><span className="text-zinc-400">فارسی:</span> <span className="text-white font-medium">زبان مادری</span></p>
                                    <p className="flex justify-between"><span className="text-zinc-400">انگلیسی:</span> <span className="text-pink-400 font-medium">متوسط (درک مستندات فنی)</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* دکمه اکشن دریافت رزومه */}
                <div className="about-anim flex justify-center items-center">
                    <a
                        href="/files/cv.pdf"
                        download
                        className="group relative overflow-hidden flex items-center gap-2.5 px-8 py-3.5 bg-white/[0.02] border border-white/[0.08] text-purple-400 hover:text-white rounded-2xl hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 font-bold text-sm tracking-wide"
                        style={{ fontFamily: 'vazir-bold' }}
                    >
                        {/* هاله نوری داخلی دکمه */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                        دریافت نسخه PDF رزومه
                    </a>
                </div>
            </div>
        </>
    );
};

export default AboutUs;