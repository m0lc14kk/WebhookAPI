import { MAX_BUTTON_LABEL_LENGTH } from "../../../globals"
import { DiscordEmojiValidator } from "../../../validators/DiscordEmojiValidator"
import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { ComponentEmojiType } from "../../types/ComponentEmojiType"
import { ButtonStyle } from "./constants/ButtonStyle"

abstract class BaseButtonComponent extends Component {
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
        if (typeof label !== "string") throw new TypeError("TypeError: Button's label must be a string.")
        if (label.length > MAX_BUTTON_LABEL_LENGTH) throw new Error(`DataError: Button's label cannot be longer than ${MAX_BUTTON_LABEL_LENGTH} characters!`)
        this.label = label
        return this
    }

    /**
     * Sets a disabled state on a button.
     * @param disabled Disable state.
     * @returns Edited instance.
     */
    public setDisabled(disabled: boolean): this {
        if (typeof disabled !== "boolean") throw new TypeError("TypeError: Button's disabled state must be a boolean.")
        this.disabled = disabled
        return this
    }

    /**
     * Sets an emoji of a button.
     * @param emoji Emoji of a button.
     * @returns Edited instance.
     */
    public setEmoji(emoji: string | ComponentEmojiType | null): this {
        if (emoji !== null) DiscordEmojiValidator.validateEmoji(emoji)
        this.emoji = emoji
        return this
    }

    public abstract toJSON(): object
}

export { BaseButtonComponent }
