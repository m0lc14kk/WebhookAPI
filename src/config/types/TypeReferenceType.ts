type TypeReferenceType = {
    readonly content: string,
    readonly description: string,
    readonly extendedBy?: {
        name: string,
        endPoint?: string,
    },
};

export type { TypeReferenceType };