/**
 * Structure of a media gallery item.
 */
interface IMediaGalleryItemStructure {
    /**
     * Structure with URL to a media element.
     */
    media: {
        /**
         * URL to media element,
         */
        url: string
    }

    /**
     * Alternative text if image is not present.
     */
    description?: string

    /**
     * If the image should be marked with a spoiler.
     * @default false
     */
    spoiler?: boolean
}

export type { IMediaGalleryItemStructure }
