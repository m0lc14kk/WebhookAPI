import React from "react";
import { Link, useParams } from "react-router-dom";
import { DocumentationReferenceType } from "../../../../config/types/DocumentationReferenceType";
import { ClassReferenceType } from "../../../../config/types/ClassReferenceType";
import { documentationReference } from "../../../../config/DocumentationReference";
import NotFoundReferenceComponent from "../../../../components/pages/documentation/NotFoundReferenceComponent";
import CodeBlockComponent from "../../../../components/common/CodeBlockComponent";
import { PUBLIC_URL } from "../../../../utilities/GlobalVariables";

const ClassReferencePage = (): React.JSX.Element => {
    const { className } = useParams();
    const classReference: DocumentationReferenceType<ClassReferenceType> | undefined = documentationReference.find(({ itemName, categoryName }) => categoryName === "class" && className === itemName);

    if (!classReference) return <NotFoundReferenceComponent />

    const hasProperties: boolean = (classReference.data.properties?.length ?? 0) > 0;
    const hasMethods: boolean = (classReference.data.methods?.length ?? 0) > 0;

    return (
        <>
            <main className="bg-transparent flex flex-col py-6 w-full">
                <header className="bg-transparent w-full">
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
                        <ul className="bg-transparent flex flex-col gap-y-1">
                            {hasProperties && (
                                <>
                                    <a href="#properties" className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF]">
                                        Properties
                                    </a>
                                </>
                            )}
                            {hasMethods && (
                                <>
                                    <a href="#methods" className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF]">
                                        Methods
                                    </a>
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

                            <ul className="flex flex-col gap-12 pt-4 w-full">
                                {classReference.data.properties?.map(({ propertyName, propertyType, propertyFlags, propertyDescription, readOnly = false, isStatic = false, endPoint = "" }, methodIndex) => (
                                    <li
                                        key={methodIndex}
                                        className="bg-transparent"
                                    >
                                        <section className="flex gap-x-2 bg-transparent items-center">
                                            <span className="bg-[#FF55FF40] text-[#FF55FF] p-2 rounded-sm font-semibold uppercase">
                                                PROPERTY
                                            </span>

                                            {isStatic && (
                                                <span className="bg-[#00AA0040] text-[#00AA00] p-2 rounded-sm font-semibold uppercase">
                                                    STATIC
                                                </span>
                                            )}

                                            {readOnly && (
                                                <span className="bg-[#FF555540] text-[#FF5555] p-2 rounded-sm font-semibold uppercase">
                                                    READONLY
                                                </span>
                                            )}

                                            <span className="bg-transparent fira-code text-2xl">
                                                {propertyName}
                                            </span>
                                        </section>

                                        <p className="pt-2 bg-transparent text-[#949494] font-medium">
                                            {propertyDescription}
                                        </p>

                                        <CodeBlockComponent copyText={`${propertyName}`} language="typescript">
                                            <span className="bg-transparent text-[#FF9999]">
                                                public{" "}
                                            </span>

                                            {isStatic && (
                                                <span className="bg-transparent text-[#FF9999]">
                                                    static{" "}
                                                </span>
                                            )}

                                            {readOnly && (
                                                <span className="bg-transparent text-[#FF9999]">
                                                    readonly{" "}
                                                </span>
                                            )}

                                            <span className="bg-transparent text-[#CCCCFF]">
                                                {propertyName}
                                            </span>

                                            <span className="bg-transparent">
                                                :{" "}
                                            </span>

                                            {!!endPoint ? (
                                                <Link to={endPoint.startsWith("/") ? `${PUBLIC_URL || ""}${endPoint}` : endPoint} className={`bg-transparent text-[#FFAA00] ${endPoint ? "underline underline-offset-2" : ""}`}>{propertyType}</Link>
                                            ) : (
                                                <span className="bg-transparent text-[#FFAA00]">{propertyType}</span>  
                                            )}
                                        </CodeBlockComponent>

                                        <ul className="bg-transparent flex flex-col gap-y-1 list-disc pl-6 marker:text-lg marker:text-[#949494] pt-1">
                                            {propertyFlags?.map(({ flagName, flagDescription }, key: number) => 
                                                <li className="bg-transparent fira-code" key={key}>
                                                    {flagName} - {flagDescription}
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </>
                )}

                {hasMethods && (
                    <section className="pt-8 w-full">
                        <h4 className="text-xl font-semibold text-gray-400" id="methods">
                            Methods
                        </h4>

                        <ul className="flex flex-col gap-12 pt-4 w-full">
                            {classReference.data.methods?.map(({ name, description, parameters, returnType, isStatic = false, throws = "" }, methodIndex) => (
                                <li
                                    key={methodIndex}
                                    className="bg-transparent"
                                >
                                    <section className="flex gap-x-2 bg-transparent items-center flex-wrap gap-y-1">
                                        <span className="bg-[#FF55FF40] text-[#FF55FF] p-2 rounded-sm font-semibold uppercase">
                                            METHOD
                                        </span>

                                        {isStatic && (
                                            <span className="bg-[#00AA0040] text-[#00AA00] p-2 rounded-sm font-semibold uppercase">
                                                STATIC
                                            </span>
                                        )}

                                        
                                        {throws !== "" && (
                                            <span className="bg-[#FFAA0040] text-[#FFAA00] p-2 rounded-sm font-semibold uppercase">
                                                THROWS
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
                                        <span className="bg-transparent text-[#FF9999]">
                                            public{" "}
                                        </span>

                                        {isStatic && (
                                            <span className="bg-transparent text-[#FF9999]">
                                                static{" "}
                                            </span>
                                        )}
                                        
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
                                                        <Link to={endPoint.startsWith("/") ? `${PUBLIC_URL || ""}${endPoint}` : endPoint} className={`bg-transparent text-[#FFAA00] ${endPoint ? "underline underline-offset-2" : ""}`}>{dataType}</Link>
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

                                    <ul className="bg-transparent flex flex-col gap-y-1 list-disc pl-6 marker:text-lg marker:text-[#949494] pt-2">
                                        {parameters.map(({ name, description, dataType, optional = false }, key: number) => 
                                            <li className="bg-transparent fira-code" key={key}>
                                                {name}{optional ? "?" : ""}: <span className="bg-transparent text-[#FFAA00]">{dataType}</span> - {description}
                                            </li>
                                        )}
                                    </ul>

                                    {throws !== "" && (
                                        <article className="bg-transparent flex flex-col gap-y-1 pt-2">
                                            <h4 className="bg-transparent">
                                                @throws
                                            </h4>

                                            <p className="bg-transparent text-[#949494] font-medium">
                                                {throws}
                                            </p>
                                        </article>
                                    )}
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