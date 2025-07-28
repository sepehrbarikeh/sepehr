import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon, SquaresPlusIcon, UserCircleIcon, } from "@heroicons/react/24/outline"
import { HomeIcon as home, ShoppingBagIcon as shop, ShoppingCartIcon as shopCart, SquaresPlusIcon as category, UserCircleIcon as user, } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from 'next/router'



const navigation = [

    { name: 'پروفایل', href: '/project/user/profile', icon: UserCircleIcon, active: user },
    { name: 'سبد خرید', href: '/project/user/shopcart', icon: ShoppingCartIcon, active: shopCart },
    { name: 'خانه', href: '/project/user', icon: HomeIcon, active: home },
    { name: 'سفارشات', href: '/project/user/order', icon: ShoppingBagIcon, active: shop },
    { name: 'دسته بندی', href: '/project/user/category', icon: SquaresPlusIcon, active: category },
]




const UserPanel = () => {
    const router = useRouter();

    return (
        <nav className="fixed bottom-0 inset-x-0 bg-indigo-700 rounded-t-3xl md:rounded-t-full shadow-lg">
            <div className="mx-auto px-4 max-w-6xl sm:px-6 lg:px-8">
                <ul className="flex flex-row-reverse justify-between py-1">
                    {navigation.map((item, index) => (
                        <li key={index} className="">
                            <Link href={item.href} className={`flex flex-col items-center justify-center ${router.pathname === item.href ? 'relative -top-5 lg:-top-6' : ''}`}>
                                <div className={`flex flex-col items-center justify-center ${router.pathname === item.href ? 'text-indigo-700 bg-white rounded-full' : 'text-gray-200'} transition duration-300 ease-in-out`}>
                                    {
                                        router.pathname === item.href ? <item.active className="h-5 w-5 lg:w-6 lg:h-6 m-2 animate-bounce" />
                                            : <item.icon className="h-5 w-5 lg:w-6 lg:h-6 m-2"/>
                                    }
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )

}

export default UserPanel
