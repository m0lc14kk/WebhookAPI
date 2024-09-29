import { IEmbedContentWithImage } from "./IEmbedContentWithImage";

/**
 * Fixed structure of an author property of embed.
 */
interface IEmbedAuthor extends IEmbedContentWithImage {
    /**
     * Name of an author.
     * @readonly
     */
    readonly name: string,

    /**
     * Link to an author.
     * @readonly
     */
    readonly url?: string
};

export { IEmbedAuthor };