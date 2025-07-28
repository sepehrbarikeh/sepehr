import ModernSlider from "./shared/ModernSlider";
import { ProjectData } from "./sample-project/projectData";
import Cart from "./articles/cart";
import Link from "next/link";
import { FileTerminal } from 'lucide-react';


const LastProject = () => {
    return (
        <section className="w-full max-w-6xl mx-auto my-16 px-2 md:px-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 dark:text-sky-300 text-center mb-2" style={{ fontFamily: 'vazir-bold' }}>
                مینی پروژه‌ها
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-300 text-base md:text-lg mb-8" style={{ fontFamily: 'vazir' }}>
                مجموعه‌ای از پروژه‌های کوچک و کاربردی برای نمایش مهارت و تجربه من در توسعه وب
            </p>
            <ModernSlider>
                {ProjectData.map((project) => (
                    <Cart key={project.id} item={project} />
                ))}
                  <Link href="/project" className="w-full max-w-xs flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-gradient-to-br from-sky-100 via-white to-sky-200 dark:from-slate-800 dark:via-slate-900 dark:to-sky-800 hover:from-sky-200 hover:to-sky-300 dark:hover:from-slate-700 dark:hover:to-slate-900 transition shadow-lg p-3 md:p-6 relative group min-h-[222px] min-w-[240px] max-w-xs">
                  <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-sky-400 to-sky-600 dark:from-sky-700 dark:to-sky-400 rounded-full shadow-lg group-hover:scale-110 transition-transform mb-2">
                    <FileTerminal size={28} className="text-white" />
                  </span>
                  <span className="text-sky-700 dark:text-sky-200 font-bold text-lg block text-center" style={{ fontFamily: 'vazir-bold' }}>
                  مشاهده همه پروژه‌ها
                  </span>
                </Link>
            </ModernSlider>
        </section>
    )
}

export default LastProject

