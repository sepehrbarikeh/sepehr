import { Data } from "./article";
import Cart from "./cart";
import { ChevronLeft, ChevronRight, ListChecks } from 'lucide-react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from "next/link";

export const ScrollBox = () => {
  return (
    <section className="w-full max-w-5xl mx-auto my-16 px-2 md:px-0">
      <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700 dark:text-sky-300 text-center mb-8" style={{ fontFamily: 'vazir-bold' }}>
        آخرین مقالات
      </h2>
      <div className="relative rounded-2xl shadow-xl bg-white dark:bg-slate-800 p-4 md:p-6">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={28}
          slidesPerView={1}
          navigation={true}
          pagination={false}
          className="mySwiper rounded-xl"
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {Data.map((article) => (
            <SwiperSlide key={article.id} className="flex items-center justify-center py-4">
              <Cart item={article} />
            </SwiperSlide>
          ))}
          <SwiperSlide className="flex items-center justify-center py-4">
            <Link href="/articles" className="w-full max-w-xs h-full flex flex-col items-center justify-center rounded-xl border-2 border-transparent bg-gradient-to-br from-sky-100 via-white to-sky-200 dark:from-slate-800 dark:via-slate-900 dark:to-sky-800 hover:from-sky-200 hover:to-sky-300 dark:hover:from-slate-700 dark:hover:to-slate-900 transition shadow-lg p-3 md:p-6 relative group min-h-[260px] min-w-[240px] max-w-xs">
              <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-sky-400 to-sky-600 dark:from-sky-700 dark:to-sky-400 rounded-full shadow-lg group-hover:scale-110 transition-transform mb-2">
                <ListChecks size={28} className="text-white" />
              </span>
              <span className="text-sky-700 dark:text-sky-200 font-bold text-lg block text-center" style={{ fontFamily: 'vazir-bold' }}>
                مشاهده همه مقالات
              </span>
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center gap-4 mt-6">
          <button className="swiper-button-prev" aria-label="قبلی" />
          <button className="swiper-button-next" aria-label="بعدی" />
        </div>
      </div>
    </section>
  );
};

