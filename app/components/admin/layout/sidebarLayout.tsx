import { Transition, Dialog, Menu } from "@headlessui/react"
import { HomeIcon, UsersIcon, FolderIcon, ChatBubbleBottomCenterTextIcon, DocumentDuplicateIcon, ChartPieIcon, XMarkIcon, Cog6ToothIcon, Bars3Icon, MagnifyingGlassIcon, BellIcon, ChevronDownIcon,ExclamationCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { Fragment, ReactNode, useState } from "react"
import ActiveLink from "../../activeLink"




const navigation = [
    { name: 'داشبورد', href: '/project/admin', icon: HomeIcon, current: false },
    { name: 'کاربرها', href: '/project/admin/users', icon: UsersIcon, current: false },
    { name: 'محصولات', href: '/project/admin/products', icon: FolderIcon, current: false },
    { name: 'نظرات', href: '/project/admin/comments', icon: ChatBubbleBottomCenterTextIcon, current: false },
    { name: 'مقالات', href: '/project/admin/articles', icon: DocumentDuplicateIcon, current: false },
    { name: 'گزارشات', href: '/project/admin/reports', icon: ChartPieIcon, current: false },
]
const teams = [
    { id: 1, name: 'Mohammad', href: '#', initial: 'M', current: false },
    { id: 2, name: 'Ali', href: '#', initial: 'A', current: false },
    { id: 3, name: 'Reza', href: '#', initial: 'R', current: false },
]
const userNavigation = [
    { name: 'پروفایل', href: '#' },
    { name: 'خروج', href: '/' },
]



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


interface Props {
    children?: ReactNode,
}


export default function SidebarLayout({ children }: Props) {


    const [sidebarOpen, setSidebarOpen] = useState(false)


    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-y-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-y-full"
                            >
                                <Dialog.Panel className="relative ml-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute right-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <p style={{ fontFamily: 'vazir' }} className="font-bold text-gray-800 text-center text-xl">وبسایت شما</p>
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <ActiveLink key={item.name} href={item.href} >
                                                                {({ active }) => (
                                                                    <li
                                                                        className={`${active ? 'bg-gray-50 text-indigo-600 ' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'}group flex mb-1 gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`
                                                                        }
                                                                    >
                                                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                                        {item.name}
                                                                    </li>)}
                                                            </ActiveLink>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="text-sm font-semibold leading-6 text-gray-500">ادمین</div>
                                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                        <li className="flex">
                                                            <ExclamationCircleIcon className="w-5 h-5 text-red-300" />
                                                            <p className="text-center text-xs text-gray-400">صرفا جهت نمایش</p>
                                                        </li>
                                                        {teams.map((team) => (
                                                            <li key={team.name}>
                                                                <a
                                                                    href={team.href}
                                                                    className={classNames(
                                                                        team.current
                                                                            ? 'bg-gray-50 text-indigo-600'
                                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <span
                                                                        className={classNames(
                                                                            team.current
                                                                                ? 'text-indigo-600 border-indigo-600'
                                                                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                                                        )}
                                                                    >
                                                                        {team.initial}
                                                                    </span>
                                                                    <span className="truncate">{team.name}</span>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li className="mt-auto">
                                                    <a
                                                        href="#"
                                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                                                    >
                                                        <Cog6ToothIcon
                                                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                            aria-hidden="true"
                                                        />
                                                        Settings
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <p style={{ fontFamily: 'vazir' }} className="font-bold text-gray-800 text-center text-xl">وبسایت شما</p>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <ActiveLink key={item.name} href={item.href} >
                                                {({ active }) => (
                                                    <li
                                                        className={`${active ? 'bg-gray-50 text-indigo-600 ' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'}group flex mb-1 gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`
                                                        }
                                                    >
                                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                        {item.name}
                                                    </li>)}
                                            </ActiveLink>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <div className="text-sm font-semibold leading-6 text-gray-400">ادمین</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        <li className="flex">
                                            <ExclamationCircleIcon className="w-5 h-5 text-red-300" />
                                            <p className="text-center text-xs text-gray-400">صرفا جهت نمایش</p>
                                        </li>
                                        {teams.map((team) => (
                                            <li key={team.name}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(
                                                        team.current
                                                            ? 'bg-gray-50 text-indigo-600'
                                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <span
                                                        className={classNames(
                                                            team.current
                                                                ? 'text-indigo-600 border-indigo-600'
                                                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                            'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                                        )}
                                                    >
                                                        {team.initial}
                                                    </span>
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="mt-auto">
                                    <a
                                        style={{ fontFamily: 'vazir' }}
                                        href="#"
                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                                    >
                                        <Cog6ToothIcon
                                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        تنظیمات
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pr-72">
                    <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
                        <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Separator */}
                            <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

                            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                                <form className="relative flex flex-1" action="#" method="GET">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <MagnifyingGlassIcon
                                        className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    <input
                                        id="search-field"
                                        className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                        placeholder="جستجو..."
                                        type="search"
                                        name="search"
                                    />
                                </form>
                                <div className="flex items-center gap-x-4 lg:gap-x-6">
                                    <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Separator */}
                                    <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative">
                                        <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                            <span className="sr-only">Open user menu</span>
                                            <UserCircleIcon className="w-7 h-7 ml-1 text-gray-500" />
                                            <span className="hidden lg:flex lg:items-center">
                                                <span className="ml-4 text-sm font-semibold leading-6 text-gray-500" aria-hidden="true">
                                                    سپهر باریکه
                                                </span>
                                                <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </span>
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-gray-50' : '',
                                                                    'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-2">
                            <ExclamationCircleIcon className="ml-2 mr-8 text-yellow-500 w-6 h-6" />
                            <p style={{ fontFamily: 'vazir' }} className="text-gray-600 text-sm">این صفحه و پنل صرفا جهت تست بوده</p>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}