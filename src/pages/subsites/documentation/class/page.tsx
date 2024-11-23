import React from "react";
import { Link, useParams } from "react-router-dom";
import { DocumentationReferenceType } from "../../../../config/types/DocumentationReferenceType";
import { ClassReferenceType } from "../../../../config/types/ClassReferenceType";
import { documentationReference } from "../../../../config/DocumentationReference";
import NotFoundReferenceComponent from "../../../../components/pages/documentation/NotFoundReferenceComponent";

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

                        <ul className="flex flex-col gap-6 pt-4 w-full">
                            {classReference.data.methods?.map(({ name, description, parameters, returnType }, methodIndex) => (
                                <li
                                    key={methodIndex}
                                    className="bg-[#141025] rounded-md p-6 w-full shadow-md"
                                >
                                    <p className="font-mono bg-[#1A1A2D] text-white rounded-md p-3 w-full">
                                        {name}(
                                        {parameters
                                            .map(({ name, dataType }) => `${name}: ${dataType}`)
                                            .join(", ")}
                                        ): {returnType}
                                    </p>

                                    <p className="text-[#949494] pt-3 text-base font-medium bg-transparent">
                                        {description}
                                    </p>

                                    {parameters.length > 0 && (
                                        <>
                                            <h5 className="text-sm text-gray-400 pt-4 uppercase tracking-wider bg-transparent">
                                                Parameters
                                            </h5>
                                            <ul className="flex flex-col gap-2 pt-2 bg-transparent">
                                                {parameters.map(({ name, description, dataType, endPoint }, paramIndex) => (
                                                    <li
                                                        key={paramIndex}
                                                        className="text-[#949494] bg-transparent"
                                                    >
                                                        <span className="font-mono bg-transparent">
                                                            {name}:{" "}
                                                            {endPoint ? (
                                                                <Link
                                                                    to={`${
                                                                        process.env.PUBLIC_URL || ""
                                                                    }/${endPoint}`}
                                                                    className="text-[#5555FF] duration-150 hover:text-[#FF55FF] bg-transparent"
                                                                >
                                                                    {dataType}
                                                                </Link>
                                                            ) : (
                                                                <span className="bg-transparent">{dataType}</span>
                                                            )}
                                                        </span>
                                                        <span className="text-gray-400 bg-transparent">
                                                            <br />{description}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
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