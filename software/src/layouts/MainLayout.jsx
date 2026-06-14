import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {

  return (
    <div className="flex bg-gray-950 text-white min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}