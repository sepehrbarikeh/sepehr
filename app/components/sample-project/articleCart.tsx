import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import Image from "next/image";
import Link from "next/link";
import { Data } from '../articles/article';


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
        default:
            return 'bg-gray-500 text-white';
    }
}

const ArticleCart = (item: any) => {


    const deleteHAndler = () => {
        setOpen(true)
    }

    const confirmHandler = () => {
        setOpen(false)
    }


    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                            </div>
                                            <div className="text-center sm:ml-4 sm:mt-0 sm:text-start mt-3 mx-2">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    حذف مقاله
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        آیا از حذف مقاله مورد نظر اطمینان دارید؟ درصورت تایید اطلاعات حدف شده قابل بازگشت نیست
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md ring-1 ring-red-800 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:mr-3 sm:w-auto"
                                            onClick={() => confirmHandler()}
                                        >
                                            تایید
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            انصراف
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>


            <Link href={`${item?.item?.link ? item?.item?.link : ''}`}>
                <div className='relative w-full max-w-2xl mr-1 mb-7 ring-2 ring-gray-200 rounded-md my-2 h-full max-h-60 sm:max-h-58 lg:max-h-65 hover:shadow-xl cursor-pointer dark:bg-slate-800 bg-white sm:max-w-md lg:max-w-xs' >
                    <div className=" p-2">
                        <Image className=" rounded  max-h-40" alt={item?.item?.title} src={item?.item?.Image}></Image>
                    </div>

                    <div className="mx-3">
                        <h2>
                            <span style={{ fontFamily: 'vazir' }} className=" text-base leading-5 font-bold tracking-tight dark:text-gray-400 text-gray-600">{item?.item?.title}</span>
                        </h2>
                    </div>
                    <div className=" absolute bottom-0 left-0 m-2 ml-2 flex justify-end">
                        <div className={` ${getCategoryClass(item?.item?.category)}`}>
                            {item?.item?.category}
                        </div>
                    </div>
                    <div className=" absolute bottom-0 right-0">
                        <button

                            className="m-1 rounded-md text-indigo-600 px-2 py-0.5 text-xs font-semibold leading-6 bg-indigo-100 ring-1 ring-indigo-400 shadow-sm hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            ویرایش
                        </button>
                        <button
                            onClick={() => deleteHAndler()}
                            className='m-1 rounded-md text-red-600 px-2 py-0.5 text-xs font-semibold leading-6 bg-red-50 ring-1 ring-red-400 shadow-sm hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
                            حذف
                        </button>
                    </div>
                </div>
            </Link>
        </>
    )
}



export default ArticleCart