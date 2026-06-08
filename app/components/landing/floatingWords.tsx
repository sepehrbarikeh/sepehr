"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/lib/gsap";

const WORDS = [
  "useEffect()", "map()", "async", "{ }", "<html>", "API", "await",
  "Promise", "git", "npm", "fetch()", "</>", "JavaScript", "go", ";",
  "C++", "TypeScript", "C#", "Next.js", "React", "GraphQl", "Tailwind", "RESTful", "MongoDB", "SQL", "Docker", "Kubernetes", "AWS", "Azure", "Firebase",
  "css", "useState()", "const", "Node.js", "useMemo()", "reduce()", "filter()"
];

export default function FloatingWords() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      spawnWord(container);
    }, 250); // فاصله زمانی بین تولید هر کلمه (کمی بهینه شد تا شلوغی بیش از حد ایجاد نکند)

    return () => clearInterval(interval);
  }, []);

  const spawnWord = (container: HTMLDivElement) => {
    const el = document.createElement("span");
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];

    el.innerText = randomWord;
    el.className = "floating-word pointer-events-none absolute whitespace-nowrap font-mono text-xs sm:text-sm font-semibold will-change-transform";

    container.appendChild(el);

    const num = Math.random();
    function getColor() {
      switch (true) {
        case num < 0.2:
          return "#34d399";
        case num < 0.4:
          return "#38bdf8";
        case num < 0.6:
          return "#c084fc";
        case num < 0.8:
          return "#eacd33";
        default:
          return "#f472b6";
      }
    }
    // پوزیشن اولیه (دقیقاً در مرکز پورتال مانیتور)
    gsap.set(el, {
      x: 0,
      y: 0,
      xPercent: -50, // برای وسط‌چین شدن کامل کلمه روی نقطه پرتاب
      yPercent: -50,
      opacity: 0.4,
      scale: gsap.utils.random(0.8, 1.1),
      color: getColor(), // رنگ‌های نئونی آبی و بنفش مچ با تصویر
      filter: "drop-shadow(0 0 6px currentColor)",
    });

    // انیمیشن ظاهر شدن سریع
    gsap.to(el, {
      opacity: 0.8,
      duration: 0.3,
    });

    // انیمیشن اصلی پرواز کلمات به سمت بالا
    gsap.to(el, {
      // کلمات بیشتر در راستای بالای مانیتور پخش می‌شوند
      x: gsap.utils.random(-200, 200),

      // حرکت شدید به سمت بالا (منفی یعنی حرکت به سمت سقف مرورگر)
      y: gsap.utils.random(-500, -800),

      rotate: gsap.utils.random(-15, 15),
      opacity: 0, // کلمات در انتهای مسیر کاملاً محو می‌شوند
      filter: "blur(4px) drop-shadow(0 0 0px transparent)",
      scale: gsap.utils.random(1.2, 1.4), // در طول مسیر کمی بزرگتر می‌شوند
      duration: gsap.utils.random(4, 6),
      ease: "power1.out",
      onComplete: () => {
        el.remove(); // حذف لایه جهت جلوگیری از افت فریم و کند شدن لندینگ پیج
      },
    });
  };

  return (
    // کانتینر اصلی به عنوان یک نقطه متمرکز بدون ابعاد
    <div ref={containerRef} className="relative w-0 h-0" />
  );
}