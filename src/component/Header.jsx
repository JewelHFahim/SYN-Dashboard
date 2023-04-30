import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

import { Link } from "react-router-dom";

const Header = ({title, name}) => {

    const [dromMenu, setDropmenu] = useState(false);
    const toggleDromMenu = () => {
        setDropmenu(!dromMenu);
    };

    return (
        <>
            <div className="hidden sm:flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div className="pr-3 text-gray font-normal text-[20px] text-white  border-r ">
                        {/* {title} */}
                        Dashboard
                    </div>
                    <div>
                        <nav>
                            <ol className="flex items-center gap-2">
                                <li> <Link className="text-tcolor text-2xl"> <AiOutlineHome /></Link></li>
                                <li className="flex items-center gap-2 font-normal text-tcolor text-[18px ">
                                    <span> <FiChevronRight className="text-2xl"/> </span>
                                    {/* {name} */}
                                    eCommerce
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="relative">
                    <button className="flex items-center capitalize text-gray text-[16px] gap-2 border border-pColor px-5 py-1.5 rounded-md text-pColor font-semibold hover:bg-pColor hover:border-white hover:text-white duration-200">
                        setting
                        <span onClick={toggleDromMenu}>
                            <MdArrowDropDown  />
                        </span>
                    </button>
                    {dromMenu && (
                        <div className="absolute block shadow-xl min-w-[200px] py-4 right-0 mt-[2px] border border-slate-800 rounded-lg text-white">
                            <ul className="w-full flex flex-col gap-2 capitalize text-[16px] font-normal text-gray">
                                <li className="px-4 hover:bg-slate-200 py-1">action</li>
                                <li className="px-4 hover:bg-slate-200 py-1">another action</li>
                                <li className="px-4 hover:bg-slate-200 py-1">
                                    something else here
                                </li>
                                <li className="px-4 hover:bg-slate-200 py-1">action</li>
                               <div className="w-full h-[1px] bg-tcolor opacity-10"></div>
                                <li className="px-4 hover:bg-slate-200 py-1">separeted link</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
};

export default Header;