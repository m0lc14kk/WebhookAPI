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
        this.url = url
        return this
    }

    /**
     * Sets a description, that is visible if thumbnail has not loaded correctly.
     * @param description Alternative text of a thumbnail.
     * @returns Edited instance.
     */
    public setDescription(description: string): this {
        this.description = description
        return this
    }

    /**
     * Sets a spoiler on a thumbnail.
     * @param spoiler Spoiler state.
     * @returns Edited instance.
     */
    public setSpoiler(spoiler: boolean): this {
        this.spoiler = spoiler
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
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
