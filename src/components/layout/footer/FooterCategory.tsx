import React from "react";
import type { FooterCategoryType } from "./types/FooterCategoryType";
import { Link } from "react-router-dom";

const FooterCategory = ({ name, links }: FooterCategoryType): React.JSX.Element => {
    return (
        <>
            <div className="bg-transparent flex flex-col gap-y-1 h-full max-lg:w-full">
                <h4 className="bg-transparent text-[#949494] max-lg:text-center">
                    {name}
                </h4>

                <ul className="bg-transparent flex flex-col gap-y-1 w-full max-lg:items-center">
                    {links.map(({ linkName, linkPath }, index: number) => 
                        <li className="bg-transparent" key={index}>
                            <Link to={linkPath} className="bg-transparent text-[#949494] duration-100 hover:text-[#FF55FF] ease-in-out transition-all">
                                {linkName}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default FooterCategory;