import React from "react";
import { Link, useParams } from "react-router-dom";
import { DocumentationReferenceType } from "../../../../config/types/DocumentationReferenceType";
import { ClassReferenceType } from "../../../../config/types/ClassReferenceType";
import { documentationReference } from "../../../../config/DocumentationReference";
import NotFoundReferenceComponent from "../../../../components/pages/documentation/NotFoundReferenceComponent";
import CodeBlockComponent from "../../../../components/common/CodeBlockComponent";

const ClassReferencePage = (): React.JSX.Element => {
    const { className } = useParams();
    const classReference: DocumentationReferenceType<ClassReferenceType> | undefined = documentationReference.find(({ itemName, categoryName }) => categoryName === "class" && className === itemName);

    if (!classReference) return <NotFoundReferenceComponent />

    const hasProperties: boolean = (classReference.data.properties?.length ?? 0) > 0;
    const hasMethods: boolean = (classReference.data.methods?.length ?? 0) > 0;

    return (
        <>
            <main className="bg-transparent flex flex-col lg:pr-[20%] p-6 w-full">
                <header className="bg-transparent">
                    <h3 className="bg-transparent">
                        Class <span className="bg-transparent font-mono">{classReference.itemName}</span>
                    </h3>

                    <p className="bg-transparent font-medium text-lg text-[#949494] pt-2">
                        {classReference.data.description}
                    </p>

                    <h4 className="bg-transparent text-xl text-[#949494] pt-8">
                        Reference
                    </h4>

                    <nav className="bg-transparent">
                        <ul className="bg-transparent">
                            {hasProperties && (
                                <>
                                    <Link to="#properties" className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF]">
                                        Properties
                                    </Link>
                                </>
                            )}
                            {hasMethods && (
                                <>
                                    <Link to="#methods" className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF]">
                                        Methods
                                    </Link>
                                </>
                            )}
                        </ul>
                    </nav>
                </header>

                {hasProperties && (
                    <>
                        <section className="bg-transparent pt-8">
                            <h4 className="bg-transparent text-xl text-[#949494]" id="properties">
                                Properties
                            </h4>
                        </section>
                    </>
                )}

                {hasMethods && (
                    <section className="pt-8 w-full">
                        <h4 className="text-xl font-semibold text-gray-400" id="methods">
                            Methods
                        </h4>

                        <ul className="flex flex-col gap-12 pt-4 w-full">
                            {classReference.data.methods?.map(({ name, description, parameters, returnType, isStatic = false }, methodIndex) => (
                                <li
                                    key={methodIndex}
                                    className="bg-transparent"
                                >
                                    <section className="flex gap-x-2 bg-transparent items-center">
                                        <span className="bg-[#FF55FF40] text-[#FF55FF] p-2 rounded-sm font-semibold uppercase">
                                            METHOD
                                        </span>

                                        {isStatic && (
                                            <span className="bg-[#00AA0040] text-[#00AA00] p-2 rounded-sm font-semibold uppercase">
                                                STATIC
                                            </span>
                                        )}

                                        <span className="bg-transparent fira-code text-2xl">
                                            {name}
                                        </span>
                                    </section>

                                    <p className="pt-2 bg-transparent text-[#949494] font-medium">
                                        {description}
                                    </p>

                                    <CodeBlockComponent copyText={`${name}(${parameters.map(({ name }) => name).join(", ")});`} language="typescript">
                                        <span className="bg-transparent text-[#CCCCFF]">
                                            {name}
                                        </span>
                                        <span className="bg-transparent">
                                            (
                                        </span>

                                        <span className="bg-transparent">
                                            {parameters.map(({ name, dataType, endPoint = "", optional = false }, index: number) => 
                                                <span className="bg-transparent">
                                                    {name}{optional ? "?" : ""}: {!!endPoint ? (
                                                        <Link to={endPoint.startsWith("/") ? `${process.env.PUBLIC_URL || ""}${endPoint}` : endPoint} className={`bg-transparent text-[#FFAA00] ${endPoint ? "underline underline-offset-2" : ""}`}>{dataType}</Link>
                                                    ) : (
                                                        <span className="bg-transparent text-[#FFAA00]">{dataType}</span>  
                                                    )}{index < (parameters.length - 1) ? ", " : ""}
                                                </span>
                                            )}
                                        </span>

                                        <span className="bg-transparent">
                                            ):{" "}
                                        </span>

                                        <span className="bg-transparent text-[#99AAFF]">
                                            {returnType}
                                        </span>
                                    </CodeBlockComponent>

                                    <ul className="bg-transparent flex flex-col gap-y-1 list-disc pl-6 marker:text-lg marker:text-[#949494] pt-1">
                                        {parameters.map(({ name, description, dataType, optional = false }, key: number) => 
                                            <li className="bg-transparent fira-code" key={key}>
                                                {name}{optional ? "?" : ""}: <span className="bg-transparent text-[#FFAA00]">{dataType}</span> - {description}
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
        </>
    );
};

export default ClassReferencePage;