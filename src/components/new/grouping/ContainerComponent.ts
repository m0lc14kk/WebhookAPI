import { MAX_COLOR_NUMBER } from "../../../globals"
import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { ContainerDefaultProperties } from "./ContainerDefaultProperties"
import { ContainerComponentTypes } from "./types/ContainerComponentTypes"

class ContainerComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.CONTAINER
    private components: ContainerComponentTypes[] = []
    private accentColor: number | null = ContainerDefaultProperties.getDefaultEmbedColor()
    private spoiler: boolean = false

    /**
     * Sets new components to this container.
     * @param components New components.
     * @returns Edited instance.
     */
    public setComponents(...components: ContainerComponentTypes[]): this {
        this.components = components
        return this
    }

    /**
     * Adds new components to existing ones.
     * @param components New components.
     * @returns Edited instance.
     */
    public addComponents(...components: ContainerComponentTypes[]): this {
        this.components.push(...components)
        return this
    }

    /**
     * Sets an accent color of a container.
     * @param accentColor New color of a container.
     * @throws Throws an error if provided accent color as a HEX string is invalid.
     * @returns Edited instance.
     */
    public setAccentColor(accentColor: string | number | null): this {
        if (accentColor === null) {
            this.accentColor = null
            return this
        }

        if (typeof accentColor == "string") {
            if (!accentColor.startsWith("#") && accentColor.length !== 7) throw new Error("DataError: Invalid color HEX.")
            this.accentColor = Number(`0x${accentColor.slice(1)}`)
            return this
        }

        if (accentColor > MAX_COLOR_NUMBER || accentColor < 0) throw new Error("DataError: Color is out of bounds.")
        this.accentColor = Math.floor(accentColor)
        return this
    }

    /**
     * Sets a spoiler of a container.
     * @param spoiler Spoiler state.
     * @returns Edited instance.
     */
    public setSpoiler(spoiler: boolean): this {
        this.spoiler = spoiler
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (this.components.length === 0) throw new Error("DataError: You have to provide at least 1 component of a action row.")

        return {
            type: ContainerComponent.type,
            accent_color: this.accentColor,
            spoiler: this.spoiler,
            components: this.components.map((component: Component) => component.toJSON()),
        }
    }
}

export { ContainerComponent }
