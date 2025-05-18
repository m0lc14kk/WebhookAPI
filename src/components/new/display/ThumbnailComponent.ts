import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"

class ThumbnailComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.THUMBNAIL
    private url: string | null = null
    private description: string | null = null
    private spoiler: boolean = false

    public setUrl(url: string): this {
        this.url = url
        return this
    }

    public setDescription(description: string): this {
        this.description = description
        return this
    }

    public setSpoiler(spoiler: boolean): this {
        this.spoiler = spoiler
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
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
