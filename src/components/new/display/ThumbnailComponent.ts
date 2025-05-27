import { MAX_MEDIA_DESCRIPTION_LENGTH } from "../../../globals"
import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"

class ThumbnailComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.THUMBNAIL
    private url: string | null = null
    private description: string | null = null
    private spoiler: boolean = false

    /**
     * Sets an URL of an icon of a thumbnail.
     * @param url URL to an icon.
     * @returns Edited instance.
     */
    public setUrl(url: string): this {
        if (typeof url !== "string") throw new TypeError("TypeError: Thumbnail's URL must be a string.")
        this.url = url
        return this
    }

    /**
     * Sets a description, that is visible if thumbnail has not loaded correctly.
     * @param description Alternative text of a thumbnail.
     * @returns Edited instance.
     */
    public setDescription(description: string): this {
        if (description.length > MAX_MEDIA_DESCRIPTION_LENGTH) throw new RangeError(`DataError: Description of a thumbnail cannot be longer than ${MAX_MEDIA_DESCRIPTION_LENGTH} characters.`)
        this.description = description
        return this
    }

    /**
     * Sets a spoiler on a thumbnail.
     * @param spoiler Spoiler state.
     * @returns Edited instance.
     */
    public setSpoiler(spoiler: boolean): this {
        if (typeof spoiler !== "boolean") throw new TypeError("TypeError: Thumbnail's spoiler state must be a boolean.")
        this.spoiler = spoiler
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (!this.url || !this.description) throw new Error("DataError: You must provide an URL or description of a thumbnail!")

        return {
            type: ThumbnailComponent.type,
            description: this.description,
            spoiler: this.spoiler,
            media: {
                url: this.url,
            },
        }
    }
}

export { ThumbnailComponent }
