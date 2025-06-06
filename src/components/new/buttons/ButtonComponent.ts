import { MAX_CUSTOM_ID_LENGTH } from "../../../globals"
import { BaseButtonComponent } from "./BaseButtonComponent"
import { BUTTON_COMPONENT_ALLOWED_STYLES } from "./constants/ButtonComponentAllowedStyles"
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
        if (customId.length > MAX_CUSTOM_ID_LENGTH) throw new Error(`DataError: Custom identifier cannot be longer than ${MAX_CUSTOM_ID_LENGTH} characters!`)
        this.customId = customId
        return this
    }

    /**
     * Sets a style of a button.
     * @param style Style of a button.
     * @returns Edited instance.
     */
    public setStyle(style: ButtonStyleCommonTypes): this {
        if (!BUTTON_COMPONENT_ALLOWED_STYLES.has(style)) throw new Error("DataError: Invalid style enumeration of a button.")
        this.style = style
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
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
