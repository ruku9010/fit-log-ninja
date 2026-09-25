
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import Links from "./Links";

const NavBar = () => {
 

  const links = (
    <>
      <Links />
    </>
  );

  return (
    <>
      <div className="flex w-full mx-auto bg-black px-4 py-5 shadow-sm lg:px-8">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-black p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex text-xl font-bold text-[#FFFFFF]"
          >
            <Image
              src={logo}
              alt="logo"
              width={30}
              height={30}
              className="mr-2"
            />
            FITLOG
          </Link>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center">
            {links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-4">
          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-white"
          >
            Plan

            <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#C2F800] px-2 text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-white"
          >
            Saved

            <span className="flex h-8 min-w-8 items-center justify-center rounded-full outline-1 outline-[#D1D5DB]">
              0
            </span>
          </Link>
        </div>
      </div>

      <hr className="opacity-15" />
    </>
  );
};

export default NavBar;
