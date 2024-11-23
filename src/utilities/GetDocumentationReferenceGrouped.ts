import { documentationReference } from "../config/DocumentationReference";
import type { ClassReferenceType } from "../config/types/ClassReferenceType";
import { ConstantReferenceType } from "../config/types/ConstantReferenceType";
import type { DocumentationReferenceType } from "../config/types/DocumentationReferenceType";
import { EnumReferenceType } from "../config/types/EnumReferenceType";
import { FunctionReferenceType } from "../config/types/FunctionReferenceType";
import type { InterfaceReferenceType } from "../config/types/InterfaceReferenceType";
import type { TypeReferenceType } from "../config/types/TypeReferenceType";

const getDocumentationReferenceGrouped = () => {
    const classes: DocumentationReferenceType<ClassReferenceType>[] = [];
    const interfaces: DocumentationReferenceType<InterfaceReferenceType>[] = [];
    const types: DocumentationReferenceType<TypeReferenceType>[] = [];
    const constants: DocumentationReferenceType<ConstantReferenceType>[] = [];
    const functions: DocumentationReferenceType<FunctionReferenceType>[] = [];
    const enums: DocumentationReferenceType<EnumReferenceType>[] = [];

    for (const item of documentationReference) {
        switch (item.categoryName) {
            case "class":
                classes.push(item as DocumentationReferenceType<ClassReferenceType>);
                break;

            case "interface":
                interfaces.push(item as DocumentationReferenceType<InterfaceReferenceType>);
                break;

            case "type":
                types.push(item as DocumentationReferenceType<TypeReferenceType>);
                break;

            case "constant":
                constants.push(item as DocumentationReferenceType<ConstantReferenceType>);
                break;

            case "function":
                functions.push(item as DocumentationReferenceType<FunctionReferenceType>);
                break;

            case "enum":
                enums.push(item as DocumentationReferenceType<EnumReferenceType>);
                break;
        };
    };

    return { classes, interfaces, types, constants, functions, enums };
};

export { getDocumentationReferenceGrouped };