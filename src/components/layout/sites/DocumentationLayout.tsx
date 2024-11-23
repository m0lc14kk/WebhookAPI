import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";
import { DocumentationReferenceType } from "../../../config/types/DocumentationReferenceType";
import { ClassReferenceType } from "../../../config/types/ClassReferenceType";
import { documentationReference } from "../../../config/DocumentationReference";

// to-do: add documentation sidebar
const DocumentationLayout = (): React.JSX.Element => {
    const classes: DocumentationReferenceType<ClassReferenceType>[] = documentationReference.filter(({ categoryName }: DocumentationReferenceType<any>) => categoryName === "class") as DocumentationReferenceType<ClassReferenceType>[];

    return (
        <>
            <main className="bg-transparent flex w-[100dvw] pt-24 h-[150dvh]">
                <aside className="max-lg:hidden bg-transparent w-[30%] bg-[#141025] h-full pl-8 lg:pl-[14%] border-r-2 border-r-[#90909020] py-6 flex flex-col">
                    <ul className="bg-transparent flex flex-col gap-y-1">
                        <Link to={`${process.env.PUBLIC_URL}/documentation`} className="bg-transparent flex gap-x-2 items-center group">
                            <FaHome 
                                size={20}
                                className="bg-[#141025] stroke-transparent fill-[#949494] p-1 rounded-sm duration-150 group-hover:fill-[#FF55FF]"
                            />
                            
                            <span className="bg-transparent text-[#949494] font-medium duration-150 group-hover:text-[#FF55FF]">
                                Home
                            </span>
                        </Link>

                        <Link to={`${process.env.PUBLIC_URL}/installation`} className="bg-transparent flex gap-x-2 items-center group">
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
                            <>
                                <h4 className="bg-transparent text-[#949494] pt-6">
                                    CLASSES
                                </h4>
                            </>
                        )}
                    </section>
                </aside>

                <Outlet />
            </main>
        </>
    );
};

export default DocumentationLayout;