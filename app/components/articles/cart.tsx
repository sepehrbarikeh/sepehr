import Image from "next/image";
import Link from "next/link";


function getCategoryClass(category: string) {
    switch (category) {
        case 'جاوااسکریپت':
            return 'inline-flex items-center rounded-md bg-yellow-200 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20';
        case 'آموزشی':
            return 'inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10';
        case 'پایتون':
            return 'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10';
        case 'php':
            return 'inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10';
        case 'توسعه وب':
            return 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20';
            case 'Component':
            return 'inline-flex items-center rounded-md bg-fuchsia-200 px-2 py-1 text-xs font-medium text-fuchsia-900 ring-1 ring-inset ring-fuchsia-600/20';
        case 'Dashbord':
            return 'inline-flex items-center rounded-md bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-900 ring-1 ring-inset ring-emerald-600/10';
        default:
            return 'bg-gray-500 text-white';
    }
}



//   const category = 'جاوا اسکریپت'; // این دسته بندی را از بک‌اند دریافت می‌کنید
//   <div className={`p-4 rounded-lg ${getCategoryClass(category)}`}>
//     {category}
//   </div>


const Cart = (item : any) => {
    return (
        <Link href={`${item?.item?.link ? item?.item?.link : ''}`}
            className="block mx-4 w-full max-w-xs mb-7 rounded-xl shadow-md bg-white dark:bg-slate-800 transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer border border-gray-100 dark:border-slate-700">
            <div className="p-3 flex flex-col h-full">
                <div className="w-full h-32 flex items-center justify-center mb-2 overflow-hidden rounded-lg bg-gray-50 dark:bg-slate-700">
                    {item?.item?.Image && (
                        <Image className="object-cover w-full h-full" alt={item?.item?.title} src={item?.item?.Image} />
                    )}
                </div>
                <h2 className="font-bold text-base text-gray-700 dark:text-gray-200 mb-2 truncate" style={{ fontFamily: 'vazir-bold' }}>
                    {item?.item?.title}
                </h2>
                <div className="mt-auto">
                    <span className={`${getCategoryClass(item?.item?.category)} px-2 py-1 rounded text-xs font-medium`}>{item?.item?.category}</span>
                </div>
            </div>
        </Link>
    )
}

export default Cart;