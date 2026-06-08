import UserNav from "@/app/components/client/userNav"
import UserPanel from "@/app/components/client/userPanel"
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}



const Profile = () => {

    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)

    return (
        <>
            <UserNav />

            <>
                <div className="mx-auto max-w-7xl mb-10 lg:flex lg:gap-x-16 lg:px-8">

                    <main className="px-4 py-10 sm:px-6 lg:flex-auto lg:px-0 ">
                        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                            <div>
                                <div className="flex justify-between">
                                    <h2 style={{ fontFamily: 'vazir-bold' }} className="text-base font-semibold leading-7 text-gray-900">اطلاعات کاربری</h2>
                                    <div>
                                        <span className="ml-2 inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <p style={{ fontFamily: 'vazir' }} className="mt-1 text-sm leading-6 text-gray-500">
                                    این اطلاعات به صورت عمومی نمایش داده می شود، بنابراین مراقب آنچه به اشتراک می گذارید باشید.
                                </p>
                                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                    <div className="pt-6 sm:flex">
                                        <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pl-6">نام و نام خانوادگی</dt>
                                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                            <div style={{ fontFamily: 'vazir' }} className="text-gray-900">سپهر باریکه</div>
                                            <button style={{ fontFamily: 'vazir' }} type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                بروزرسانی
                                            </button>
                                        </dd>
                                    </div>
                                    <div className="pt-6 sm:flex">
                                        <dt style={{ fontFamily: 'vazir' }} className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pl-6">ایمیل</dt>
                                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                            <div className="text-gray-900">sepehr@example.com</div>
                                            <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                بروزرسانی
                                            </button>
                                        </dd>
                                    </div>
                                    <div className="pt-6 sm:flex">
                                        <dt style={{ fontFamily: 'vazir' }} className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pl-6">عنوان</dt>
                                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                            <div className="text-gray-900">FrontEnd Developer</div>
                                            <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                بروزرسانی
                                            </button>
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            <div>
                                <h2 style={{ fontFamily: 'vazir-bold' }} className="text-base leading-7 text-gray-900">اطلاعات بانکی</h2>
                                <p style={{ fontFamily: 'vazir' }} className="mt-1 text-sm leading-6 text-gray-500">حساب بانکی خود را به حساب کاربری متصل کنید.</p>

                                <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                    <li className="flex justify-between gap-x-6 py-6">
                                        <div style={{ fontFamily: 'vazir' }} className="font-medium text-gray-900">بانک ملی</div>
                                        <button style={{ fontFamily: 'vazir' }} type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            بروزرسانی
                                        </button>
                                    </li>
                                    <li className="flex justify-between gap-x-6 py-6">
                                        <div style={{ fontFamily: 'vazir' }} className="font-medium text-gray-900">بانک ملت</div>
                                        <button style={{ fontFamily: 'vazir' }} type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            بروزرسانی
                                        </button>
                                    </li>
                                </ul>

                                <div className="flex border-t border-gray-100 pt-6">
                                    <button style={{ fontFamily: 'vazir' }} type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        افزودن حساب بانکی دیگر<span aria-hidden="true">+</span>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">ادغام</h2>
                                <p style={{ fontFamily: 'vazir' }} className="mt-1 text-sm leading-6 text-gray-500">متصل کردن برنامه به حساب کاربری</p>

                                <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                    <li className="flex justify-between gap-x-6 py-6">
                                        <div className="font-medium text-gray-900">QuickBooks</div>
                                        <button style={{ fontFamily: 'vazir' }} type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            بروزرسانی
                                        </button>
                                    </li>
                                </ul>

                                <div className="flex border-t border-gray-100 pt-6">
                                    <button style={{ fontFamily: 'vazir' }}  type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        افزودن برنامه دیگر<span aria-hidden="true">+</span>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h2 style={{ fontFamily: 'vazir-bold' }}  className="text-base leading-7 text-gray-900">تاریخ و زبان</h2>
                                <p style={{ fontFamily: 'vazir' }}  className="mt-1 text-sm leading-6 text-gray-500">
                                    انتخاب کنید چه زبان و فرمت نمایش تاریخ در حساب خود استفاده شود.
                                </p>

                                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                    <div className="pt-6 sm:flex">
                                        <dt style={{ fontFamily: 'vazir' }}  className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pl-6">زبان</dt>
                                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                            <div style={{ fontFamily: 'vazir' }}  className="text-gray-900">فارسی</div>
                                            <button style={{ fontFamily: 'vazir' }}  type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                بروزرسانی
                                            </button>
                                        </dd>
                                    </div>
                                    <div className="pt-6 sm:flex">
                                        <dt style={{ fontFamily: 'vazir' }}  className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pl-6">فرمت تاریخ</dt>
                                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                            <div className="text-gray-900">DD-MM-YYYY</div>
                                            <button style={{ fontFamily: 'vazir' }}  type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                بروزرسانی
                                            </button>
                                        </dd>
                                    </div>
                                    <Switch.Group as="div" className="flex pt-6">
                                        <Switch.Label style={{ fontFamily: 'vazir' }}  as="dt" className="w-64 flex-none pl-6 font-medium text-gray-900" passive>
                                            منطقه زمانی خودکار
                                        </Switch.Label>
                                        <dd className="flex flex-auto items-center justify-end">
                                            <Switch
                                                dir="ltr"
                                                checked={automaticTimezoneEnabled}
                                                onChange={setAutomaticTimezoneEnabled}
                                                className={classNames(
                                                    automaticTimezoneEnabled ? 'bg-indigo-600' : 'bg-gray-200',
                                                    'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0',
                                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                                    )}
                                                />
                                            </Switch>
                                        </dd>
                                    </Switch.Group>
                                </dl>
                            </div>
                        </div>
                    </main>
                </div>
            </>

            <UserPanel />
        </>
    )
}


export default Profile