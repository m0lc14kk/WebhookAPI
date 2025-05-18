import { ComponentEmojiType } from "../../types/ComponentEmojiType"
import { BaseButton } from "./BaseButton"
import { ButtonStyle } from "./constants/ButtonStyle"
import type { ButtonStyleCommonTypes } from "./types/ButtonStyleCommonTypes"

class Button extends BaseButton {
    protected override readonly style: ButtonStyleCommonTypes = ButtonStyle.PRIMARY
    private customId: string | null = null
    private emoji: string | ComponentEmojiType | null = null

    public setCustomId(customId: string): Button {
        this.customId = customId
        return this
    }

    public setEmoji(emoji: ComponentEmojiType): Button {
        this.emoji = emoji
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        return {
            type: Button.type,
            label: this.label,
            custom_id: this.customId,
            style: this.style,
            disabled: this.disabled,
            emoji: this.emoji,
        }
    }
}

export { Button }
