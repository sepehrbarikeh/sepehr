import UserNav from "@/app/components/client/userNav"
import UserPanel from "@/app/components/client/userPanel"

const offers = [
    { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#' },
    { name: "Return when you're ready", description: '60 days of free returns', href: '#' },
    { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' },
]
const trendingProducts = [
    {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
            { name: 'Black', colorBg: '#111827' },
            { name: 'Brass', colorBg: '#FDE68A' },
            { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
    },
    {
        id: 2,
        name: 'Leather Long Wallet',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
        imageAlt: 'Hand stitched, orange leather long wallet.',
        availableColors: [
            { name: 'Black', colorBg: '#111827' },
            { name: 'White', colorBg: '#fff' },
            { name: 'Blue', colorBg: '#0400ff' },
        ],
    },
    // More products...
]
const collections = [
    {
        name: 'میز و دفتر کار',
        description: 'اکسسوری دفتر کار',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'خودبهسازی',
        description: 'مجلات و یادداشت برداری',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'سفر',
        description: 'ملزومات رفت و آمد روزانه',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]
const testimonials = [
    {
        id: 1,
        quote:
            'سفارش من خیلی سریع رسید محصول حتی بهتر از آن چیزی است که من امیدوار بودم. مشتری بسیار خوشحال در اینجا!',
        attribution: 'Sarah Peters, New Orleans',
    },
    {
        id: 2,
        quote:
            'مجبور شدم خریدی را پس بدهم که مناسب نبود. کل فرآیند آنقدر ساده بود که در نهایت دو مورد جدید سفارش دادم!',
        attribution: 'Kelly McPherson, Chicago',
    },
    {
        id: 3,
        quote:
            'حالا که برای تابستان در تعطیلات هستم، احتمالاً چند پیراهن دیگر سفارش خواهم داد. خیلی راحت است و می دانم که کیفیت همیشه وجود خواهد داشت.',
        attribution: 'Chris Paul, Phoenix',
    },
]
const footerNavigation = {
    products: [
        { name: 'کیف', href: '#' },
        { name: 'چای', href: '#' },
        { name: 'اجزا', href: '#' },
        { name: 'اکسسوری', href: '#' },
    ],
    customerService: [
        { name: 'ارتباط', href: '#' },
        { name: 'حمل و نقل', href: '#' },
        { name: 'مرجوعی', href: '#' },
        { name: 'گارانتی', href: '#' },
        { name: 'امنیت پرداخت', href: '#' },
        { name: 'سوالات متداول', href: '#' },
        { name: 'جستجوی فروشکاه', href: '#' },
    ],
    company: [
        { name: 'درباره ما', href: '#' },
        { name: 'پایداری', href: '#' },
        { name: 'مطبوعات', href: '#' },
        { name: 'مشاغل', href: '#' },
        { name: 'شرایط و ضوابط', href: '#' },
        { name: 'حریم خصوصی', href: '#' },
    ],
    legal: [
        { name: 'شرایط استفاده از خدمات', href: '#' },
        { name: 'سیاست مرجوع کالا', href: '#' },
        { name: 'سیاست حفظ حریم خصوصی', href: '#' },
        { name: 'سیاست حمل و نقل', href: '#' },
    ],
}


const User = () => {

    return (
        <>
            <UserNav />
            <div className=' mt-0.5'>
                <main>
                    {/* Hero */}
                    <div className="flex flex-col border-b border-gray-200 lg:border-0">
                        <div className="relative">
                            <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
                            <div className="relative bg-gray-100 lg:bg-transparent">
                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                                    <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                                        <div className="lg:pl-16">
                                            <h1 style={{ fontFamily: 'vazir' }} className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                                تمرکز روی مهمترین ها
                                            </h1>
                                            <p style={{ fontFamily: 'vazir' }} className="mt-4 text-xl text-gray-600">
                                                همه نمودارها، تاریخ‌گزین‌ها و اعلان‌ها در جهان نمی‌توانند از بررسی برخی موارد روی کارت کاغذی جلوگیری کنند.
                                            </p>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    style={{ fontFamily: 'vazir' }}
                                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                                                >
                                                    فروشگاه
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-48 w-full sm:h-64 lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-1/2">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Trending products */}
                    <section aria-labelledby="trending-heading" className="bg-white">
                        <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
                            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                                <h2 style={{ fontFamily: 'vazir' }} id="trending-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                                    محصولات پرطرفدار
                                </h2>
                                <a style={{ fontFamily: 'vazir' }} href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                                    مشاهده همه
                                    <span aria-hidden="true"> &larr;</span>
                                </a>
                            </div>

                            <div className="relative mt-8">
                                <div className="relative w-full overflow-x-auto">
                                    <ul
                                        role="list"
                                        className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                                    >
                                        {trendingProducts.map((product) => (
                                            <li key={product.id} className="inline-flex w-64 mx-1 flex-col text-center lg:w-auto">
                                                <div className="group relative">
                                                    <div className="aspect-h-1 h-72 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                                                        <img
                                                            src={product.imageSrc}
                                                            alt={product.imageAlt}
                                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                        />
                                                    </div>
                                                    <div className="mt-6">
                                                        <p className="text-sm text-gray-500">{product.color}</p>
                                                        <h3 className="mt-1 font-semibold text-gray-900">
                                                            <a href={product.href}>
                                                                <span className="absolute inset-0" />
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                        <p className="mt-1 text-gray-900">{product.price}</p>
                                                    </div>
                                                </div>

                                                <h4 className="sr-only">Available colors</h4>
                                                <ul role="list" className="mt-auto flex items-center justify-center pt-6">
                                                    {product.availableColors.map((color) => (
                                                        <li
                                                            key={color.name}
                                                            className="h-4 w-4 rounded-full border mx-1 border-black border-opacity-10"
                                                            style={{ backgroundColor: color.colorBg }}
                                                        >
                                                            <span className="sr-only">{color.name}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 px-4 sm:hidden">
                                <a style={{ fontFamily: 'vazir' }} href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                    مشاهده همه
                                    <span aria-hidden="true"> &larr;</span>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Collections */}
                    <section aria-labelledby="collections-heading" className="bg-gray-100">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                                <h2 style={{ fontFamily: 'vazir' }} id="collections-heading" className="text-2xl font-bold text-gray-900">
                                    مجموعه ها
                                </h2>

                                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                    {collections.map((collection) => (
                                        <div key={collection.name} className="group relative">
                                            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                                <img
                                                    src={collection.imageSrc}
                                                    alt={collection.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <h3 className="mt-6 text-sm text-gray-500">
                                                <a href={collection.href}>
                                                    <span style={{ fontFamily: 'vazir' }} className="absolute inset-0" />
                                                    {collection.name}
                                                </a>
                                            </h3>
                                            <p style={{ fontFamily: 'vazir' }} className="text-base mt-1 font-semibold text-gray-700">{collection.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sale and testimonials */}
                    <div className="relative overflow-hidden">
                        {/* Decorative background image and gradient */}
                        <div aria-hidden="true" className="absolute inset-0">
                            <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="absolute inset-0 bg-white bg-opacity-75" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
                        </div>

                        {/* Sale */}
                        <section
                            aria-labelledby="sale-heading"
                            className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
                        >
                            <div className="mx-auto max-w-2xl lg:max-w-none">
                                <h2 style={{ fontFamily: 'vazir' }} id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                    25% سود بیشتر با خرید در طرح فروش یکباره ما
                                </h2>
                                <p style={{ fontFamily: 'vazir' }} className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                                    اقلام مورد علاقه خود را تا زمانی که در انبار هستند دریافت کنید.
                                </p>
                                <a
                                    style={{ fontFamily: 'vazir' }}
                                    href="#"
                                    className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
                                >
                                    دسترسی به فروش یکباره ما
                                </a>
                            </div>
                        </section>

                        {/* Testimonials */}
                        <section
                            aria-labelledby="testimonial-heading"
                            className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
                        >
                            <div className="mx-auto max-w-2xl lg:max-w-none">
                                <h2 style={{ fontFamily: 'vazir' }} id="testimonial-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                                    مردم در مورد ما چه میگویند؟
                                </h2>

                                <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                                    {testimonials.map((testimonial) => (
                                        <blockquote key={testimonial.id} className="sm:flex lg:block">
                                            <svg
                                                width={24}
                                                height={18}
                                                viewBox="0 0 24 18"
                                                aria-hidden="true"
                                                className="flex-shrink-0 text-gray-300"
                                            >
                                                <path
                                                    d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <div className="mt-8 sm:mr-6 sm:mt-0 lg:mr-0 lg:mt-10">
                                                <p className="text-lg text-gray-600">{testimonial.quote}</p>
                                                <cite className="mt-4 block font-semibold not-italic text-gray-900">
                                                    {testimonial.attribution}
                                                </cite>
                                            </div>
                                        </blockquote>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                <footer aria-labelledby="footer-heading" className="bg-white mb-20">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="border-t border-gray-200">
                            <div className="pb-20 pt-10">
                                <div className="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
                                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                                        <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                                            <div>
                                                <h3 style={{ fontFamily: 'vazir' }} className=" text-sm font-semibold text-gray-900">محصولات</h3>
                                                <ul role="list" className="mt-6 space-y-6">
                                                    {footerNavigation.products.map((item) => (
                                                        <li key={item.name} className="text-sm">
                                                            <a href={item.href} style={{ fontFamily: 'vazir' }} className="text-gray-500 hover:text-gray-600">
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 style={{ fontFamily: 'vazir' }} className="text-sm font-semibold text-gray-900">خدمات مشتریان</h3>
                                                <ul role="list" className="mt-6 space-y-6">
                                                    {footerNavigation.customerService.map((item) => (
                                                        <li key={item.name} className="text-sm">
                                                            <a href={item.href} style={{ fontFamily: 'vazir' }} className="text-gray-500 hover:text-gray-600">
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                                            <div>
                                                <h3 style={{ fontFamily: 'vazir' }} className="text-sm font-semibold text-gray-900">درباره ما</h3>
                                                <ul role="list" className="mt-6 space-y-6">
                                                    {footerNavigation.company.map((item) => (
                                                        <li key={item.name} className="text-sm">
                                                            <a href={item.href} style={{ fontFamily: 'vazir' }} className="text-gray-500 hover:text-gray-600">
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 style={{ fontFamily: 'vazir' }} className="text-sm font-semibold text-gray-900">حقوقی</h3>
                                                <ul role="list" className="mt-6 space-y-6">
                                                    {footerNavigation.legal.map((item) => (
                                                        <li key={item.name} className="text-sm">
                                                            <a href={item.href} style={{ fontFamily: 'vazir' }} className="text-gray-500 hover:text-gray-600">
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
                                <div className="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
                                    <div className="mx-auto max-w-sm">
                                        <h3 style={{ fontFamily: 'vazir' }} className="font-semibold text-gray-900">برای دریافت خبرنامه ما ثبت نام کنید</h3>
                                        <p style={{ fontFamily: 'vazir' }} className="mt-2 text-sm text-gray-500">
                                            آخرین اخبار، مقالات و منابع، به صورت هفتگی به صندوق ورودی شما ارسال می شود.
                                        </p>
                                        <form className="mt-4 sm:mt-6 sm:flex">
                                            <label htmlFor="email-address" className="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                id="email-address"
                                                type="text"
                                                autoComplete="email"
                                                required
                                                className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            />
                                            <div className="mt-3 sm:mr-4 sm:mt-0 sm:flex-shrink-0">
                                                <button
                                                    style={{ fontFamily: 'vazir' }}
                                                    type="submit"
                                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
                                                >
                                                    ثبت نام
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="relative mt-6 flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:mt-0">
                                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                                        <img
                                            src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                                            alt=""
                                            className="h-full w-full object-cover object-center saturate-0 filter"
                                        />
                                        <div className="absolute inset-0 bg-indigo-600 bg-opacity-90" />
                                    </div>
                                    <div className="relative mx-auto max-w-sm text-center">
                                        <h3 style={{ fontFamily: 'vazir' }} className="text-2xl font-bold tracking-tight text-white">دسترسی زودهنگام</h3>
                                        <p className="mt-2 text-gray-200">
                                            آیا در خبرنامه ثبت نام کردید؟ کلمه کلیدی که برای شما ارسال کردیم برای دسترسی استفاده کنید{' '}
                                            <a href="#" style={{ fontFamily: 'vazir' }} className="whitespace-nowrap font-bold text-white hover:text-gray-200">
                                                <span aria-hidden="true"> &larr;</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="py-10 md:flex md:items-center md:justify-between">
                            <div className="text-center md:text-right">
                                <p className="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
                            </div>

                            <div className="mt-4 flex items-center justify-center md:mt-0">
                                <div className="flex space-x-8">
                                    {footerNavigation.bottomLinks.map((item) => (
                                        <a key={item.name} href={item.href} className="text-sm text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                                <div className="mr-6 border-l border-gray-200 pl-6">
                                    <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="mr-3 text-sm">Change</span>
                                        <span className="sr-only">location and currency</span>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </footer>
            </div>
            <UserPanel />
        </>
    )
}


export default User