import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {

  return (

    <div className="min-h-screen bg-gray-100 flex">

      <Sidebar />

      <main className="flex-1 min-h-screen p-4 md:p-8 overflow-auto">

        <div className="max-w-7xl mx-auto">

          {children}

        </div>

      </main>

    </div>

  );

}

export default MainLayout;