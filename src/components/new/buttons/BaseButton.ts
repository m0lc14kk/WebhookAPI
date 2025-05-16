import { Component } from "../../Component";
import { ComponentType } from "../../types/ComponentType";
import { ButtonStyle } from "./constants/ButtonStyle";

abstract class BaseButton extends Component {
    public static override type: ComponentType = ComponentType.BUTTON
    protected abstract style: ButtonStyle
    protected label: string = ""
    protected disabled: boolean = false

    public setLabel(label: string): this {
        this.label = label
        return this
    }

    public setDisabled(disabled: boolean): this {
        this.disabled = disabled
        return this
    }

    public abstract toJSON(): object;
}

export { BaseButton }