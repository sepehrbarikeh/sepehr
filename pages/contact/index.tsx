import Nav from "@/app/components/nav"
import { Mail, Github, Linkedin, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
    // آرایه‌ای از راه‌های ارتباطی برای تمیزتر شدن ساختار کد و جلوگیری از تکرار HTML
    const CONTACT_LINKS = [
        { name: "ایمیل کاری", href: "mailto:sepehr.frlncr@gmail.com", icon: <Mail className="w-5 h-5" />, label: "sepehr.frlncr@gmail.com" },
        { name: "گیت‌هاب", href: "https://github.com/sepehrbarikeh", target: "_blank", icon: <Github className="w-5 h-5" />, label: "github.com/sepehrbarikeh" },
        { name: "لینکدین", href: "https://www.linkedin.com/in/sepehr-barike-9bb9242a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", target: "_blank", icon: <Linkedin className="w-5 h-5" />, label: "linkedin.com/in/sepehr" },
        { name: "تلگرام", href: "https://t.me/srbe_sepehr", target: "_blank", icon: <MessageCircle className="w-5 h-5" />, label: "@srbe_sepehr" },
        { name: "شماره تماس", href: "tel:+989363311507", icon: <Phone className="w-5 h-5" />, label: "09363311507" },
    ];

    return (
        <>
            <Nav />
            {/* کانتینر پس‌زمینه برای هماهنگی با عمق رنگی صفحات دیگر و پدینگ مناسب برای ناوبار فیکس شده */}
            <div className="min-h-screen bg-[#03030f] pt-28 pb-16 px-4 md:px-8">
                
                <section dir="rtl" className="w-full max-w-3xl mx-auto bg-white/[0.01] backdrop-blur-xl border border-white/[0.04] rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                    
                    {/* هدر بخش تماس با من */}
                    <div className="border-b border-white/[0.04] pb-6 mb-8">
                        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'vazir-bold' }}>
                            ارتباط با من ✉️
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed text-justify" style={{ fontFamily: 'vazir' }}>
                            برای گفتگو درباره پروژه‌ها، همکاری‌های فنی در سطح سازمانی و دولتی، یا صرفاً گپ زدن در مورد معماری‌های ماژولار و دنیای فول‌استک، می‌توانید از طریق راه‌های زیر با من در تماس باشید. همیشه از چالش‌ها و ایده‌های جدید استقبال می‌کنم.
                        </p>
                    </div>

                    {/* گرید راه‌های ارتباطی (ریسپانسیو: ۱ ستونه در موبایل، ۲ ستونه در دسکتاپ) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {CONTACT_LINKS.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target={link.target}
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-zinc-300 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/[0.03] transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4">
                                    {/* باکس آیکون با افکت هاور نئونی */}
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300">
                                        {link.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold" style={{ fontFamily: 'vazir-bold' }}>{link.name}</span>
                                        <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors mt-0.5 truncate max-w-[180px] sm:max-w-[220px] font-mono" dir="ltr">
                                            {link.label}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* فلش راهنما در سمت چپ کارت */}
                                <span className="text-sm text-zinc-600 group-hover:text-purple-400 transition-colors pl-2 font-mono">
                                    {"->"}
                                </span>
                            </a>
                        ))}
                    </div>

                </section>
            </div>
        </>
    )
}

export default Contact;