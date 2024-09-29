import { EmbedContentTypes } from "../../types/EmbedContentTypes";
import { IRawEmbedAuthor } from "./IRawEmbedAuthor";
import { IRawEmbedField } from "./IRawEmbedField";
import { IRawEmbedFooter } from "./IRawEmbedFooter";
import { IRawEmbedMedia } from "./IRawEmbedMedia";

/**
 * Raw entire structure of an embed.
 */
interface IRawEmbedUtility {
    /**
     * Type of an embed.
     * @remarks Do not change this value.
     */
    readonly type: "rich",

    /**
     * A title of an embed.
     * @readonly
     */
    readonly title: EmbedContentTypes,

    /**
     * A description of an embed.
     * @readonly
     */
    readonly description: EmbedContentTypes,

    /**
     * A color of an embed.
     * @readonly
     */
    readonly color: number,

    /**
     * A link of embed, that will be connected to title.
     * @readonly
     */
    readonly url: EmbedContentTypes,

    /**
     * Fields of an embed.
     * @readonly
     */
    readonly fields: IRawEmbedField[],

    /**
     * An author of an embed.
     * @readonly
     */
    readonly author: IRawEmbedAuthor | null,

    /**
     * A footer of an embed.
     * @readonly
     */
    readonly footer: IRawEmbedFooter | null,

    /**
     * A video of an embed.
     * @readonly
     */
    readonly video: IRawEmbedMedia | null,

    /**
     * An image of an embed.
     * @readonly
     */
    readonly image: IRawEmbedMedia | null,

    /**
     * A thumbnail image for an embed.
     * @readonly
     */
    readonly thumbnail: IRawEmbedMedia | null,
    
    /**
     * A timestamp of an embed, which will be display on the bottom of embed, or next to footer, if it's defined aswell.
     * @readonly
     */
    readonly timestamp: string | null,
};

export { IRawEmbedUtility };