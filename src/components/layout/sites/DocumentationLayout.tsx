import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";
import { DocumentationReferenceType } from "../../../config/types/DocumentationReferenceType";
import { ClassReferenceType } from "../../../config/types/ClassReferenceType";
import { InterfaceReferenceType } from "../../../config/types/InterfaceReferenceType";
import { TypeReferenceType } from "../../../config/types/TypeReferenceType";
import { getDocumentationReferenceGrouped } from "../../../utilities/GetDocumentationReferenceGrouped";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { PUBLIC_URL } from "../../../utilities/GlobalVariables";

const DocumentationLayout = (): React.JSX.Element => {
    const [documentationSidebar, setDocumentationSidebar] = useState<boolean>(false);
    const { classes, interfaces, types } = getDocumentationReferenceGrouped();
    const handleClick = (): void => {
        setDocumentationSidebar(!documentationSidebar);
    };

    return (
        <>
            <aside className={`w-[100dvw] h-[100dvh] ${documentationSidebar ? "left-0" : "left-[100%]"} fixed duration-150 bg-black/30 backdrop-blur-sm flex justify-end lg:hidden z-10`}>
                <div className="bg-transparent w-[30%] h-full" onClick={handleClick}>
                
                </div>
                <nav className="bg-[#141025] w-[70%] h-full p-6">
                    <header className="flex items-center justify-between bg-transparent">
                        <Link to={`${PUBLIC_URL}/`} className="bg-transparent">
                            <img
                                width={100}
                                alt="/"
                                src={`${PUBLIC_URL}/imgs/logo-smaller.png`}
                                className="bg-transparent"
                            />
                        </Link>

                        <IoCloseOutline
                            size={35}
                            className="bg-transparent p-1 md:hidden"
                            onClick={handleClick}
                        />
                    </header>

                    <ul className="bg-transparent flex flex-col gap-y-1 pt-4">
                        <Link to={`${PUBLIC_URL}/documentation`} className="bg-transparent flex gap-x-2 items-center group">
                            <FaHome 
                                size={20}
                                className="bg-[#141025] stroke-transparent fill-[#949494] p-1 rounded-sm duration-150 group-hover:fill-[#FF55FF]"
                            />
                            
                            <span className="bg-transparent text-[#949494] font-medium duration-150 group-hover:text-[#FF55FF]">
                                Home
                            </span>
                        </Link>

                        <Link to={`${PUBLIC_URL}/installation`} className="bg-transparent flex gap-x-2 items-center group">
                            <FaBook
                                size={20}
                                className="bg-[#141025] stroke-transparent fill-[#949494] p-1 rounded-sm duration-150 group-hover:fill-[#FF55FF]"
                            />
                            
                            <span className="bg-transparent text-[#949494] font-medium duration-150 group-hover:text-[#FF55FF]">
                                Installation
                            </span>
                        </Link>
                    </ul>

                    <section className="bg-transparent flex flex-col gap-y-2">
                        {classes.length > 0 && (
                            <article className="bg-transparent flex flex-col gap-y-1">
                                <h4 className="bg-transparent text-[#949494] pt-6">
                                    CLASSES
                                </h4>

                                <ul className="bg-transparent flex flex-col">
                                    {classes.map(({ itemLinkTarget, itemName }: DocumentationReferenceType<ClassReferenceType>, key: number) => {
                                        return (
                                            <Link key={key} to={`${PUBLIC_URL || ""}${itemLinkTarget}`} className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF] visited:text-[#5555FF] font-medium">
                                                {itemName}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </article>
                        )}

                        {interfaces.length > 0 && (
                            <article className="bg-transparent flex flex-col gap-y-1">
                                <h4 className="bg-transparent text-[#949494] pt-6">
                                    INTERFACES
                                </h4>

                                <ul className="bg-transparent flex flex-col">
                                    {interfaces.map(({ itemLinkTarget, itemName }: DocumentationReferenceType<InterfaceReferenceType>, key: number) => {
                                        return (
                                            <Link key={key} to={`${PUBLIC_URL || ""}${itemLinkTarget}`} className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF] visited:text-[#5555FF] font-medium">
                                                {itemName}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </article>
                        )}

                        {types.length > 0 && (
                            <article className="bg-transparent flex flex-col gap-y-1">
                                <h4 className="bg-transparent text-[#949494] pt-6">
                                    TYPES
                                </h4>

                                <ul className="bg-transparent flex flex-col">
                                    {types.map(({ itemLinkTarget, itemName }: DocumentationReferenceType<TypeReferenceType>, key: number) => {
                                        return (
                                            <Link key={key} to={`${PUBLIC_URL || ""}${itemLinkTarget}`} className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF] visited:text-[#5555FF] font-medium">
                                                {itemName}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </article>
                        )}
                    </section>
                </nav>
            </aside>

            <nav className="bg-transparent lg:hidden pt-[7rem] pb-4 flex items-center justify-between px-8 border-b-2 border-b-[#90909020]">
                <Link to={`${PUBLIC_URL}/documentation`} className="bg-transparent flex gap-x-2 items-center group">
                    <FaHome 
                        size={20}
                        className="bg-[#141025] stroke-transparent fill-[#949494] p-1 rounded-sm duration-150 group-hover:fill-[#FF55FF]"
                    />
                    
                    <span className="bg-transparent text-[#949494] font-medium duration-150 group-hover:text-[#FF55FF]">
                        Documentation Home
                    </span>
                </Link>

                <BsThreeDotsVertical
                    size={30}
                    className="bg-transparent p-1"
                    onClick={handleClick}
                />
            </nav>

            <main className="bg-transparent flex w-[100dvw] pt-24 h-full">
                <aside className="max-lg:hidden bg-transparent w-[30%] bg-[#141025] h-full pl-8 lg:pl-[14%] border-r-2 border-r-[#90909020] py-6 flex flex-col">
                    <ul className="bg-transparent flex flex-col gap-y-1">
                        <Link to={`${PUBLIC_URL}/documentation`} className="bg-transparent flex gap-x-2 items-center group">
                            <FaHome 
                                size={20}
                                className="bg-[#141025] stroke-transparent fill-[#949494] p-1 rounded-sm duration-150 group-hover:fill-[#FF55FF]"
                            />
                            
                            <span className="bg-transparent text-[#949494] font-medium duration-150 group-hover:text-[#FF55FF]">
                                Home
                            </span>
                        </Link>

                        <Link to={`${PUBLIC_URL}/installation`} className="bg-transparent flex gap-x-2 items-center group">
                            <FaBook
                                size={20}
                                className="bg-[#141025] stroke-transparent fill-[#949494] p-1 rounded-sm duration-150 group-hover:fill-[#FF55FF]"
                            />
                            
                            <span className="bg-transparent text-[#949494] font-medium duration-150 group-hover:text-[#FF55FF]">
                                Installation
                            </span>
                        </Link>
                    </ul>

                    <section className="bg-transparent flex flex-col gap-y-2">
                        {classes.length > 0 && (
                            <article className="bg-transparent flex flex-col gap-y-1">
                                <h4 className="bg-transparent text-[#949494] pt-6">
                                    CLASSES
                                </h4>

                                <ul className="bg-transparent flex flex-col">
                                    {classes.map(({ itemLinkTarget, itemName }: DocumentationReferenceType<ClassReferenceType>, key: number) => {
                                        return (
                                            <Link key={key} to={`${PUBLIC_URL || ""}${itemLinkTarget}`} className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF] visited:text-[#5555FF] font-medium">
                                                {itemName}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </article>
                        )}

                        {interfaces.length > 0 && (
                            <article className="bg-transparent flex flex-col gap-y-1">
                                <h4 className="bg-transparent text-[#949494] pt-6">
                                    INTERFACES
                                </h4>

                                <ul className="bg-transparent flex flex-col">
                                    {interfaces.map(({ itemLinkTarget, itemName }: DocumentationReferenceType<InterfaceReferenceType>, key: number) => {
                                        return (
                                            <Link key={key} to={`${PUBLIC_URL || ""}${itemLinkTarget}`} className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF] visited:text-[#5555FF] font-medium">
                                                {itemName}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </article>
                        )}

                        {types.length > 0 && (
                            <article className="bg-transparent flex flex-col gap-y-1">
                                <h4 className="bg-transparent text-[#949494] pt-6">
                                    TYPES
                                </h4>

                                <ul className="bg-transparent flex flex-col">
                                    {types.map(({ itemLinkTarget, itemName }: DocumentationReferenceType<TypeReferenceType>, key: number) => {
                                        return (
                                            <Link key={key} to={`${PUBLIC_URL || ""}${itemLinkTarget}`} className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF] visited:text-[#5555FF] font-medium">
                                                {itemName}
                                            </Link>
                                        );
                                    })}
                                </ul>
                            </article>
                        )}
                    </section>
                </aside>

                <main className="w-full lg:pr-[20%] px-8">
                    <Outlet />
                </main>
            </main>
        </>
    );
};

export default DocumentationLayout;