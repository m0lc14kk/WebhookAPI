import type { ClassReferenceType } from "./ClassReferenceType";
import { ConstantReferenceType } from "./ConstantReferenceType";
import { FunctionReferenceType } from "./FunctionReferenceType";
import type { InterfaceReferenceType } from "./InterfaceReferenceType";
import type { TypeReferenceType } from "./TypeReferenceType";

type DocumentationReferenceType<ReferenceType = ClassReferenceType | InterfaceReferenceType | TypeReferenceType | ConstantReferenceType | FunctionReferenceType> = {
    readonly categoryName: "class" | "interface" | "type" | "function" | "constant",
    readonly itemName: string,
    readonly itemLinkTarget: string,
    readonly data: ReferenceType
};

export type { DocumentationReferenceType };