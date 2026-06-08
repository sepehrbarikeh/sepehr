import UserNav from "@/app/components/client/userNav"
import UserPanel from "@/app/components/client/userPanel"
import Image from "next/image"

const orders = [
    {
        number: 'WU88191111',
        date: 'January 22, 2021',
        datetime: '2021-01-22',
        invoiceHref: '#',
        total: '$104.00',
        products: [
            {
                id: 1,
                name: "Men's 3D Glasses Artwork Tee",
                href: '#',
                price: '$36.00',
                status: 'delivered',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-04-product-01.jpg',
                imageAlt: 'Black tee with intersecting red, white, and green curved lines on front.',
            },
            {
                id: 2,
                date: 'June 21, 2021',
                datetime: '2021-06-21',
                status: 'delivered',
                price: '$74.00',
                name: 'Micro Backpack',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-02.jpg',
                imageAlt: 'Light grey canvas backpack with black handle, zipper, and edge details.',
            },
            // More orders...
        ],
    },
    {
        number: 'XR55781111',
        date: 'September 18, 2023',
        datetime: '2023-09-18',
        invoiceHref: '#',
        total: '$89.00',
        products: [
            {
                id: 1,
                date: 'June 6, 2021',
                datetime: '2021-06-06',
                status: 'cancelled',
                price: '$40.00',
                name: 'Drawtop Canister',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-03.jpg',
                imageAlt: 'Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.',
            },
            {
                id: 2,
                date: 'May 24, 2021',
                datetime: '2021-05-24',
                status: 'delivered',
                price: '$89.00',
                name: 'High Wall Tote',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg',
                imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
            },
            {
                id: 3,
                date: 'July 12, 2021',
                datetime: '2021-07-12',
                status: 'out-for-delivery',
                price: '$11.00',
                name: 'Kicks Carrier',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-01.jpg',
                imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
            },
        ]
    }
    // More orders...
]



const Order = () => {

    return (
        <>
            <UserNav />
            <div className="">
                <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24">
                    <div className="max-w-xl">
                        <h1 style={{ fontFamily: 'vazir' }} className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">تاریخچه سفارشات</h1>
                        <p style={{ fontFamily: 'vazir' }} className="mt-3 text-sm text-gray-500">
                            مشاهده وضعیت سفارشات اخیر،مدیریت مرجوعی ها و مشاهده فاکتور
                        </p>
                    </div>

                    <section aria-labelledby="recent-heading" className="mt-16">
                        <h2 id="recent-heading" className="sr-only">
                            Recent orders
                        </h2>

                        <div className="space-y-20">
                            {orders.map((order) => (
                                <div key={order.number}>
                                    <h3 className="sr-only">
                                        Order placed on <time dateTime={order.datetime}>{order.date}</time>
                                    </h3>

                                    <div className="rounded-lg bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                                        <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                            <div className="flex justify-between sm:block">
                                                <dt style={{ fontFamily: 'vazir' }} className="font-bold text-gray-900">تاریخ سفارش</dt>
                                                <dd className="sm:mt-1">
                                                    <time dateTime={order.datetime}>{order.date}</time>
                                                </dd>
                                            </div>
                                            <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                                <dt style={{ fontFamily: 'vazir' }} className="font-bold text-gray-900">شماره سفارش</dt>
                                                <dd className="sm:mt-1">{order.number}</dd>
                                            </div>
                                            <div style={{ fontFamily: 'vazir' }} className="flex justify-between pt-6 font-bold text-gray-900 sm:block sm:pt-0">
                                                <dt>مجموع قیمت</dt>
                                                <dd className="sm:mt-1">{order.total}</dd>
                                            </div>
                                        </dl>
                                        <a
                                            style={{ fontFamily: 'vazir' }}
                                            href={order.invoiceHref}
                                            className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto"
                                        >
                                            مشاهده فاکتور
                                            <span className="sr-only">for order {order.number}</span>
                                        </a>
                                    </div>

                                    <table className="mt-4 w-full text-gray-500 sm:mt-6">
                                        <caption style={{ fontFamily: 'vazir' }} className="sr-only">محصولات</caption>
                                        <thead className="sr-only text-right text-sm text-gray-500 sm:not-sr-only">
                                            <tr>
                                                <th style={{ fontFamily: 'vazir' }} scope="col" className="py-3 pl-8 font-normal sm:w-2/5 lg:w-1/3">
                                                    محصول
                                                </th>
                                                <th style={{ fontFamily: 'vazir' }} scope="col" className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">
                                                    قیمت
                                                </th>
                                                <th style={{ fontFamily: 'vazir' }} scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
                                                    وضعیت
                                                </th>
                                                <th style={{ fontFamily: 'vazir' }} scope="col" className="w-0 py-3 text-center font-normal">
                                                    جزییات
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                                            {order.products.map((product) => (
                                                <tr key={product.id}>
                                                    <td className="py-6 pl-8">
                                                        <div className="flex items-center">
                                                            <Image
                                                                src={product.imageSrc}
                                                                alt={product.imageAlt}
                                                                className="ml-6 h-16 w-16 rounded object-cover object-center"
                                                            />
                                                            <div>
                                                                <div className="font-medium text-gray-900">{product.name}</div>
                                                                <div className="mt-1 sm:hidden">{product.price}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="hidden py-6 pr-8 sm:table-cell">{product.price}</td>
                                                    <td className="hidden py-6 pr-8 sm:table-cell">{product.status}</td>
                                                    <td className="whitespace-nowrap py-6 text-right font-medium">
                                                        <a style={{fontFamily : 'vazir'}} href={product.href} className="text-indigo-600">
                                                            مشاهده محصول
                                                            <span className="sr-only">, {product.name}</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <UserPanel />
        </>
    )
}


export default Order