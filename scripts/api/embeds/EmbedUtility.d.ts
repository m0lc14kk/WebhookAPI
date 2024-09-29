import { IEmbedAuthor } from "./interfaces/common/IEmbedAuthor";
import { IEmbedFooter } from "./interfaces/common/IEmbedFooter";
import { IEmbedMedia } from "./interfaces/common/IEmbedMedia";
import { IEmbedField } from "./interfaces/common/IEmbedField";
import { IRawEmbedUtility } from "./interfaces/raw/IRawEmbedUtility";
import type { EmbedContentTypes } from "./types/EmbedContentTypes";
import type { ISO8601Data } from "./types/ISO8601Data";
import { EmbedConfiguration } from "./EmbedConfiguration";
/**
 * Class to create new instances of a embed.
 * @public
 */
declare class EmbedUtility {
    /**
     * Default set for embeds.
     * @readonly
     */
    static readonly configuration: typeof EmbedConfiguration;
    /**
     * Creates a new instance of embed.
     */
    constructor();
    private embedTitle;
    private embedDescription;
    private embedURL;
    private embedTimestamp;
    private embedColor;
    private embedImage;
    private embedThumbnail;
    private embedVideo;
    private embedAuthor;
    private embedFooter;
    private embedFields;
    /**
     * Sets a title for embed.
     * @param title New title of an embed.
     * @returns Edited instance of this embed.
     */
    setTitle(title: EmbedContentTypes): EmbedUtility;
    /**
     * Sets a description for embed.
     * @param description New description of an embed.
     * @returns Edited instance of this embed.
     */
    setDescription(description: EmbedContentTypes | EmbedContentTypes[]): EmbedUtility;
    /**
     * Sets a color for embed.
     * @param color New description of an embed.
     * @returns Edited instance of this embed.
     */
    setColor(color: number): EmbedUtility;
    /**
     * Sets a URL for embed, that will be associated with title.
     * @param url New URL target of a title in embed.
     * @returns Edited instance of this embed.
     */
    setURL(url: EmbedContentTypes): EmbedUtility;
    /**
     * Sets a timestamp of an embed.
     * @param timestamp Time displayed on the bottom of embed.
     * @returns Edited instance of this embed.
     */
    setTimestamp(timestamp: ISO8601Data): EmbedUtility;
    /**
     * Sets an image of embed.
     * @param image Options of an image.
     * @returns Edited instance of this embed.
     */
    setImage(image: IEmbedMedia | EmbedContentTypes): EmbedUtility;
    /**
     * Sets a thumbnail of embed.
     * @param thumbnail Options of a thumbnail.
     * @returns Edited instance of this embed.
     */
    setThumbnail(thumbnail: IEmbedMedia | EmbedContentTypes): EmbedUtility;
    /**
     * Sets a video of embed.
     * @param video Options of a video.
     * @returns Edited instance of this embed.
     */
    setVideo(video: IEmbedMedia | EmbedContentTypes): EmbedUtility;
    /**
     * Sets an author of embed.
     * @param author Options of an author.
     * @returns Edited instance of this embed.
     */
    setAuthor(author: IEmbedAuthor | null): EmbedUtility;
    /**
     * Sets a footer of embed.
     * @param author Options of a footer.
     * @returns Edited instance of this embed.
     */
    setFooter(footer: IEmbedFooter | null): EmbedUtility;
    /**
     * Adds a field or fields to embed.
     * @param field Single or more fields.
     * @returns Edited instance of this embed.
     */
    addFields(...field: IEmbedField[]): EmbedUtility;
    /**
     * Sets a field or fields of embed.
     * @param field Single or more fields.
     * @returns Edited instance of this embed.
     */
    setFields(...fields: IEmbedField[]): EmbedUtility;
    /**
     * Gets JSON data, which is created to be sent via webhook.
     * @returns JSON object of an raw embed.
     */
    toJSON(): IRawEmbedUtility;
}
export { EmbedUtility, IRawEmbedUtility, IEmbedAuthor, IEmbedField, IEmbedFooter, IEmbedMedia };
export type { EmbedContentTypes, ISO8601Data };
