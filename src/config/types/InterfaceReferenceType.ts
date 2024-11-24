type InterfaceReferenceType = {
    readonly description: string,
    readonly extendedBy?: {
        name: string,
        endPoint?: string,
    },

    readonly properties: ({
        readOnly?: boolean,
        endPoint?: string,
        propertyName: string,
        propertyType: string,
        propertyDescription: string,
        propertyFlags: ({
            flagName: string,
            flagDescription: string
        })[]
    })[]
};

export type { InterfaceReferenceType };