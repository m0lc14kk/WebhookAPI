type InterfaceReferenceType = {
    readonly properties: ({
        propertyName: string,
        propertyType: string,
        propertyFlags: ({
            flagName: string,
            flagDescription: string
        })[]
    })[]
};

export type { InterfaceReferenceType };