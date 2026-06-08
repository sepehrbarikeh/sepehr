import Articles from "@/app/components/articles/articles";
import Nav from "@/app/components/nav";



const articles = () => {
    return(
        <>
            <Nav />
            <div className="bg-[#03030f] mt-16 min-h-screen">
                <Articles />
            </div>
        </>
    )
}

export default articles;
