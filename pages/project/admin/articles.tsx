import SidebarLayout from "@/app/components/admin/layout/sidebarLayout";
import { Data } from "@/app/components/articles/article";
import ArticleCart from "@/app/components/sample-project/articleCart";



const Article = () => {
    return (
        <>
            <SidebarLayout />
            <div>
                <ul role="list" className={`absolute xl:left-6 w-full lg:right-72 lg:max-w-3xl xl:max-w-5xl grid grid-cols-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4 px-4 dark:bg-slate-800`}>
                    {Data.map((article) => <ArticleCart key={article.id} item={article} />)}
                </ul>
            </div>
        </>
    )
}
export default Article;