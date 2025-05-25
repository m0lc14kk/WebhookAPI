import { BaseButtonComponent } from "./BaseButtonComponent"
import { ButtonStyle } from "./constants/ButtonStyle"

const ALLOWED_URL_PROTOCOLS: readonly string[] = ["discord://", "https://", "http://"]

class LinkButtonComponent extends BaseButtonComponent {
    protected override readonly style: ButtonStyle.LINK = ButtonStyle.LINK
    private url: string | null = null

    /**
     * Sets an URL of a link button.
     * @param url URL of a button.
     * @throws Throws an error, if URL has an unsupported protocol.
     * @returns Edited instance.
     */
    public setUrl(url: string): this {
        const isValidProtocol: boolean = !!ALLOWED_URL_PROTOCOLS.find((protocol: string) => url.startsWith(protocol))
        if (!isValidProtocol) throw new Error("DataError: Invalid button's URL protocol.")

        this.url = url
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (this.url === null) throw new Error("DataError: You must provide customId after creating a button.")
        if (!this.emoji && !this.label) throw new Error("DataError: You must provide an emoji or a label of a button.")

        return {
            type: LinkButtonComponent.type,
            style: this.style,
            label: this.label,
            disabled: this.disabled,
            url: this.url,
            emoji: this.emoji,
        }
    }
}

export { LinkButtonComponent, ALLOWED_URL_PROTOCOLS }
