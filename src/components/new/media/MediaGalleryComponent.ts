import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { IMediaGalleryItemStructure } from "./interfaces/IMediaGalleryItemStructure"

class MediaGalleryComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.MEDIA_GALERY
    private images: IMediaGalleryItemStructure[] = []

    public addImages(...images: IMediaGalleryItemStructure[]): this {
        this.images.push(...images)
        return this
    }

    public setImages(...images: IMediaGalleryItemStructure[]): this {
        this.images = images
        return this
    }

    public toJSON() {
        return {
            type: MediaGalleryComponent.type,
            items: this.images,
        }
    }
}

export { MediaGalleryComponent }
