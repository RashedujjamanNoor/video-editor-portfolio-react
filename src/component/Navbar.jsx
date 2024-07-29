import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 1,
      name: "About",
    },
    {
      id: 1,
      name: "Skill",
    },
    {
      id: 1,
      name: "Project",
    },
    {
      id: 1,
      name: "Contact",
    },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-2 py-2 h-12 shadow-lg  md:px-32 ">
        <div className="font-extrabold text-lg fo">
          <h1>
            MD Rashedujjaman Noor
            <span className="font-extrabold text-green-600">.</span>
          </h1>
        </div>
        <div className="transition-all ease-in">
          <ul className="hidden sm:flex justify-evenly gap-3 font-semibold cursor-pointer text-sm ">
            {navItems.map(({ id, name }) => (
              <li key={id} className="hover:text-green-600">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {menu && (
          <div className="font-semibold flex flex-col absolute right-0 top-12 bg-slate-200 w-screen px-4 py-4 text-center rounded-lg z-10 sm:hidden">
            <ul className="text-sm space-y-1 ">
              {navItems.map(({ id, name }) => (
                <li key={id} className="hover:bg-slate-300 rounded-lg">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          className="cursor-pointer text-lg sm:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoCloseSharp /> : <AiOutlineMenu />}
        </div>
      </nav>
    </>
  );
};
