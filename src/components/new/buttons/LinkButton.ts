import { BaseButton } from "./BaseButton"
import { ButtonStyle } from "./constants/ButtonStyle"

export const ALLOWED_URL_PROTOCOLS: readonly string[] = ["discord://", "https://", "http://"]

class LinkButton extends BaseButton {
    protected override readonly style: ButtonStyle.LINK = ButtonStyle.LINK
    private url: string | null = null

    public setUrl(url: string): LinkButton {
        const isValidProtocol: boolean = !!ALLOWED_URL_PROTOCOLS.find((protocol: string) => url.startsWith(protocol))
        if (!isValidProtocol) throw new Error("DataError: Invalid button's URL protocol.")

        this.url = url
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        return {
            type: LinkButton.type,
            style: this.style,
            label: this.label,
            disabled: this.disabled,
            url: this.url,
            emoji: this.emoji,
        }
    }
}

export { LinkButton }
