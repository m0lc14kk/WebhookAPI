import { IEmbedAuthor } from "./interfaces/common/IEmbedAuthor";
import { IEmbedFooter } from "./interfaces/common/IEmbedFooter";
import { IEmbedMedia } from "./interfaces/common/IEmbedMedia";
import { IEmbedField } from "./interfaces/common/IEmbedField";
import { IRawEmbedUtility } from "./interfaces/raw/IRawEmbedUtility";
import type { EmbedContentTypes } from "./types/EmbedContentTypes";
import type { ISO8601Data } from "./types/ISO8601Data";
import { ISO8601_REGEX } from "./constants/ISO8601RegEx";
import { IRawEmbedField } from "./interfaces/raw/IRawEmbedField";
import { EmbedConfiguration } from "./EmbedConfiguration";

/**
 * Class to create new instances of a embed.
 * @public
 */
class EmbedUtility {
    /**
     * Default set for embeds.
     * @readonly
     */
    public static readonly configuration: typeof EmbedConfiguration = EmbedConfiguration;

    /**
     * Creates a new instance of embed.
     */
    public constructor() {};

    private embedTitle: EmbedContentTypes = null;
    private embedDescription: EmbedContentTypes = null;
    private embedURL: EmbedContentTypes = null;
    private embedTimestamp: string | null = null;
    private embedColor: number = EmbedConfiguration.embedColor;
    private embedImage: null | IEmbedMedia = null;
    private embedThumbnail: null | IEmbedMedia = null;
    private embedVideo: null | IEmbedMedia = null;
    private embedAuthor: IEmbedAuthor | null = null;
    private embedFooter: IEmbedFooter | null = null; 
    private embedFields: IEmbedField[] = [];

    /**
     * Sets a title for embed.
     * @param title New title of an embed.
     * @returns Edited instance of this embed.
     */
    public setTitle(title: EmbedContentTypes): EmbedUtility {
        this.embedTitle = title;
        return this;
    };

    /**
     * Sets a description for embed.
     * @param description New description of an embed.
     * @returns Edited instance of this embed.
     */
    public setDescription(description: EmbedContentTypes | EmbedContentTypes[]): EmbedUtility {
        this.embedDescription = Array.isArray(description) ? description.filter((line: EmbedContentTypes) => line !== null).join("\n") : description;
        return this;
    };

    /**
     * Sets a color for embed.
     * @param color New description of an embed.
     * @returns Edited instance of this embed.
     */
    public setColor(color: number): EmbedUtility {
        this.embedColor = color;
        return this;
    };

    /**
     * Sets a URL for embed, that will be associated with title.
     * @param url New URL target of a title in embed.
     * @returns Edited instance of this embed.
     */
    public setURL(url: EmbedContentTypes): EmbedUtility {
        this.embedURL = url;
        return this;
    };

    /**
     * Sets a timestamp of an embed.
     * @param timestamp Time displayed on the bottom of embed.
     * @returns Edited instance of this embed.
     */
    public setTimestamp(timestamp: ISO8601Data): EmbedUtility {
        if (timestamp instanceof Date) {
            this.embedTimestamp = timestamp.toISOString();
            return this;
        };

        if (timestamp === null) {
            this.embedTimestamp = null;
            return this;
        };

        if (!ISO8601_REGEX.test(timestamp)) throw new Error("DataError: Timestamp is not a ISO8601 formatted string.");

        this.embedTimestamp = timestamp;
        return this;
    };

    /**
     * Sets an image of embed.
     * @param image Options of an image.
     * @returns Edited instance of this embed.
     */
    public setImage(image: IEmbedMedia | EmbedContentTypes): EmbedUtility {
        if (typeof image === "string") {
            this.embedImage = {
                url: image as string,
                width: null,
                height: null
            };
            
            return this;
        };

        if (image === null) {
            this.embedImage = null;
            return this;
        };

        this.embedImage = image;
        return this;
    };

    /**
     * Sets a thumbnail of embed.
     * @param thumbnail Options of a thumbnail.
     * @returns Edited instance of this embed.
     */
    public setThumbnail(thumbnail: IEmbedMedia | EmbedContentTypes): EmbedUtility {
        if (typeof thumbnail === "string") {
            this.embedThumbnail = {
                url: thumbnail as string,
                width: null,
                height: null
            };
            
            return this;
        };

        if (thumbnail === null) {
            this.embedThumbnail = null;
            return this;
        };

        this.embedThumbnail = thumbnail;
        return this;
    };

    /**
     * Sets a video of embed.
     * @param video Options of a video.
     * @returns Edited instance of this embed.
     */
    public setVideo(video: IEmbedMedia | EmbedContentTypes): EmbedUtility {
        if (typeof video === "string") {
            this.embedVideo = {
                url: video as string,
                width: null,
                height: null
            };
            
            return this;
        };

        if (video === null) {
            this.embedVideo = null;
            return this;
        };

        this.embedVideo = video;
        return this;
    };

    /**
     * Sets an author of embed.
     * @param author Options of an author.
     * @returns Edited instance of this embed.
     */
    public setAuthor(author: IEmbedAuthor | null): EmbedUtility {
        this.embedAuthor = author;
        return this;
    };

    /**
     * Sets a footer of embed.
     * @param author Options of a footer.
     * @returns Edited instance of this embed.
     */
    public setFooter(footer: IEmbedFooter | null): EmbedUtility {
        this.embedFooter = footer;
        return this;
    };

    /**
     * Adds a field or fields to embed.
     * @param field Single or more fields.
     * @returns Edited instance of this embed.
     */
    public addFields(...field: IEmbedField[]): EmbedUtility {
        this.embedFields.push(...field);
        return this;
    };

    /**
     * Sets a field or fields of embed.
     * @param field Single or more fields.
     * @returns Edited instance of this embed.
     */
    public setFields(...fields: IEmbedField[]): EmbedUtility {
        this.embedFields = fields;
        return this;
    };

    /**
     * Gets JSON data, which is created to be sent via webhook.
     * @returns JSON object of an raw embed.
     */
    public toJSON(): IRawEmbedUtility {
        return {
            type: "rich",
            title: this.embedTitle,
            description: this.embedDescription,
            color: this.embedColor,
            fields: this.embedFields.map(({ name, content, inline = false }: IEmbedField) => {
                return {
                    name, inline,
                    value: Array.isArray(content) ? content.filter((line: EmbedContentTypes) => line !== null).join("\n") : content,
                } as IRawEmbedField;
            }),

            author: this.embedAuthor === null ? null : {
                name: this.embedAuthor.name,
                icon_url: this.embedAuthor.iconURL,
                url: this.embedAuthor.url
            },

            footer: this.embedFooter === null ? null : {
                text: this.embedFooter.text,
                icon_url: this.embedFooter.iconURL
            },

            video: this.embedVideo === null ? null : {
                url: this.embedVideo.url,
                width: this.embedVideo.width,
                height: this.embedVideo.height                
            },

            thumbnail: this.embedThumbnail === null ? null : {
                url: this.embedThumbnail.url,
                width: this.embedThumbnail.width,
                height: this.embedThumbnail.height                
            },

            image: this.embedImage === null ? null : {
                url: this.embedImage.url,
                width: this.embedImage.width,
                height: this.embedImage.height                
            },

            url: this.embedURL,
            timestamp: this.embedTimestamp ?? null
        };
    };
};

export { EmbedUtility, IRawEmbedUtility, IEmbedAuthor, IEmbedField, IEmbedFooter, IEmbedMedia };
export type { EmbedContentTypes, ISO8601Data };