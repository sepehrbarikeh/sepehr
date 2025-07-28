import Link from "next/link";
import { Globe, MessageCircle, GraduationCap, Code, Zap, Layers, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-tr from-slate-900 via-slate-800 to-sky-900 text-gray-200 py-10 mt-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'vazir-bold' }}>دسترسی سریع</h3>
                    <ul className="space-y-2">
                        <li><Link className="hover:text-sky-400 transition" style={{ fontFamily: 'vazir' }} href='/articles'>مقالات</Link></li>
                        <li><Link className="hover:text-sky-400 transition" style={{ fontFamily: 'vazir' }} href='/about'>درباره من</Link></li>
                        <li><Link className="hover:text-sky-400 transition" style={{ fontFamily: 'vazir' }} href='/contact'>تماس با من</Link></li>
                    </ul>
                </div>
                {/* Tech Stack */}
                <div>
                    <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'vazir-bold' }}>تکنولوژی‌های این سایت</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                        <span className="flex items-center gap-2"><Zap className="text-sky-400 w-6 h-6" /> React</span>
                        <span className="flex items-center gap-2"><Code className="text-gray-100 w-6 h-6" /> Next.js</span>
                        <span className="flex items-center gap-2"><Layers className="text-sky-300 w-6 h-6" /> Tailwind</span>
                    </div>
                </div>
                {/* Socials */}
                <div>
                    <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'vazir-bold' }}>شبکه‌های اجتماعی</h3>
                    <div className="flex gap-6 text-2xl">
                        <a href="https://github.com/sepehrbarikeh" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><Github className="w-7 h-7" /></a>
                        <a href="https://www.linkedin.com/in/sepehr-barike-9bb9242a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><Linkedin className="w-7 h-7" /></a>
                        <a href="https://t.me/srbe_sepehr" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><MessageCircle className="w-7 h-7" /></a>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-gray-400 text-sm" style={{ fontFamily: 'vazir' }}>
                © {new Date().getFullYear()} سپهر باریکه | توسعه داده شده با عشق و کد ♥
            </div>
        </footer>
    )
}

export default Footer;

