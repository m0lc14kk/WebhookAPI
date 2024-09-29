import { IEmbedContentWithImage } from "./IEmbedContentWithImage";

/**
 * Fixed structure of a footer in embed.
 */
interface IEmbedFooter extends IEmbedContentWithImage {
    /**
     * Text of a footer in embed.
     * @readonly
     */
    readonly text: string,
};

export { IEmbedFooter };