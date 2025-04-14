import { Outlet } from "react-router";
import { Navbar } from "../navBar";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
