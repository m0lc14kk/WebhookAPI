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

class EmbedUtility {
    public static configuration: typeof EmbedConfiguration = EmbedConfiguration;
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

    public setTitle(title: EmbedContentTypes): EmbedUtility {
        this.embedTitle = title;
        return this;
    };

    public setDescription(description: EmbedContentTypes | EmbedContentTypes[]): EmbedUtility {
        this.embedDescription = Array.isArray(description) ? description.filter((line: EmbedContentTypes) => line !== null).join("\n") : description;
        return this;
    };

    public setColor(color: number): EmbedUtility {
        this.embedColor = color;
        return this;
    };

    public setURL(url: string): EmbedUtility {
        this.embedURL = url;
        return this;
    };

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

    public setAuthor(author: IEmbedAuthor | null): EmbedUtility {
        this.embedAuthor = author;
        return this;
    };

    public setFooter(footer: IEmbedFooter | null): EmbedUtility {
        this.embedFooter = footer;
        return this;
    };

    public addFields(...field: IEmbedField[]): EmbedUtility {
        this.embedFields.push(...field);
        return this;
    };

    public setFields(...fields: IEmbedField[]): EmbedUtility {
        this.embedFields = fields;
        return this;
    };

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
            timestamp: this.embedTimestamp
        };
    };
};

export { EmbedUtility, IRawEmbedUtility };