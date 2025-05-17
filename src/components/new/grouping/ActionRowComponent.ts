import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { BaseButton } from "../buttons/BaseButton"
import { BaseSelectMenuComponent } from "../dropdowns/BaseSelectMenuComponent"
import { StringSelectMenuComponent } from "../dropdowns/StringSelectMenuComponent"
import type { ActionRowChildComponentType } from "./types/ActionRowChildComponentType"

class ActionRowComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.ACTION_ROW

    private components: ActionRowChildComponentType[] = []

    public setComponents(...components: ActionRowChildComponentType[]): this {
        this.validateComponents(components)
        this.components = components
        return this
    }

    public addComponents(...components: ActionRowChildComponentType[]): this {
        this.validateComponents([...this.components, ...components])
        this.components.push(...components)
        return this
    }

    private validateComponents(components: ActionRowChildComponentType[]): void {
        const isAllButtons = components.every((component: Component) => component instanceof BaseButton)
        const isSingleSelectMenu: boolean = components.length === 1 && (components[0] instanceof StringSelectMenuComponent || components[0] instanceof BaseSelectMenuComponent)

        if (!isAllButtons && !isSingleSelectMenu) throw new Error("ActionRowComponent must contain either 1 select menu or 1-5 buttons only.")
        if (isAllButtons && components.length > 5) throw new Error("ActionRowComponent can only contain up to 5 buttons.")
    }

    public toJSON(): object {
        return {
            type: ActionRowComponent.type,
            components: this.components.map((component) => component.toJSON()),
        }
    }
}

export { ActionRowComponent }
