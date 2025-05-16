class EmbedDefaultProperties {
    private constructor() {}
    private static defaultEmbedColor: number = 0x000000

    public static setDefaultEmbedColor(defaultColor: string | number): void {
        if (typeof defaultColor === "string") {
            if (!defaultColor.startsWith("#")) throw new Error("DataError: Invalid color's HEX.")
            this.defaultEmbedColor = Number(`0x${defaultColor.slice(1)}`)
            return
        }

        this.defaultEmbedColor = defaultColor
    }

    public static getDefaultEmbedColor(): number {
        return this.defaultEmbedColor
    }
}

export { EmbedDefaultProperties }
