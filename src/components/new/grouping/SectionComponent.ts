import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import type { SectionComponentTypes } from "./types/SectionComponentTypes"

class SectionComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.SECTION
    private components: SectionComponentTypes[] = []

    public setComponents(...components: SectionComponentTypes[]): this {
        this.components = components
        return this
    }

    public addComponents(...components: SectionComponentTypes[]): this {
        this.components.push(...components)
        return this
    }

    public toJSON() {
        return {
            type: SectionComponent.type,
            components: this.components.map((component: Component) => component.toJSON()),
        }
    }
}

export { SectionComponent }
