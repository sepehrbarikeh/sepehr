import Nav from "@/app/components/nav"
import { Download } from "lucide-react"

const aboutUs = () => {
    return (
        <div className="dark:bg-slate-900">
            <Nav />
            <section className="w-full max-w-3xl mx-auto my-12 px-4 py-10 bg-gradient-to-tr from-slate-100 via-white to-sky-100 dark:from-slate-900 dark:via-slate-800 dark:to-sky-900 rounded-2xl shadow-lg">
                <h1 className="text-3xl md:text-4xl font-extrabold text-sky-700 dark:text-sky-300 mb-4" style={{ fontFamily: 'vazir-bold' }}>
                    درباره من
                </h1>
                <div className="space-y-6 dark:text-white leading-relaxed text-right">
                    <p>
                        توسعه‌دهنده فرانت‌اند با تمرکز بر React و Next.js، با تجربه‌ی عملی در طراحی و
                        پیاده‌سازی کامل سامانه‌های مدیریتی در سطح واقعی و دولتی. پروژه‌های خود را از
                        صفر تا صد انجام داده‌ام؛ شامل طراحی رابط کاربری، مدیریت وضعیت، اتصال به API،
                        پیاده‌سازی احراز هویت، گزارش‌گیری و دیپلوی نهایی. علاقه‌مند به توسعه رابط‌های
                        مقیاس‌پذیر، تجربه کاربری حرفه‌ای، و استفاده از معماری ماژولار. به دنبال فرصت‌هایی
                        برای رشد حرفه‌ای و مشارکت جدی در پروژه‌های واقعی هستم.
                    </p>

                    <h2 className="text-xl font-bold">سوابق شغلی 💼</h2>
                    <p>
                        <strong>توسعه‌دهنده فرانت‌اند – (تبریز) X Code</strong><br />
                        از آذر ۱۴۰۳ تا کنون<br />
                        • توسعه کامل سامانه مدیریتی برای شرکت آب منطقه‌ای<br />
                        • طراحی داشبورد مدیریتی با نمودارهای تعاملی (ECharts)<br />
                        • پیاده‌سازی احراز هویت، سطح دسترسی و مدیریت کاربران<br />
                        • ساخت فرم‌های داینامیک با Formik و اعتبارسنجی با Yup<br />
                        • استفاده از SWR برای کشینگ سمت کلاینت و بهینه‌سازی واکشی داده<br />
                        • طراحی نوبار واکنش‌گرا، سایدبار چند حالته و تعامل‌های حرفه‌ای در UI
                    </p>

                    <h2 className="text-xl font-bold">پروژه‌ها 📁</h2>
                    <p>
                        <strong>سامانه مدیریت داخلی آب منطقه‌ای آذربایجان شرقی</strong><br />
                        Next.js – SWR – Axios – Tailwind – ECharts – Context API – Formik – Yup<br />
                        توسعه کامل پنل مدیریتی شامل احراز هویت، فرم‌سازی، سطوح دسترسی، گزارش‌گیری و دیپلوی نهایی
                    </p>
                    <p>
                        <strong>سایت شخصی </strong><br />
                        Next.js – Particle.js – Swiper – Tailwind<br />
                        نمایش رزومه، اطلاعات تماس، و نمونه‌کارها با انیمیشن و رابط تعاملی حرفه‌ای
                    </p>

                    <h2 className="text-xl font-bold">زبان‌ها</h2>
                    <p>JavaScript, TypeScript, Golang</p>

                    <h2 className="text-xl font-bold">کتابخانه‌ها و فریم‌ورک‌ها</h2>
                    <p>ReactJS, NextJS, Redux Toolkit, SWR, Formik, Yup, Echo (Golang)</p>

                    <h2 className="text-xl font-bold">طراحی رابط کاربری</h2>
                    <p>Tailwind CSS, CSS Modules, Swiper, Rive, Particle.js</p>

                    <h2 className="text-xl font-bold">مدیریت داده و API</h2>
                    <p>Axios, RESTful APIs</p>

                    <h2 className="text-xl font-bold">ابزارها</h2>
                    <p>Toastify, ECharts, Git</p>

                    <h2 className="text-xl font-bold">ویژگی‌ها</h2>
                    <p>طراحی ریسپانسیو، دارک مود، معماری ماژولار</p>

                    <h2 className="text-xl font-bold">تحصیلات 🎓</h2>
                    <p>دانشگاه آزاد اسلامی – واحد اسلامشهر</p>

                    <h2 className="text-xl font-bold">زبان‌ها 🌐</h2>
                    <p>
                        • فارسی: زبان مادری<br />
                        • انگلیسی: متوسط (مطالعه مستندات، آموزش‌ها، ارتباط اولیه)
                    </p>
                </div>
            </section>
            <div className="flex justify-center items-center">
                <a
                    href="/files/cv.pdf"
                    download
                    className="flex mb-8 items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg shadow transition-all duration-200"
                    style={{ fontFamily: 'vazir' }}>
                    <Download className="w-7 h-7" />
                    دریافت رزومه
                </a>
            </div>
        </div>
    )
}

export default aboutUs



