import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { IMediaGalleryItemStructure } from "./interfaces/IMediaGalleryItemStructure"

class MediaGalleryComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.MEDIA_GALERY
    private images: IMediaGalleryItemStructure[] = []

    /**
     * Adds images to gallery.
     * @param images Images, that will be added to existing ones.
     * @returns Edited instance.
     */
    public addImages(...images: IMediaGalleryItemStructure[]): this {
        this.images.push(...images)
        return this
    }

    /**
     * Sets images in gallery.
     * @param images Images in gallery.
     * @returns Edited instance.
     */
    public setImages(...images: IMediaGalleryItemStructure[]): this {
        this.images = images
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (this.images.length === 0) throw new Error("DataError: You have to provide at least 1 image of a media gallery.")

        return {
            type: MediaGalleryComponent.type,
            items: this.images,
        }
    }
}

export { MediaGalleryComponent }
