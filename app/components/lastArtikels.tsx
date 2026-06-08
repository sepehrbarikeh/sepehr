"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModernSlider from "./shared/ModernSlider";
import { Data } from "./articles/article";
import Cart from "./articles/cart";
import Link from "next/link";
import { ListChecks } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LastArtikels = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ScrollTrigger.refresh();

        const ctx = gsap.context(() => {
            gsap.fromTo(".articles-anim",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.1,
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
            className="w-full max-w-6xl mx-auto my-16 px-6 md:px-4"
        >
            {/* هدر سکشن مقالات */}
            <div dir="rtl" className="flex flex-col items-center text-center mb-10 space-y-2">
                <span className="articles-anim text-xs font-bold tracking-widest text-purple-500 uppercase font-mono">
                    LATEST ARTICLES
                </span>
                <h2
                    className="articles-anim text-2xl md:text-3xl font-black text-white leading-tight"
                    style={{ fontFamily: 'vazir-bold' }}
                >
                    آخرین مقالات
                </h2>
                <p
                    className="articles-anim text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed"
                    style={{ fontFamily: 'vazir' }}
                >
                    جدیدترین مطالب آموزشی و تجربیات من در حوزه برنامه‌نویسی و توسعه وب
                </p>
            </div>

            {/* اسلایدر مقالات با انیمیشن ورود */}
            <div className="articles-anim">
                <ModernSlider>
                    {Data.map((article) => (
                        <Cart key={article.id} item={article} />
                    ))}

                    {/* کارت مدرن و نئونی "مشاهده همه مقالات" */}
                    <Link
                        href="/articles"
                        className="block w-full max-w-xs rounded-2xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group relative overflow-hidden"
                    >
                        {/* هاله نوری پس‌زمینه (Glow) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                        {/* دایو داخلی با ارتفاع کاملاً هماهنگ با کارت مقاله */}
                        <div className="p-4 flex flex-col h-[290px] justify-between relative z-10" dir="rtl">
                            <div>
                                {/* باکس آیکون */}
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.02] border border-white/[0.05] text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/10 transition-all duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 7h6m0 0v6m0-6L10 16"
                                        />
                                    </svg>
                                </div>

                                {/* عنوان کارت */}
                                <h3
                                    className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors duration-300"
                                    style={{ fontFamily: 'vazir-bold' }}
                                >
                                    مشاهده همه مقالات
                                </h3>

                                {/* توضیحات کارت */}
                                <p
                                    className="mt-2 text-sm leading-relaxed text-zinc-400"
                                    style={{ fontFamily: 'vazir' }}
                                >
                                    همه آیتم‌ها رو ببین و بیشتر بررسی کن.
                                </p>
                            </div>

                            {/* دکمه اکشن پایین کارت */}
                            <button
                                className="flex w-fit items-center gap-2 text-sm font-semibold text-purple-400 transition-colors hover:text-purple-300"
                                style={{ fontFamily: 'vazir-bold' }}
                            >
                                مشاهده
                                <span className="transition-transform duration-300 group-hover:-translate-x-1 inline-block">
                                    ←
                                </span>
                            </button>
                        </div>
                    </Link>
                </ModernSlider>
            </div>
        </section>
    )
}

export default LastArtikels;