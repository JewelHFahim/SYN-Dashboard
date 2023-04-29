import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import SideNav from "../Pages/SideNav/SideNav";
import { useState } from "react";

const Main = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="relative">
            <div className=""> <Navbar /> </div>
            <div className="absolute left-0 top-0"><SideNav open={open} setOpen={setOpen} /></div>
            <div> <Outlet /> </div>

        </div>
    );
};

export default Main;