import { Menu, Transition } from "@headlessui/react"
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"




function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const CommentCart = (item: any) => {

    console.log(item)

    return (
        <>
            <div className='relative w-full max-w-2xl mr-1 mb-7 ring-2 ring-gray-200 rounded-md my-2 h-full max-h-60 sm:max-h-58 lg:max-h-65 hover:shadow-xl cursor-pointer dark:bg-slate-800 bg-white sm:max-w-md lg:max-w-xs' >
                <div className="my-5 flex mx-3">
                    <h2>
                        <span className="text-sm font-serif leading-5 font-bold tracking-tight dark:text-gray-400 text-gray-600">{item?.item?.name}</span>
                    </h2>
                </div>
                <div>
                    <p className="mt-1 mx-3 flex text-xs leading-5 font-serif text-gray-500">
                        <a href={`mailto:${item.item.email}`} className="truncate hover:underline">
                            {item.item.email}
                        </a>
                    </p>
                </div>
                <div className="text-xs m-3 flex justify-end">
                    <p>{item.item.body}</p>
                </div>


                <div className="flex absolute left-1 top-2 items-center gap-x-6">
                    <Menu as="div" className="relative flex-none">
                        <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                            <span className="sr-only">Open options</span>
                            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
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
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            style={{ fontFamily: 'vazir' }}
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                            )}
                                        >
                                            مشاهده پروفایل<span className="sr-only">, {item.item.name}</span>
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            style={{ fontFamily: 'vazir' }}
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                            )}
                                        >
                                            حذف<span className="sr-only">, {item.item.name}</span>
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </>
    )
}


export default CommentCart