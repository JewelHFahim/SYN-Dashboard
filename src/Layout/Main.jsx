import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import SideNav from "../Pages/SideNav/SideNav";
import { useState } from "react";
import Header from "../component/Header";

const Main = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="relative bg-[#181818] ">

            <div className={`${open ? "pl-[350px] pr-[50px]" : "pl-[150px] pr-[50px]"} fixed top-0 w-full bg-[#181818] z-10 border-b border-slate-600`}> <Navbar /> </div>

            <div className={`${open ? "pl-[350px] pr-[50px]" : "pl-[150px] pr-[50px]"} pt-[95px] pb-[20px] bg-[#181818]  w-full`}><Header /></div>

            <div className={`fixed left-0 top-0 scrollbar-thin hover:scrollbar-thumb-tcolor scrollbar-track-transparent overflow-x-hidden overflow-y-scroll h-full border border-l-0 border-t-0 border-b-0 border-tcolor z-20`}>
                <SideNav open={open} setOpen={setOpen} />
            </div>

            <div className={`h-full ${open ? "ml-[350px] mr-[50px]" : "ml-[150px] mr-[50px]"} `}> <Outlet /> </div>

        </div>
    );
};

export default Main;