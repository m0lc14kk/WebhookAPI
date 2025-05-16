import { BaseButton } from "./BaseButton";
import { ButtonStyle } from "./constants/ButtonStyle";
import type { ButtonStyleCommonTypes } from "./types/ButtonStyleCommonTypes";

class Button extends BaseButton {
    protected override style: ButtonStyleCommonTypes = ButtonStyle.PRIMARY
    private customId: string | null = null

    public setCustomId(customId: string): Button {
        this.customId = customId
        return this
    }

    public toJSON() {
        return {
            label: this.label,
            custom_id: this.customId,
            style: this.style,
            disabled: this.disabled
        }
    }
}

export { Button }