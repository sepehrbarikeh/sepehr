import ParticleBackground from "@/app/components/particles";
import Sidebar from "@/app/components/client/sidebar";
import Nav from "@/app/components/nav";


export default function Page() {


  return (
    <>
      <ParticleBackground />
      <div className="min-h-screen flex font-sans">
      
        <Sidebar />
        <main className="flex-1 z-50 p-8">
          <div className="bg-neutral-800 p-6 rounded-xl shadow-lg">
            <h1 className="text-4xl text-gray-300 font-bold mb-6">Welcome to Teams.co Dashboard</h1>
            <p className="text-lg text-gray-400 ">Hover over the sidebar to expand it and see the navigation labels.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-gray-300 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-3">Feature 1</h2>
              <p className="text-neutral-400">This is a placeholder for your main application content. It adapts to the available space.</p>
            </div>
            <div className="text-gray-300 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-3">Feature 2</h2>
              <p className="text-neutral-400">You can add various widgets, charts, or forms here.</p>
            </div>
            <div className="text-gray-300 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-3">Feature 3</h2>
              <p className="text-neutral-400">The layout is fully responsive, ensuring a great experience on all devices.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}