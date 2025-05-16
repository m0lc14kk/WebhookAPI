import { IComponentEmojiStructure } from "../../interfaces/IComponentEmojiStructure";
import { BaseButton } from "./BaseButton";
import { ButtonStyle } from "./constants/ButtonStyle";

class LinkButton extends BaseButton {
    protected override style: ButtonStyle.LINK = ButtonStyle.LINK
    private emoji: string | IComponentEmojiStructure | null = null
    private url: string | null = null

    public setEmoji(emoji: string | IComponentEmojiStructure | null): LinkButton {
        this.emoji = emoji
        return this
    }

    public setUrl(url: string): LinkButton {
        this.url = url
        return this
    }

    public toJSON() {
        return {
            style: this.style,
            label: this.label,
            disabled: this.disabled,
            url: this.url,
            emoji: this.emoji
        }
    }
}

export { LinkButton }