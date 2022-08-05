import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const LayoutWrapper = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-[#1E242A]  min-h-screen">
        <div className="flex flex-col w-full max-w-6xl h-full items-center justify-start ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
