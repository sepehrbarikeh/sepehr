import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import Main from "@/app/components/main";
import LastArtikels from "@/app/components/lastArtikels";
import LastProject from "@/app/components/lastProject";
import { BoltIcon, CodeBracketIcon, DevicePhoneMobileIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
const features = [
  {
    icon: <BoltIcon className="w-8 h-8 text-sky-500" />,
    title: "توسعه سریع و مدرن",
    desc: "استفاده از جدیدترین تکنولوژی‌ها برای ساخت رابط‌های کاربری حرفه‌ای و سریع."
  },
  {
    icon: <CodeBracketIcon className="w-8 h-8 text-sky-500" />,
    title: "کدنویسی تمیز و مقیاس‌پذیر",
    desc: "رعایت اصول مهندسی نرم‌افزار و معماری مناسب برای پروژه‌های بزرگ و کوچک."
  },
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-sky-500" />,
    title: "کاملاً ریسپانسیو",
    desc: "نمایش عالی در موبایل، تبلت و دسکتاپ با طراحی واکنش‌گرا."
  },
];

const LandingShutter = ({ onEnter, hide }: { onEnter: () => void, hide: boolean }) => {
  // اسکرول برای رد کردن لندینگ
  useEffect(() => {
    if (!hide) {
      const onScroll = () => {
        if (window.scrollY > 10) onEnter();
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [hide, onEnter]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-sky-200 via-white to-sky-100 dark:from-slate-900 dark:via-slate-800 dark:to-sky-900 origin-top transition-all duration-700 ${hide ? 'scale-y-0 opacity-0 pointer-events-none' : 'scale-y-100 opacity-100'}`}
      style={{ transitionProperty: 'transform, opacity', willChange: 'transform, opacity' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="flex flex-col items-center justify-center text-center relative z-10">
        <Image
          src="/image/main2.svg"
          width={320}
          height={320}
          alt="Landing Illustration"
          className="w-64 h-64 md:w-80 md:h-80 mb-6 drop-shadow-lg animate-gentle-float"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold text-sky-600 dark:text-sky-300 mb-4 leading-tight py-2 animate-moving-underline" style={{ fontFamily: 'vazir-bold', lineHeight: '1.2' }}>
          شروع یک تجربه جدید!
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: 'vazir' }}>
          اسکرول کن یا روی دکمه زیر بزن تا وارد سایت بشی و همه بخش‌های جذاب رو ببینی.
        </p>

        <button
          onClick={onEnter}
          className="group flex flex-col items-center gap-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-xl font-bold rounded-full shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-700 transform hover:scale-105 hover:shadow-3xl"
        >
          <ChevronDoubleDownIcon className="w-12 h-12 group-hover:scale-125 transition-transform duration-300 animate-bounce" />
          <span className="mt-2">بزن بریم!</span>
        </button>
      </div>
    </div>
  );
};

const Home = () => {


  const [showLanding, setShowLanding] = useState(true);
  const [hideLanding, setHideLanding] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    setHideLanding(true);
    sessionStorage.setItem("landingSeen", "true");
    setTimeout(() => {
      setShowLanding(false);
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 700);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("landingSeen");
      if (seen) {
        setShowLanding(false);
        setHideLanding(true);
      }
    }
  }, []);

  return (
    <>
      {showLanding && <LandingShutter onEnter={handleEnter} hide={hideLanding} />}
      <div ref={mainRef} className={showLanding ? "pointer-events-none select-none blur-sm scale-y-105 transition-all duration-700" : "transition-all duration-700 bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-sky-900"}>
        <Nav />
        <main className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-sky-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-sky-900">
          <Main />
          {/* Features Section */}
          <section className="w-full max-w-5xl mx-auto my-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center bg-white dark:bg-slate-800 rounded-2xl shadow p-6 text-center">
                  {f.icon}
                  <h3 className="mt-4 mb-2 text-lg font-bold text-sky-700 dark:text-sky-300" style={{ fontFamily: 'vazir-bold' }}>{f.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base" style={{ fontFamily: 'vazir' }}>{f.desc}</p>
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
      </div>
    </>
  );
}

export default Home;
