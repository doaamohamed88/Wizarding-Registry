
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AppSidebar } from "@/pages/Dashboard/components/Sidebar";
import { SidebarProvider } from "@/components/UI/sidebar";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-1">
          <AppSidebar />

          <main className="flex-1">
            <Outlet />
          </main>
        </div>

        <Footer />
      </div>
    </SidebarProvider>
  );
}