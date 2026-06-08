import SidebarLayout from "@/app/components/admin/layout/sidebarLayout"
import EmptyList from "@/app/components/emptyList"




const Admin = () => {
    return(
        <>
        <SidebarLayout />
        <EmptyList className="lg:max-w-2xl xl:max-w-4xl lg:absolute lg:left-20" title="موردی یافت نشد!" description="متاسفانه موردی برای نمایش یافت نشد" />
        </>
    )
}


export default Admin