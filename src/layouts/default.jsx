import { Outlet } from "react-router-dom";
import logo from "../../public/logo.png";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-50">
      <header className="w-full flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="CSV Editor Pro Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl font-bold">CSV Editor Pro</h1>
        </div>
      </header>
      <div className="flex-grow w-full max-w-4xl mx-auto mt-8">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
