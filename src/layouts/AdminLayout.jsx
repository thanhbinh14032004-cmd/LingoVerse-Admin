import Sidebar from "../components/Sidebar/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#F5F8FF]">

      <Sidebar />

      <main className="flex-1 overflow-y-auto px-10 py-8">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;