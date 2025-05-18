import { BaseButton } from "./BaseButton"
import { ButtonStyle } from "./constants/ButtonStyle"

export const ALLOWED_URL_PROTOCOLS: readonly string[] = ["discord://", "https://", "http://"]

class LinkButton extends BaseButton {
    protected override readonly style: ButtonStyle.LINK = ButtonStyle.LINK
    private url: string | null = null

    /**
     * Sets an URL of a link button.
     * @param url URL of a button.
     * @throws Throws an error, if URL has an unsupported protocol.
     * @returns Edited instance.
     */
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
        if (this.url === null) throw new Error("DataError: You must provide customId after creating a button.")
        if (!this.emoji && !this.label) throw new Error("DataError: You must provide an emoji or a label of a button.")

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
