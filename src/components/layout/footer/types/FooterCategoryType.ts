type FooterCategoryType = {
    readonly name: string,
    readonly links: Array<{
        readonly linkName: string,
        readonly linkPath: string
    }>
};

export type { FooterCategoryType };