import { MAX_COLOR_NUMBER } from "../../../globals"
import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { SeparatorComponent } from "../display/SeparatorComponent"
import { TextDisplayComponent } from "../display/TextDisplayComponent"
import { FileComponent } from "../media/FileComponent"
import { MediaGalleryComponent } from "../media/MediaGalleryComponent"
import { ActionRowComponent } from "./ActionRowComponent"
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
        this.validateComponents(components)
        this.components = components
        return this
    }

    /**
     * Adds new components to existing ones.
     * @param components New components.
     * @returns Edited instance.
     */
    public addComponents(...components: ContainerComponentTypes[]): this {
        this.validateComponents(components)
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
        } else if (typeof accentColor === "number") {
            if (accentColor > MAX_COLOR_NUMBER || accentColor < 0) throw new Error("DataError: Color is out of bounds.")
        } else throw new TypeError("TypeError: Container's accent color must be a HEX string, number or null.")

        this.accentColor = Math.floor(accentColor)
        return this
    }

    /**
     * Sets a spoiler of a container.
     * @param spoiler Spoiler state.
     * @returns Edited instance.
     */
    public setSpoiler(spoiler: boolean): this {
        if (typeof spoiler !== "boolean") throw new TypeError("TypeError: Container's spoiler state must be a boolean.")
        this.spoiler = spoiler
        return this
    }

    private validateComponents(components: unknown[]): void {
        for (const component of components) {
            if (component instanceof ActionRowComponent) continue
            if (component instanceof TextDisplayComponent) continue
            if (component instanceof MediaGalleryComponent) continue
            if (component instanceof FileComponent) continue
            if (component instanceof SeparatorComponent) continue
            throw new TypeError("TypeError: You cannot provide this type to a container as a component.")
        }
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
