import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import type { SectionComponentTypes } from "./types/SectionComponentTypes"
import { SectionAccessoryTypes } from "./types/SectionAccessoryTypes"

class SectionComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.SECTION
    private components: SectionComponentTypes[] = []
    private accessory: SectionAccessoryTypes | null = null

    public setComponents(...components: SectionComponentTypes[]): this {
        this.components = components
        return this
    }

    public addComponents(...components: SectionComponentTypes[]): this {
        this.components.push(...components)
        return this
    }

    public setAccessory(accessory: SectionAccessoryTypes): this {
        this.accessory = accessory
        return this
    }

    public toJSON() {
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
