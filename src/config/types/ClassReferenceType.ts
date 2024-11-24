type ClassReferenceType = {
    readonly description: string,
    readonly methods?: ({
        isStatic?: boolean,
        description: string,
        name: string,
        returnType: string,
        parameters: ({
            name: string,
            description: string,
            dataType: string,
            endPoint?: string,
            optional?: boolean,
        })[]
    })[],

    readonly properties?: ({
        isStatic?: boolean,
        propertyName: string,
        propertyType: string,
        propertyFlags: ({
            flagName: string,
            flagDescription: string
        })[]
    })[]
};

export type { ClassReferenceType };