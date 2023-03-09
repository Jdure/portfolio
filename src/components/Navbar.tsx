import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

export const Navbar = () => {
  const [theme, setTheme] = React.useState("emerald");
  const switchTheme = () => {
    setTheme(theme === "business" ? "emerald" : "business");
  };

  React.useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar flex bg-secondary-content dark:bg-base-200">
      <div className="navbar-start basis-4/5">
        <Image
          className="m-2"
          src={theme === "emerald" ? "/logo.svg" : "/logo-white.svg"}
          width={60}
          height={60}
          alt="Code by JD"
        />
      </div>
      <label className="swap swap-rotate sm:px-2">
        <input onClick={switchTheme} type="checkbox" />
        <div className="swap-on">
          <FaRegMoon />
        </div>
        <div className="swap-off">
          <FaSun />
        </div>
      </label>
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
          <Link className="p-2" href="/#about">
            About
          </Link>
          <Link className="p-2" href="/#projects">
            Projects
          </Link>
          <Link className="p-2" href="/#contact">
            Contact
          </Link>
        </ul>
      </div>
      {/* Desktop Menu */}
      <div className="navbar-end hidden sm:flex sm:w-auto">
        <Link className="p-2" href="/#about">
          About
        </Link>
        <Link className="p-2" href="/#projects">
          Projects
        </Link>
        <Link className="p-2" href="/#contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
