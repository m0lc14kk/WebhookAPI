import React from "react";
import { Link, useParams } from "react-router-dom";
import type { DocumentationReferenceType } from "../../../../config/types/DocumentationReferenceType";
import type { InterfaceReferenceType } from "../../../../config/types/InterfaceReferenceType";
import { documentationReference } from "../../../../config/DocumentationReference";
import NotFoundReferenceComponent from "../../../../components/pages/documentation/NotFoundReferenceComponent";
import CodeBlockComponent from "../../../../components/common/CodeBlockComponent";

const InterfaceReferencePage = (): React.JSX.Element => {
    const { interfaceName } = useParams();
    const interfaceReference: DocumentationReferenceType<InterfaceReferenceType> | undefined = documentationReference.find(({ itemName, categoryName }) => categoryName === "interface" && interfaceName === itemName);

    if (!interfaceReference) return <NotFoundReferenceComponent />

    const hasProperties: boolean = (interfaceReference.data.properties?.length ?? 0) > 0;

    return (
        <>
            <main className="bg-transparent flex flex-col py-6 w-full">
                <header className="bg-transparent w-full">
                    <h3 className="bg-transparent">
                        Interface <span className="bg-transparent font-mono">{interfaceReference.itemName}</span>
                    </h3>

                    <p className="bg-transparent font-medium text-lg text-[#949494] pt-2">
                        {interfaceReference.data.description}
                    </p>

                    {!!interfaceReference.data.extendedBy && (
                        <CodeBlockComponent copyText="" language="typescript">
                            <span className="bg-transparent text-[#FF9999]">
                                interface{" "}
                            </span>

                            <span className="bg-transparent text-[#CCCCFF]">
                                {interfaceReference.itemName}{" "}
                            </span>

                            <span className="bg-transparent text-[#FF9999]">
                                extends{" "}
                            </span>

                            <Link to={`${process.env.PUBLIC_URL}${interfaceReference.data.extendedBy.endPoint}`} className="bg-transparent text-[#CCCCFF] underline-offset-2 underline">
                                {interfaceReference.data.extendedBy.name}{" "}
                            </Link>
                        </CodeBlockComponent>
                    )}

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
                                {interfaceReference.data.properties?.map(({ propertyName, propertyType, propertyFlags, propertyDescription, endPoint = "", readOnly = false, optional = false }, methodIndex) => (
                                    <li
                                        key={methodIndex}
                                        className="bg-transparent"
                                    >
                                        <section className="flex gap-x-2 bg-transparent items-center">
                                            <span className="bg-[#FF55FF40] text-[#FF55FF] p-2 rounded-sm font-semibold uppercase">
                                                PROPERTY
                                            </span>

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
                                            {readOnly && (
                                                <span className="bg-transparent text-[#FF9999]">
                                                    readonly{" "}
                                                </span>
                                            )}

                                            <span className="bg-transparent text-[#CCCCFF]">
                                                {propertyName}
                                            </span>

                                            <span className="bg-transparent">
                                                {optional ? "?" : ""}:{" "}
                                            </span>

                                            {!!endPoint ? (
                                                <Link to={endPoint.startsWith("/") ? `${process.env.PUBLIC_URL || ""}${endPoint}` : endPoint} className={`bg-transparent text-[#FFAA00] ${endPoint ? "underline underline-offset-2" : ""}`}>{propertyType}</Link>
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
            </main>
        </>
    );
};

export default InterfaceReferencePage;