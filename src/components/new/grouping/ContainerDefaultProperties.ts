import { MAX_COLOR_NUMBER } from "../../../globals"

/**
 * A class to manage default properties of containers.
 */
class ContainerDefaultProperties {
    private constructor() { }
    private static defaultContainerAccentColor: number | null = 0x000000

    /**
     * Sets a default color for all containers.
     * @param defaultAccentColor Default color of containers.
     * @throws Throws an error if provided color is invalid.
     */
    public static setDefaultContainerAccentColor(defaultAccentColor: string | number | null): void {
        if (defaultAccentColor === null) {
            this.defaultContainerAccentColor = null
            return
        }

        if (typeof defaultAccentColor == "string") {
            if (!defaultAccentColor.startsWith("#") && defaultAccentColor.length !== 7) throw new Error("DataError: Invalid color HEX.")
            this.defaultContainerAccentColor = Number(`0x${defaultAccentColor.slice(1)}`)
            return
        } else if (typeof defaultAccentColor === "number") {
            if (defaultAccentColor > MAX_COLOR_NUMBER || defaultAccentColor < 0) throw new Error("DataError: Color is out of bounds.")
        } else throw new TypeError("TypeError: Invalid default accent color.")

        this.defaultContainerAccentColor = Math.floor(defaultAccentColor)
    }

    /**
     * Gets a default color for containers.
     * @returns Default color of all containers.
     */
    public static getDefaultEmbedColor(): number | null {
        return this.defaultContainerAccentColor
    }
}

export { ContainerDefaultProperties }
