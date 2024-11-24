"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarLinkType } from "./types/NavbarLinkType";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
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
    const [navbarToggled, setNavbarToggled] = useState<boolean>(false);

    const handleClick = (): void => {
        setNavbarToggled(!navbarToggled);
    };

    return (
        <>
            <nav className="bg-transparent absolute flex items-center justify-between px-8 lg:px-[14%] py-8 border-b-2 border-b-[#90909020] w-full backdrop-blur-2xl h-24">
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

                <RxHamburgerMenu
                    size={35}
                    className="bg-transparent p-1 md:hidden"
                    onClick={handleClick}
                />
            </nav>

            <aside className={`w-[100dvw] h-[100dvh] ${navbarToggled ? "left-0" : "left-[100%]"} fixed duration-150 bg-black/30 backdrop-blur-sm flex justify-end md:hidden z-10`}>
                <div className="bg-transparent w-[30%] h-full" onClick={handleClick}>
                
                </div>
                <nav className="bg-[#141025] w-[70%] h-full p-6">
                    <header className="flex items-center justify-between bg-transparent">
                        <img
                            width={100}
                            alt="/"
                            src={`${process.env.PUBLIC_URL}/imgs/logo-smaller.png`}
                            className="bg-transparent"
                        />

                        <IoCloseOutline
                            size={35}
                            className="bg-transparent p-1 md:hidden"
                            onClick={handleClick}
                        />
                    </header>

                    <ul className="bg-transparent flex flex-col pt-6 gap-y-2">
                        {navbarLinks.map(({ name, path }) => 
                            <NavbarLink 
                                name={name} 
                                path={path} 
                            />
                        )}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default NavbarComponent;