import Articles from "@/app/components/articles/articles";
import Nav from "@/app/components/nav";



const articles = () => {
    return(
        <div className="dark:bg-slate-900">
            <Nav />
            <Articles />
        </div>
    )
}

export default articles;
