import React from "react";
import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            WriteRight
          </Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaListUl></FaListUl>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/About"}>About</Link>
              </li>
              <li>
                <a
                  href="https://github.com/HasanC14/WriteRight"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git Repository
                </a>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
            <li>
              <a
                href="https://github.com/HasanC14/WriteRight"
                target="_blank"
                rel="noreferrer"
              >
                Git Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
