import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm mb-4">
      <div className="navbar-start flex-1">
        <Image
          src={"https://source.unsplash.com/sibVwORYqs0/720x720"}
          alt="Avatar of Jonathan"
          height={50}
          width={50}
          className="w-10 rounded-full"
        />
      </div>
      {/* Mobile Menu */}
      <div className="dropdown dropdown-end sm:hidden">
        <label tabIndex={0} className="btn btn-ghost m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
        <ul className="dropdown-content menu pt-2 shadow bg-base-100 w-36 mt-2 text-right">
          <Link className="p-2 hover:bg-slate-100" href="#about">
            About
          </Link>
          <Link className="p-2 hover:bg-slate-100" href="#projets">
            Projects
          </Link>
          <Link className="p-2 hover:bg-slate-100" href="#contact">
            Contact
          </Link>
        </ul>
      </div>
      {/* Desktop Menu */}
      <div className="navbar-end hidden sm:flex">
        <Link className="p-2" href="#about">
          About
        </Link>
        <Link className="p-2" href="#projets">
          Projects
        </Link>
        <Link className="p-2" href="#contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
