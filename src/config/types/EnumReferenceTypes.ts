type EnumReferenceTypes = {
    readonly pairs: ({
        name: string,
        value: string,
        readonly pairFlags: ({
            flagName: string,
            flagDescription: string
        })[]
    })[]
};

export type { EnumReferenceTypes };