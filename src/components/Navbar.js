import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex bg-black justify-between items-center h-[75px] w-full mx-auto px-4 text-white">
      <h1 className="w-full text-2xl font-bold text-[#F53838]">MRmoney.</h1>
      <ul className="hidden md:flex">
        <li className="p-5 hover:text-[#F53838] cursor-pointer">Home</li>
        <li className="p-5 hover:text-[#F53838] cursor-pointer">About</li>
        <li className="p-5 hover:text-[#F53838] cursor-pointer">Contact</li>
        {!user && (
          <>
            <li className="p-5 hover:text-[#F53838]">
              <Link to="/login">Login</Link>
            </li>
            <li className="p-5 hover:text-[#F53838]">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li className="p-5 uppercase">{user.displayName}</li>
            <li className="p-3">
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl font-bold text-[#F53838] m-4">
          MRmoney.
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        {!user && (
          <>
            <li className="p-4 border-b border-gray-600">
              <Link to="/login">Login</Link>
            </li>
            <li className="p-4">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>Hey,{user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
    //   <nav className={styles.navbar}>
    //     <ul>
    //       <li className={styles.title}>MRmoney</li>
    //       {!user && (
    //         <>
    //           <li>
    //             <Link to="/login">Login</Link>
    //           </li>
    //           <li>
    //             <Link to="/signup">Signup</Link>
    //           </li>
    //         </>
    //       )}

    //       {user && (
    //         <>
    //           <li>Hey there, {user.displayName}</li>
    //           <li>
    //             <button className="btn" onClick={logout}>
    //               Logout
    //             </button>
    //           </li>
    //         </>
    //       )}
    //     </ul>
    //   </nav>
  );
}
