import Image from "next/image";
import Link from "next/link";

function getCategoryClass(category: string) {
    const baseClass = 'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border backdrop-blur-sm transition-colors duration-300';
    
    switch (category) {
        case 'جاوااسکریپت':
            return `${baseClass} bg-yellow-500/10 text-yellow-400 border-yellow-500/20 group-hover:bg-yellow-500/20`;
        case 'آموزشی':
            return `${baseClass} bg-red-500/10 text-red-400 border-red-500/20 group-hover:bg-red-500/20`;
        case 'پایتون':
            return `${baseClass} bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20`;
        case 'php':
            return `${baseClass} bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:bg-indigo-500/20`;
        case 'توسعه وب':
            return `${baseClass} bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:bg-emerald-500/20`;
        case 'Component':
            return `${baseClass} bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 group-hover:bg-fuchsia-500/20`;
        case 'Dashbord':
            return `${baseClass} bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:bg-cyan-500/20`;
        default:
            return `${baseClass} bg-zinc-500/10 text-zinc-400 border-zinc-500/20 group-hover:bg-zinc-500/20`;
    }
}

const Cart = (item: any) => {
    const article = item?.item;

    return (
        <Link 
            href={`${article?.link ? article?.link : ''}`}
            className="block w-full max-w-xs rounded-2xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)] cursor-pointer group"
        >
            <div className="p-4 flex flex-col h-[290px] justify-between">
                <div>
                    {/* باکس تصویر مقاله */}
                    <div className="w-full h-32 flex items-center justify-center mb-3 overflow-hidden rounded-xl bg-white/[0.02] border border-white/[0.04] relative">
                        {article?.Image && (
                            <Image 
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                                alt={article?.title || "تصویر مقاله"} 
                                src={article?.Image}
                                width={300}
                                height={130}
                            />
                        )}
                    </div>
                    
                    {/* عنوان مقاله */}
                    <h2 
                        className="font-bold text-base text-zinc-300 group-hover:text-white transition-colors duration-300 line-clamp-2 leading-snug" 
                        style={{ fontFamily: 'vazir-bold' }}
                    >
                        {article?.title}
                    </h2>
                </div>
                
                {/* بخش دسته‌بندی انتهای کارت */}
                <div className="mt-auto pt-2 flex justify-start">
                    <span className={getCategoryClass(article?.category)}>
                        {article?.category}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default Cart;