type ClassReferenceType = {
    readonly description: string,
    readonly methods?: ({
        throws?: string,
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
        readOnly?: boolean,
        isStatic?: boolean,
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

export type { ClassReferenceType };