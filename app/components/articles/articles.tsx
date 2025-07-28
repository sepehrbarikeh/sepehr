import { Data } from "./article"
import Cart from "./cart"

const Articles = ({className} : {className? : string}) => {
    return(
        <section className="w-full max-w-7xl mx-auto py-8 px-2 md:px-6">
            <ul role="list" className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className || ''} bg-white dark:bg-slate-800 rounded-2xl p-4`}> 
                {Data.map((article) => <Cart key={article.id} item={article} />)}
            </ul>
        </section>
    )
}

export default Articles;