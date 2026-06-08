import { Data } from "./article"
import Cart from "./cart"

const Articles = ({ className }: { className?: string }) => {
    return (
        <section className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8" dir="rtl">
            
            {/* کانتینر اصلی شیشه‌ای متناسب با دیزاین جدید سایت */}
            <div className="bg-white/[0.01] backdrop-blur-xl border border-white/[0.04] rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                
                {/* هدر بخش مقالات */}
                <div className="mb-8 border-b border-white/[0.04] pb-5">
                    <h2 className="text-xl font-black text-white tracking-tight" style={{ fontFamily: 'vazir-bold' }}>
                        آخرین مقالات ✍️
                    </h2>
                    <p className="text-xs text-zinc-400 mt-1" style={{ fontFamily: 'vazir' }}>
                        اشتراک دانش، تجربیات فنی و چالش‌های توسعه فول‌استک
                    </p>
                </div>

                {/* گرید مقالات */}
                <ul 
                    role="list" 
                    className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className || ''}`}
                > 
                    {Data.map((article) => (
                        <li 
                            key={article.id} 
                            className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-2xl"
                        >
                            <Cart item={article} />
                        </li>
                    ))}
                </ul>
                
            </div>
        </section>
    )
}

export default Articles;