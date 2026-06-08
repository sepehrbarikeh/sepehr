import Cart from '../articles/cart';
import { ProjectData } from './projectData';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from "next/link";
import { ChevronLeft, ChevronRight, FolderOpen } from 'lucide-react';

export const ProjectBox = () => {
  return (
    <section className="w-full max-w-6xl mx-auto my-16 px-2 md:px-0">
      <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 dark:text-sky-300 text-center mb-2" style={{ fontFamily: 'vazir-bold' }}>
        مینی پروژه‌ها
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-300 text-base md:text-lg mb-8" style={{ fontFamily: 'vazir' }}>
        مجموعه‌ای از پروژه‌های کوچک و کاربردی برای نمایش مهارت و تجربه من در توسعه وب
      </p>
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
          {ProjectData.map((project) => (
            <SwiperSlide key={project.id} className="flex items-center justify-center py-4">
              <Cart item={project} />
            </SwiperSlide>
          ))}
          <SwiperSlide className="flex items-center justify-center py-4">
            <Link href="/project"
              className="block w-full max-w-xs mb-7 rounded-xl shadow-md bg-white dark:bg-slate-800 transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer border border-gray-100 dark:border-slate-700 p-3 flex flex-col h-full">
              <div className="w-full h-32 flex items-center justify-center mb-2 rounded-lg bg-gray-50 dark:bg-slate-700">
                <FolderOpen size={36} className="text-sky-500" />
              </div>
              <h2 className="font-bold text-base text-gray-700 dark:text-gray-200 mb-2 text-center" style={{ fontFamily: 'vazir-bold' }}>
                مشاهده همه پروژه‌ها
              </h2>
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

