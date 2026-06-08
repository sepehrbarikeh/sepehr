import Cart from "@/app/components/articles/cart"
import Nav from "@/app/components/nav"
import { ProjectData } from "@/app/components/sample-project/projectData"




const Projects = () => {
    return (
        <>
            <Nav />
            <div className="bg-[#03030f] mt-24 min-h-screen">
                <ul role="list" className="grid mt-8 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4 px-4 dark:bg-slate-800">
                    {ProjectData.map((project) => <Cart key={project.id} item={project} />)}
                </ul>

            </div>
        </>
    )
}


export default Projects