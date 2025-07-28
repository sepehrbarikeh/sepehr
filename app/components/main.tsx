
import Image from 'next/image';
import main from '@/public/image/main.svg'
import Link from 'next/link';

const Main = () => {
    return (
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 py-12 md:py-20 bg-gradient-to-br from-sky-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 rounded-2xl shadow-lg mt-8 mb-8">
            <div className="flex-1 flex flex-col items-start md:items-start text-right md:pr-12">
                <h1 style={{ fontFamily: 'vazir-bold' }} className="dark:text-gray-100 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                    سلام! من سپهر باریکه‌ام
                </h1>
                <p style={{ fontFamily: 'vazir' }} className="dark:text-gray-300 text-gray-700 text-lg md:text-2xl mb-6 max-w-xl">
                    توسعه‌دهنده فرانت‌اند و عاشق React. هدفم خلق تجربه‌های کاربری مدرن و کارآمده که زندگی دیجیتال رو ساده‌تر و لذت‌بخش‌تر کنه. همیشه دنبال یادگیری و رشد، آماده همکاری و چالش‌های جدید!
                </p>
                <Link href="/contact" className="inline-block px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg shadow transition-all duration-200" style={{ fontFamily: 'vazir-bold' }}>
                    ارتباط با من
                </Link>
            </div>
            <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
                <div className="overflow-hidden rounded-2xl shadow-xl w-64 h-56 md:w-96 md:h-72  dark:bg-slate-800 flex items-center justify-center">
                    <Image src={main} alt='Sepehr Barikeh' className="object-cover w-full h-full" />
                </div>
            </div>
        </section>
    )
}

export default Main;