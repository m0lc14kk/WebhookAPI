import { MAX_COLOR_NUMBER } from "../../../globals"

class EmbedDefaultProperties {
    private constructor() {}
    private static defaultEmbedColor: number = 0x000000

    public static setDefaultEmbedColor(defaultColor: string | number): void {
        if (typeof defaultColor == "string") {
            if (!defaultColor.startsWith("#") && defaultColor.length !== 7) throw new Error("DataError: Invalid color HEX.")
            this.defaultEmbedColor = Number(`0x${defaultColor.slice(1)}`)
            return
        }

        if (defaultColor > MAX_COLOR_NUMBER || defaultColor < 0) throw new Error("DataError: Color is out of bounds.")
        this.defaultEmbedColor = Math.floor(defaultColor)
    }

    public static getDefaultEmbedColor(): number {
        return this.defaultEmbedColor
    }
}

export { EmbedDefaultProperties }
