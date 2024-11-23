type FunctionReferenceType = {
    description: string,
    name: string,
    returnType: string,
    parameters: ({
        name: string,
        description: string,
        dataType: string,
        endPoint?: string,
    })[]
};

export type { FunctionReferenceType };