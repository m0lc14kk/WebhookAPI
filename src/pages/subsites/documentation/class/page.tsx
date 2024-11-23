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

    return (
        <>
            <header className="bg-transparent lg:pr-[20%] p-6">
                <h3 className="bg-transparent">
                    Class <span className="bg-transparent font-mono">{classReference.itemName}</span>
                </h3>

                <p className="bg-transparent font-medium text-lg text-[#949494] pt-2">
                    {classReference.data.description}
                </p>

                <h4 className="bg-transparent text-[#949494] pt-8">
                    REFERENCE
                </h4>

                <nav className="bg-transparent">
                    <ul className="bg-transparent">
                        {(classReference.data.properties?.length ?? 0) > 0 && (
                            <>
                                <Link to="#properties" className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF]">
                                    Properties
                                </Link>
                            </>
                        )}
                        {(classReference.data.methods?.length ?? 0) > 0 && (
                            <>
                                <Link to="#methods" className="bg-transparent text-[#949494] duration-150 hover:text-[#FF55FF]">
                                    Methods
                                </Link>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default ClassReferencePage;