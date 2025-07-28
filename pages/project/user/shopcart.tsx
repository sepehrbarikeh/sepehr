import UserNav from "@/app/components/client/userNav"
import UserPanel from "@/app/components/client/userPanel"
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'


const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Sienna',
        inStock: true,
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        inStock: false,
        leadTime: '3–4 weeks',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35.00',
        color: 'White',
        inStock: true,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
]
const relatedProducts = [
    {
        id: 1,
        name: 'Billfold Wallet',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
        imageAlt: 'Front of Billfold Wallet in natural leather.',
        price: '$118',
        color: 'Natural',
    },
    // More products...
]


const incentives = [
    {
        name: 'ارسال رایگان',
        description: "ارسال رایگان به سراسر کشور",
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
        name: 'پشتیبانی 24/7',
        description: 'پشتیبانی رایگان 7روز هفته و 24 ساعته',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
        name: 'خرید سریع ',
        description: "خرید سریع و بدون معطلی با رابط کاربری کارآمد",
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
]



const ShopCart = () => {


    return (
        <>
            <UserNav />
            <div className="">

                <p style={{ fontFamily: 'vazir' }} className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                    ارسال رایگان برای سفارش بالای 100$
                </p>

                <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 style={{ fontFamily: 'vazir' }} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">سبد خرید</h1>

                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 style={{ fontFamily: 'vazir' }} id="cart-heading" className="sr-only">
                                محصولات سبد خرید شما
                            </h2>

                            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                                {products.map((product, productIdx) => (
                                    <li key={product.id} className="flex py-6 sm:py-10">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                                            />
                                        </div>

                                        <div className="mr-4 flex flex-1 flex-col justify-between sm:mr-6">
                                            <div className="relative pl-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pl-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className="mt-1 flex text-sm">
                                                        <p className="text-gray-500">{product.color}</p>
                                                        {product.size ? (
                                                            <p className="mr-4 border-l border-gray-200 pr-4 text-gray-500">{product.size}</p>
                                                        ) : null}
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                                </div>

                                                <div className="mt-4 sm:mt-0 sm:pl-9">
                                                    <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                                                        Quantity, {product.name}
                                                    </label>
                                                    <select
                                                        id={`quantity-${productIdx}`}
                                                        name={`quantity-${productIdx}`}
                                                        className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                    >
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                    </select>

                                                    <div className="absolute left-0 top-0">
                                                        <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Remove</span>
                                                            <XMarkIconMini className="h-5 w-5" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                                {product.inStock ? (
                                                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                                                ) : (
                                                    <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                                                )}

                                                <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                        >
                            <h2 style={{ fontFamily: 'vazir' }} id="summary-heading" className="text-lg font-medium text-gray-900">
                                خلاصه سفارش
                            </h2>

                            <dl className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt style={{ fontFamily: 'vazir' }} className="text-sm text-gray-600">مجموع</dt>
                                    <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="flex items-center text-sm text-gray-600">
                                        <span style={{ fontFamily: 'vazir' }}>هزینه حمل و نقل</span>
                                        <a href="#" className="mr-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Learn more about how shipping is calculated</span>
                                            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                        </a>
                                    </dt>
                                    <dd style={{ fontFamily: 'vazir' }} className="text-sm font-medium text-gray-900">$5.00</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="flex text-sm text-gray-600">
                                        <span style={{ fontFamily: 'vazir' }}>هزینه مالیات</span>
                                        <a href="#" className="mr-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Learn more about how tax is calculated</span>
                                            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                        </a>
                                    </dt>
                                    <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt style={{ fontFamily: 'vazir' }} className="text-base font-medium text-gray-900">مبلغ قابل پرداخت</dt>
                                    <dd className="text-base font-medium text-gray-900">$112.32</dd>
                                </div>
                            </dl>

                            <div className="mt-6">
                                <button
                                    style={{ fontFamily: 'vazir' }}
                                    type="submit"
                                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    خرید
                                </button>
                            </div>
                        </section>
                    </form>

                    {/* Related products */}
                    <section aria-labelledby="related-heading" className="mt-24">
                        <h2 style={{ fontFamily: 'vazir' }} id="related-heading" className="text-lg font-medium text-gray-900">
                            شاید شما دوست داشته باشید...
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {relatedProducts.map((relatedProduct) => (
                                <div key={relatedProduct.id} className="group relative">
                                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={relatedProduct.imageSrc}
                                            alt={relatedProduct.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={relatedProduct.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {relatedProduct.name}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>

            

            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                                <div className="sm:flex-shrink-0">
                                    <div className="flow-root">
                                        <img className="mx-auto h-24 w-28" src={incentive.imageSrc} alt="" />
                                    </div>
                                </div>
                                <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                                    <h3 style={{ fontFamily: 'vazir' }} className="text-base font-medium text-gray-900">{incentive.name}</h3>
                                    <p style={{ fontFamily: 'vazir' }} className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <UserPanel />
        </>
    )
}


export default ShopCart