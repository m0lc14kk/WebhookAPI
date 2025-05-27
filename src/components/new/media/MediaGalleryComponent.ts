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
        this.validateMediaGalleryItems(images)
        this.images.push(...images)
        return this
    }

    /**
     * Sets images in gallery.
     * @param images Images in gallery.
     * @returns Edited instance.
     */
    public setImages(...images: IMediaGalleryItemStructure[]): this {
        this.validateMediaGalleryItems(images)
        this.images = images
        return this
    }

    private validateMediaGalleryItems(images: IMediaGalleryItemStructure[]): void {
        for (const image of images) {
            if (image.description && typeof image.description !== "string") throw new TypeError("TypeError: Gallery item's description has to be a string.")
            if (!image.media || typeof image.media.url !== "string") throw new TypeError("TypeError: Gallery item's URL has to be a string.")
            if (typeof (image.spoiler ?? false) !== "boolean") throw new TypeError("TypeError: Gallery item's spoiler status has to be a boolean.")
        }
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
