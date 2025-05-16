import { IComponentEmojiStructure } from "../../interfaces/IComponentEmojiStructure"
import { BaseButton } from "./BaseButton"
import { ButtonStyle } from "./constants/ButtonStyle"
import type { ButtonStyleCommonTypes } from "./types/ButtonStyleCommonTypes"

class Button extends BaseButton {
    protected override readonly style: ButtonStyleCommonTypes = ButtonStyle.PRIMARY
    private customId: string | null = null
    private emoji: string | IComponentEmojiStructure | null = null

    public setCustomId(customId: string): Button {
        this.customId = customId
        return this
    }

    public setEmoji(emoji: IComponentEmojiStructure): Button {
        this.emoji = emoji
        return this
    }

    public toJSON() {
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
