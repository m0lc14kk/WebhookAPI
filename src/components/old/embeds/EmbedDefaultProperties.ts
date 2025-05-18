import { MAX_COLOR_NUMBER } from "../../../globals"

/**
 * A class to manage default properties of embeds.
 */
class EmbedDefaultProperties {
    private constructor() {}
    private static defaultEmbedColor: number = 0x000000

    /**
     * Sets a default color for all embeds.
     * @param defaultColor Default color of embeds.
     */
    public static setDefaultEmbedColor(defaultColor: string | number): void {
        if (typeof defaultColor == "string") {
            if (!defaultColor.startsWith("#") && defaultColor.length !== 7) throw new Error("DataError: Invalid color HEX.")
            this.defaultEmbedColor = Number(`0x${defaultColor.slice(1)}`)
            return
        }

        if (defaultColor > MAX_COLOR_NUMBER || defaultColor < 0) throw new Error("DataError: Color is out of bounds.")
        this.defaultEmbedColor = Math.floor(defaultColor)
    }

    /**
     * Gets a default color for embeds.
     * @returns Default color of all embeds.
     */
    public static getDefaultEmbedColor(): number {
        return this.defaultEmbedColor
    }
}

export { EmbedDefaultProperties }
