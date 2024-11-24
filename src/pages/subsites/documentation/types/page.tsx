import React from "react";
import { Link, useParams } from "react-router-dom";
import type { DocumentationReferenceType } from "../../../../config/types/DocumentationReferenceType";
import type { TypeReferenceType } from "../../../../config/types/TypeReferenceType";
import { documentationReference } from "../../../../config/DocumentationReference";
import NotFoundReferenceComponent from "../../../../components/pages/documentation/NotFoundReferenceComponent";
import CodeBlockComponent from "../../../../components/common/CodeBlockComponent";

const TypeReferencePage = (): React.JSX.Element => {
    const { typeName } = useParams();
    const typeReference: DocumentationReferenceType<TypeReferenceType> | undefined = documentationReference.find(({ itemName, categoryName }) => categoryName === "type" && typeName === itemName);

    if (!typeReference) return <NotFoundReferenceComponent />

    return (
        <>
            <main className="bg-transparent flex flex-col py-6 w-full">
                <header className="bg-transparent w-full">
                    <h3 className="bg-transparent">
                        Interface <span className="bg-transparent font-mono">{typeReference.itemName}</span>
                    </h3>

                    <p className="bg-transparent font-medium text-lg text-[#949494] pt-2">
                        {typeReference.data.description}
                    </p>

                    {!!typeReference.data.extendedBy && (
                        <CodeBlockComponent copyText="" language="typescript">
                            <span className="bg-transparent text-[#FF9999]">
                                type{" "}
                            </span>

                            <span className="bg-transparent text-[#CCCCFF]">
                                {typeReference.itemName}{" "}
                            </span>

                            <span className="bg-transparent text-[#FF9999]">
                                extends{" "}
                            </span>

                            <Link to={`${process.env.PUBLIC_URL}${typeReference.data.extendedBy.endPoint}`} className="bg-transparent text-[#CCCCFF] underline-offset-2 underline">
                                {typeReference.data.extendedBy.name}{" "}
                            </Link>
                        </CodeBlockComponent>
                    )}
                </header>

                <section className="bg-transparent pt-8">
                    <section className="flex gap-x-2 bg-transparent items-center pt-12">
                        <span className="bg-[#FF55FF40] text-[#FF55FF] p-2 rounded-sm font-semibold uppercase">
                            TYPE
                        </span>

                        <span className="bg-transparent fira-code text-2xl">
                            {typeReference.itemName}
                        </span>
                    </section>

                    <p className="pt-2 bg-transparent text-[#949494] font-medium">
                        {typeReference.data.description}
                    </p>

                    <CodeBlockComponent copyText={`${typeReference.itemName}`} language="typescript">
                        <span className="bg-transparent text-[#FF9999]">
                            type{" "}
                        </span>

                        <span className="bg-transparent text-[#CCCCFF]">
                            {typeReference.itemName}
                        </span>

                        <span className="bg-transparent">
                            {" "}={" "}
                        </span>

                        <span className="bg-transparent text-[#FFAA00]">{typeReference.data.content}</span>  
                    </CodeBlockComponent>
                </section>
            </main>
        </>
    );
};

export default TypeReferencePage;