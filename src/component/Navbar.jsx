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
      id: 2,
      name: "Software",
    },
    {
      id: 3,
      name: "Project",
    },
    {
      id: 4,
      name: "Service",
    },
    {
      id: 5,
      name: "Contact",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center px-2 shadow-lg h-16 fixed top-0 z-10 w-full bg-white sm:px-40 ">
        <div className="font-extrabold text-lg ">
          <h1 className="text-xl md:text-4xl text-gray-900">
            MD Rashedujjaman Noor
            <span className="font-extrabold text-green-600">.</span>
          </h1>
        </div>
        <div className="transition-all ease-in">
          <ul className="hidden sm:flex justify-evenly gap-3  cursor-pointer text-sm font-bold">
            {navItems.map(({ id, name }) => (
              <li
                key={id}
                className="hover:text-green-600 md:text-lg text-gray-800"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {menu && (
          <div className="font-semibold flex flex-col absolute right-0 top-16 bg-slate-200 w-screen px-4 py-4 text-center rounded-lg z-10 sm:hidden">
            <ul className="text-sm font-bold space-y-1 ">
              {navItems.map(({ id, name }) => (
                <li
                  key={id}
                  className="hover:bg-slate-300 rounded-lg text-base text-gray-900"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          className="cursor-pointer text-2xl font-bold sm:hidden "
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoCloseSharp /> : <AiOutlineMenu />}
        </div>
      </div>
    </>
  );
};
