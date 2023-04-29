import { useState } from "react";
import { BsArrowLeftShort, BsChevronLeft, BsGiftFill, BsDatabaseFill, BsShieldFillCheck, BsFillLayersFill } from "react-icons/bs"
import {  IoBagHandleSharp, IoBriefcaseSharp, IoLeafSharp, IoBarChartSharp, IoMapSharp, IoDocumentTextSharp } from "react-icons/io5"
import { AiFillHome } from "react-icons/ai"
import { FiLink2 } from "react-icons/fi"
import { IoLogoChrome } from "react-icons/io"
import { RiFileList3Fill, RiEditBoxFill } from "react-icons/ri"
import { MdSecurity } from "react-icons/md"
import { FaUserCircle, FaList } from "react-icons/fa"
import { HiOutlineNewspaper } from "react-icons/hi"

const SideNav = (  ) => {

    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    

    const Menus = [
        { title: "Dashboard", icon: <AiFillHome/> },
        { title: "eCommerce", icon: <IoBagHandleSharp/> },
        { title: "UI ELEMENTS", spacing: true, sections: true },
        {
            title: "Widgets",
            icon: <IoBriefcaseSharp/>,
            submenu: true,
            submenuItems: [
                { title: "Submenu 1" },
                { title: "Submenu 2" },
                { title: "Submenu 3" }
            ],
        },
        { title: "Components", icon: <BsGiftFill/>  },
        { title: "Icons", icon: <IoLeafSharp/>  },
        { title: "FORMS & TABLES", sections: true },
        { title: "Forms", icon: <RiFileList3Fill/>  },
        { title: "Tables", icon: <BsDatabaseFill/>  },
        { title: "PAGES", sections: true },
        { title: "Authentications", icon: <MdSecurity/>  },
        { title: "User Profile", icon: <FaUserCircle/>  },
        { title: "Edit Profile", icon: <RiEditBoxFill/>  },
        { title: "Invoice", icon: <HiOutlineNewspaper/>  },
        { title: "Invoice", icon: <BsShieldFillCheck/>  },
        { title: "Extra Pages", icon: <BsFillLayersFill/>  },
        { title: "CHARTS & MAPS", sections: true },
        { title: "Charts", icon: <IoBarChartSharp/>  },
        { title: "Maps", icon: <IoMapSharp/>  },
        { title: "OTHERS", sections: true },
        { title: "Menu Levels", icon: <FaList/>  },
        { title: "Documentaion", icon: <IoDocumentTextSharp/>  },
        { title: "Support", icon: <FiLink2/>  },

    ];

    return (
        <div className="flex">
            <div
                className={`bg-dark-purple h-full p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                <BsArrowLeftShort
                    className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />

                <div className="inline-flex">
                    <IoLogoChrome
                        className={`text-white text-4xl cursor-pointer block float-left mr-2`}
                    />
                    <h1 className={`text-white origin-left font-medium text-2xl ${!open && "scale-0"}`}>Logo</h1>
                </div>

                {/* <div className={`flex items-center rounded-md bg-slate-200 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
                    <BsSearch
                        className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`}
                    />
                    <input type={'search'} placeholder="Search"
                        className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}
                    />
                </div> */}

                <ul className="pt-2">
                    {
                        Menus.map((menu, index) => (<>
                            <li
                                key={index}
                                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-50 rounded-md mt-2 ${menu.sections ? "hover:bg-transparent gap-x-0 ml-[-8px]" : ""} duration-300`}
                            >
                                <span className="text-2xl block float-left ">
                                    {menu.icon ? menu.icon : ""}
                                </span>
                                <span
                                    className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"} ${menu.sections ? "text-[12px] cursor-text" : ""} duration-300`}
                                >
                                    {menu.title}
                                </span>
                                {
                                    menu.submenu && open &&
                                     (<BsChevronLeft className={`${submenuOpen} ${ submenuOpen && open && "rotate-[-90deg]"} duration-300`}
                                    onClick={ () => {setSubmenuOpen(!submenuOpen)}} />)
                                }
                            </li>
                            {
                                menu.submenu && submenuOpen && open && (
                                    <ul>
                                        {
                                            menu.submenuItems.map((submenuItem, index) => (
                                                <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-slate-50 rounded-md duration-300">
                                                    {
                                                        submenuItem.title
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </>))

                    }
                </ul>

            </div>

            <div className="p-7">
                <h1 className="text-2xl font-semibold text-dark-purple">Home Page</h1>
            </div>
        </div>
    );
};

export default SideNav;