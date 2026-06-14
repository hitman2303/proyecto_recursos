import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  );
}

export default MainLayout;