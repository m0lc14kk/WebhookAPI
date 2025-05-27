import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { SeparatorPaddingType } from "./constants/SeparatorPaddingType"

class SeparatorComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.SEPARATOR
    private padding: SeparatorPaddingType = SeparatorPaddingType.SMALL
    private displayDivider: boolean = true

    /**
     * Sets a padding between separator and other components.
     * @param padding Padding of a separator.
     * @returns Edited instance.
     */
    public setPadding(padding: SeparatorPaddingType): this {
        if (padding !== SeparatorPaddingType.SMALL && padding !== SeparatorPaddingType.LARGE) throw new TypeError("TypeError: Display divider option of a separator must be a boolean.")
        this.padding = padding
        return this
    }

    /**
     * Sets if a separator's line should be visible.
     * @param displayDivider Separator display state.
     * @returns Edited instance.
     */
    public setDisplayDivider(displayDivider: boolean): this {
        if (typeof displayDivider !== "boolean") throw new TypeError("TypeError: Display divider option of a separator must be a boolean.")
        this.displayDivider = displayDivider
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        return {
            type: SeparatorComponent.type,
            padding: this.padding,
            divider: this.displayDivider,
        }
    }
}

export { SeparatorComponent }
