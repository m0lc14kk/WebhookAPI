import React from "react";
import { NavbarLinkType } from "./types/NavbarLinkType";
import { Link } from "react-router-dom";

const NavbarLink = ({ name, path }: NavbarLinkType): React.JSX.Element => {
    return (
        <>
            <li className="bg-transparent">
                <Link to={path} className="bg-transparent duration-150 hover:text-[#FF55FF] text-[#CCCCCC] font-medium">
                    {name}
                </Link>
            </li>
        </>
    );
};

export default NavbarLink;