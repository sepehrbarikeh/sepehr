import { Search, LogIn, ShoppingCart } from "lucide-react"
import { useRouter } from "next/router"



const UserNav = () => {

    const router = useRouter()




    return (
        <>
            <div className="bg-white shadow">
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex px-2 lg:px-0">
                                <div className="flex flex-shrink-0 items-center">
                                    <div className="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-900">
                                        وبسایت شما
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-start mr-5">
                                <div className="w-full max-w-lg lg:max-w-md">
                                    <label htmlFor="search" className="sr-only">
                                        جستجو
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <Search className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full rounded-md border-0 bg-gray-200 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="جستجو"
                                            type="search"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center lg:hidden">
                            </div>
                            <div className="hidden lg:ml-4 lg:flex lg:items-center">
                                <div className="border-gray-200 border rounded-md p-2">
                                    <button onClick={() => router.push('/project/login')} style={{ fontFamily: 'vazir' }} className="flex text-gray-700 flex-row-reverse text-xs items-center">
                                        ثبت نام | ورود
                                        <LogIn className="ml-1 h-6 w-6 text-gray-700" />
                                    </button>
                                </div>
                                <span className="mx-2 text-gray-200 text-2xl text-center mb-2 cursor-default">|</span>
                                <button
                                    onClick={() => router.push('shopcart')}
                                    type="button"
                                    className="flex-shrink-0 rounded-full bg-white p-1 text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">Shop Cart</span>
                                    <ShoppingCart className="h-7 w-7" />
                                </button>
                            </div>
                        </div>
                    </div>

                </>
            </div>
        </>
    )
}


export default UserNav