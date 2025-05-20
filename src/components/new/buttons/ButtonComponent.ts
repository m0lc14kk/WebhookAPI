import { BaseButtonComponent } from "./BaseButtonComponent"
import { ButtonStyle } from "./constants/ButtonStyle"
import type { ButtonStyleCommonTypes } from "./types/ButtonStyleCommonTypes"

class ButtonComponent extends BaseButtonComponent {
    protected override style: ButtonStyleCommonTypes = ButtonStyle.PRIMARY
    private customId: string | null = null

    /**
     * Sets a custom identifier, which are required to interact with API.
     * @param customId Custom identifier of a button.
     * @returns Edited instance.
     */
    public setCustomId(customId: string): this {
        this.customId = customId
        return this
    }

    public setStyle(style: ButtonStyleCommonTypes): this {
        this.style = style
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        if (this.customId === null) throw new Error("DataError: You must provide customId after creating a button.")
        if (!this.emoji && !this.label) throw new Error("DataError: You must provide an emoji or a label of a button.")

        return {
            type: ButtonComponent.type,
            label: this.label,
            custom_id: this.customId,
            style: this.style,
            disabled: this.disabled,
            emoji: this.emoji,
        }
    }
}

export { ButtonComponent }
