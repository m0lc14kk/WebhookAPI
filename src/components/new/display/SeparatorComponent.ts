import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { SeparatorPaddingType } from "./constants/SeparatorPaddingType"

class SeparatorComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.SEPARATOR
    private padding: SeparatorPaddingType = SeparatorPaddingType.SMALL
    private displayDivider: boolean = true

    public setPadding(padding: SeparatorPaddingType): this {
        this.padding = padding
        return this
    }

    public setDisplayDivider(displayDivider: boolean): this {
        this.displayDivider = displayDivider
        return this
    }

    public toJSON() {
        return {
            type: SeparatorComponent.type,
            padding: this.padding,
            divider: this.displayDivider,
        }
    }
}

export { SeparatorComponent }
