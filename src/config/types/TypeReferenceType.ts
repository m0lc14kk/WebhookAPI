type TypeReferenceType = {
    readonly content: string,
    readonly description: string,
    readonly typeFlags: ({
        flagName: string,
        flagDescription: string
    })[]
};

export type { TypeReferenceType };