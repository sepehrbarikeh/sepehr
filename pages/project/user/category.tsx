import UserNav from "@/app/components/client/userNav"
import UserPanel from "@/app/components/client/userPanel"
import EmptyList from "@/app/components/emptyList"


const Category = () => {

    return (
        <>
            <UserNav />
            <EmptyList description="متاسفانه دسته بندی و محصولی برای نمایش وجود ندارد لطفا بعدا تلاش کنید" title="دسته بندی برای نمایش وجود ندارد" />
            <UserPanel />
        </>
    )
}


export default Category


