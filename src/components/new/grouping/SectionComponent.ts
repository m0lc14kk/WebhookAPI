import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import type { SectionComponentTypes } from "./types/SectionComponentTypes"
import { SectionAccessoryTypes } from "./types/SectionAccessoryTypes"

class SectionComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.SECTION
    private components: SectionComponentTypes[] = []
    private accessory: SectionAccessoryTypes | null = null

    /**
     * Sets new components to this section.
     * @param components New components.
     * @returns Edited instance.
     */
    public setComponents(...components: SectionComponentTypes[]): this {
        this.components = components
        return this
    }

    /**
     * Adds new components to existing ones.
     * @param components New components.
     * @returns Edited instance.
     */
    public addComponents(...components: SectionComponentTypes[]): this {
        this.components.push(...components)
        return this
    }

    /**
     * Sets an accessory of a section.
     * @param accessory New accessory.
     * @returns Edited instance.
     */
    public setAccessory(accessory: SectionAccessoryTypes): this {
        this.accessory = accessory
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (this.components.length === 0) throw new Error("DataError: You must provide atleast 1 component to section.")
        if (this.accessory === null) throw new Error("DataError: Accessory is not defined.")

        return {
            type: SectionComponent.type,
            components: this.components.map((component: Component) => component.toJSON()),
            accessory: this.accessory,
        }
    }
}

export { SectionComponent }
