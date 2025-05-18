import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { ComponentEmojiType } from "../../types/ComponentEmojiType"
import { ButtonStyle } from "./constants/ButtonStyle"

abstract class BaseButton extends Component {
    public static override readonly type: ComponentType = ComponentType.BUTTON
    protected abstract style: ButtonStyle
    protected label: string = ""
    protected disabled: boolean = false
    protected emoji: string | ComponentEmojiType | null = null

    /**
     * Sets a label of a button.
     * @param label Label of a button.
     * @returns Edited instance.
     */
    public setLabel(label: string): this {
        this.label = label
        return this
    }

    /**
     * Sets a disabled state on a button.
     * @param disabled Disable state.
     * @returns Edited instance.
     */
    public setDisabled(disabled: boolean): this {
        this.disabled = disabled
        return this
    }

    /**
     * Sets an emoji of a button.
     * @param emoji Emoji of a button.
     * @returns Edited instance.
     */
    public setEmoji(emoji: string | ComponentEmojiType | null): this {
        this.emoji = emoji
        return this
    }

    public abstract toJSON(): object
}

export { BaseButton }
