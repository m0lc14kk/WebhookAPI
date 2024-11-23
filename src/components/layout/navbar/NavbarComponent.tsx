"use client";
import React from "react";
import { Link } from "react-router-dom";
import { NavbarLinkType } from "./types/NavbarLinkType";
import NavbarLink from "./NavbarLink.";

const navbarLinks: readonly NavbarLinkType[] = [
    {
        name: "About",
        path: `${process.env.PUBLIC_URL}/about`
    },
    {
        name: "Installation",
        path: `${process.env.PUBLIC_URL}/installation`
    },
    {
        name: "Documentation",
        path: `${process.env.PUBLIC_URL}/documentation`
    },
    {
        name: "GitHub",
        path: "https://github.com/m0lc14kk/WebhookAPI"
    },
];

const NavbarComponent = (): React.JSX.Element => {
    return (
        <>
            <nav className="bg-transparent absolute flex items-center justify-between px-8 lg:px-[14%] py-8 border-b-2 border-b-[#90909020] w-full backdrop-blur-2xl">
                <Link to={`${process.env.PUBLIC_URL}/`} className="bg-transparent">
                    <img
                        src={`${process.env.PUBLIC_URL}/imgs/logo.png`}
                        alt="/"
                        width={180}
                        height={60}
                        className="bg-transparent select-none"
                    />
                </Link>

                <ul className="bg-transparent flex items-center justify-center gap-x-8 max-md:hidden">
                    {navbarLinks.map(({ name, path }) => 
                        <NavbarLink 
                            name={name} 
                            path={path} 
                        />
                    )}
                </ul>
            </nav>
        </>
    );
};

export default NavbarComponent;