import { Outlet } from "react-router-dom";
import FirestoreProvider from "../Provider/FirestoreProvider";
import Navbar from "./Navbar";
const LayoutWrapper = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-[#1E242A]  min-h-screen">
        <div className="flex flex-col w-full max-w-6xl h-full items-center justify-start ">
          <FirestoreProvider>
            <Navbar />
            <Outlet />
          </FirestoreProvider>
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
