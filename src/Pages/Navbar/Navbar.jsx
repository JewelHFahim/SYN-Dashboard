import { BsSearch } from "react-icons/bs";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { IoNotificationsSharp } from "react-icons/io5";

const Navbar = () => {


    return (
        <div className="w-full">

            <div className="flex items-center justify-between">
                <div className={`flex items-center rounded-sm bg-[#212121] border border-slate-700 my-4 w-[420px]`}>
                    <BsSearch className={`text-white text-lg block float-left cursor-pointer ml-5`} />
                    <input type="search" placeholder="Search for anything" className="w-full py-[7px] bg-transparent ml-2 font-semibold placeholder-white text-white focus:outline-none" />
                </div>

                <div className="flex items-center gap-4 text-xl text-white">
                    <TfiLayoutGrid3Alt/>
                    <div className="relative">
                        <IoNotificationsSharp className="text-2xl"/>
                        <div className="w-[18px] h-[18px] rounded-full bg-red-500 absolute top-[-2px] right-[-3px]
                        flex items-center justify-center">
                            <p className="text-[13px] font-semibold">8</p>
                        </div>
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full bg-slate-500">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;