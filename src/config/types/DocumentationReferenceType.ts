import type { ClassReferenceType } from "./ClassReferenceType";

type DocumentationReferenceType<ReferenceType = ClassReferenceType> = {
    readonly categoryName: "class" | "interface" | "type" | "function",
    readonly itemName: string,
    readonly itemLinkTarget: string,
    readonly data: ReferenceType
};

export type { DocumentationReferenceType };