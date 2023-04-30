import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import SideNav from "../Pages/SideNav/SideNav";
import { useState } from "react";
import Header from "../component/Header";

const Main = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="relative">

            <div className={`${open ? "pl-[350px] pr-[50px]" : "pl-[150px] pr-[50px]"} fixed top-0 w-full bg-[#181818]
            border border-l-0 border-t-0 border-slate-600`}> <Navbar /> </div>

            <div className={`${open ? "pl-[350px] pr-[50px]" : "pl-[150px] pr-[50px]"} pt-[95px] pb-[20px] bg-[#181818]  w-full`}><Header /></div>

            <div className="absolute left-0 top-0  "><SideNav open={open} setOpen={setOpen} /></div>

            <div className="bg-[#181818] h-screen"> <Outlet /> </div>

        </div>
    );
};

export default Main;