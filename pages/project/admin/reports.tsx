import SidebarLayout from "@/app/components/admin/layout/sidebarLayout";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface Props {
    title: string,
    description: string,
    className?: string,
}


const Reports = () => {
    return (
        <>
            <SidebarLayout />
            <div className='lg:max-w-2xl xl:max-w-4xl lg:absolute lg:left-20 w-full mt-10 text-center border-2 border-grey-300 border-dashed rounded-lg p-12 py-24'>
                <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-red-600" />
                <h3 className="mt-2 text-base font-medium text-red-500">عدم دسترسی!</h3>
                <p className="mt-1 text-sm text-red-500">متاسفانه حساب کاربری شما مجاز به دسترسی به این بخش نمیباشد</p>
            </div>
        </>
    )
}
export default Reports;