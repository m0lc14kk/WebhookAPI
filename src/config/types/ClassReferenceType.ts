type ClassReferenceType = {
    readonly description: string,
    readonly methods?: ({
        description: string,
        name: string,
        returnType: string,
        parameters: ({
            name: string,
            description: string,
            dataType: string,
            endPoint?: string,
        })[]
    })[],

    readonly properties?: ({
        propertyName: string,
        propertyType: string,
        propertyFlags: ({
            flagName: string,
            flagDescription: string
        })[]
    })[]
};

export type { ClassReferenceType };