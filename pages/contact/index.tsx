import Nav from "@/app/components/nav"
import { Mail, Github, Linkedin, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
    return (
        <>
            <Nav />
            <section className="w-full max-w-3xl mx-auto my-12 px-4 py-10 bg-gradient-to-tr from-slate-100 via-white to-sky-100 dark:from-slate-900 dark:via-slate-800 dark:to-sky-900 rounded-2xl shadow-lg">
                <h1 className="text-3xl md:text-4xl font-extrabold text-sky-700 dark:text-sky-300 mb-4" style={{ fontFamily: 'vazir-bold' }}>
                    ارتباط با من
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-8 mb-8" style={{ fontFamily: 'vazir' }}>
                    برای ارتباط با من می‌توانید از طریق شبکه‌های اجتماعی زیر اقدام کنید یا ایمیل بزنید. منتظر پیام شما هستم!
                </p>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    <a href="mailto:sepehr.frlncr@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow hover:bg-sky-50 dark:hover:bg-slate-700 transition text-sky-700 dark:text-sky-300 font-bold text-lg">
                        <Mail className="w-7 h-7" /> ایمیل
                    </a>
                    <a href="https://github.com/sepehrbarikeh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow hover:bg-sky-50 dark:hover:bg-slate-700 transition text-sky-700 dark:text-sky-300 font-bold text-lg">
                        <Github className="w-7 h-7" /> گیت‌هاب
                    </a>
                    <a href="https://www.linkedin.com/in/sepehr-barike-9bb9242a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow hover:bg-sky-50 dark:hover:bg-slate-700 transition text-sky-700 dark:text-sky-300 font-bold text-lg">
                        <Linkedin className="w-7 h-7" /> لینکدین
                    </a>
                    <a href="https://t.me/srbe_sepehr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow hover:bg-sky-50 dark:hover:bg-slate-700 transition text-sky-700 dark:text-sky-300 font-bold text-lg">
                        <MessageCircle className="w-7 h-7" /> تلگرام
                    </a>
                    <a href="tel:+989363311507" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl shadow hover:bg-sky-50 dark:hover:bg-slate-700 transition text-sky-700 dark:text-sky-300 font-bold text-lg">
                        <Phone className="w-7 h-7" /> تلفن
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contact

