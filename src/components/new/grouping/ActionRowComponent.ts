import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { BaseButtonComponent } from "../buttons/BaseButtonComponent"
import { BaseSelectMenuComponent } from "../dropdowns/BaseSelectMenuComponent"
import { StringSelectMenuComponent } from "../dropdowns/StringSelectMenuComponent"
import type { ActionRowChildComponentType } from "./types/ActionRowChildComponentType"

class ActionRowComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.ACTION_ROW

    private components: ActionRowChildComponentType[] = []

    /**
     * Sets new components to this action row.
     * @param components New components.
     * @returns Edited instance.
     */
    public setComponents(...components: ActionRowChildComponentType[]): this {
        this.validateComponents(components)
        this.components = components
        return this
    }

    /**
     * Adds new components to existing ones.
     * @param components New components.
     * @returns Edited instance.
     */
    public addComponents(...components: ActionRowChildComponentType[]): this {
        this.validateComponents([...this.components, ...components])
        this.components.push(...components)
        return this
    }

    /**
     * Validates components of this action row.
     * @param components Components that will be checked, if they are valid.
     * @throws Throws an error if they're invalid.
     */
    private validateComponents(components: ActionRowChildComponentType[]): void {
        const isAllButtons: boolean = components.every((component: Component) => component instanceof BaseButtonComponent)
        const isSingleSelectMenu: boolean = components.length === 1 && (components[0] instanceof StringSelectMenuComponent || components[0] instanceof BaseSelectMenuComponent)

        if (!isAllButtons && !isSingleSelectMenu) throw new Error("DataError: ActionRowComponent must contain either 1 select menu or 1-5 buttons only.")
        if (isAllButtons && components.length > 5) throw new Error("DataError: ActionRowComponent can only contain up to 5 buttons.")
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        if (this.components.length === 0) throw new Error("DataError: You have to provide at least 1 component of a action row.")

        return {
            type: ActionRowComponent.type,
            components: this.components.map((component) => component.toJSON()),
        }
    }
}

export { ActionRowComponent }
