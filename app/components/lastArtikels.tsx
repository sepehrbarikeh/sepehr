import ModernSlider from "./shared/ModernSlider";
import { Data } from "./articles/article";
import Cart from "./articles/cart";
import Link from "next/link";
import { ListChecks } from 'lucide-react';

const LastArtikels = () => {
    return (
        <section className="w-full max-w-6xl mx-auto my-12 px-2 md:px-0">
            <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700 dark:text-sky-300 mb-2" style={{ fontFamily: 'vazir-bold' }}>
                    آخرین مقالات
                </h2>
                <p className="text-gray-500 dark:text-gray-300 text-base md:text-lg" style={{ fontFamily: 'vazir' }}>
                    جدیدترین مطالب آموزشی و تجربیات من در حوزه برنامه‌نویسی و توسعه وب
                </p>
            </div>
            <ModernSlider>
                {Data.map((article) => (
                    <Cart key={article.id} item={article} />
                ))}
                <Link href="/articles" className="w-full max-w-xs flex flex-col items-center justify-center rounded-2xl border-2 border-transparent bg-gradient-to-br from-sky-100 via-white to-sky-200 dark:from-slate-800 dark:via-slate-900 dark:to-sky-800 hover:from-sky-200 hover:to-sky-300 dark:hover:from-slate-700 dark:hover:to-slate-900 transition shadow-lg p-3 md:p-6 relative group min-h-[220px] min-w-[240px] max-w-xs">
                  <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-sky-400 to-sky-600 dark:from-sky-700 dark:to-sky-400 rounded-full shadow-lg group-hover:scale-110 transition-transform mb-2">
                    <ListChecks size={28} className="text-white" />
                  </span>
                  <span className="text-sky-700 dark:text-sky-200 font-bold text-lg block text-center" style={{ fontFamily: 'vazir-bold' }}>
                    مشاهده همه مقالات
                  </span>
                </Link>
            </ModernSlider>
        </section>
    )
}

export default LastArtikels



// grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3