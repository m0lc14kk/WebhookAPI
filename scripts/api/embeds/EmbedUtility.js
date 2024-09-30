import { ISO8601_REGEX } from "./constants/ISO8601RegEx";
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
    static configuration = EmbedConfiguration;
    /**
     * Creates a new instance of embed.
     */
    constructor() { }
    ;
    embedTitle = null;
    embedDescription = null;
    embedURL = null;
    embedTimestamp = null;
    embedColor = EmbedConfiguration.embedColor;
    embedImage = null;
    embedThumbnail = null;
    embedVideo = null;
    embedAuthor = null;
    embedFooter = null;
    embedFields = [];
    /**
     * Sets a title for embed.
     * @param title New title of an embed.
     * @returns Edited instance of this embed.
     */
    setTitle(title) {
        this.embedTitle = title;
        return this;
    }
    ;
    /**
     * Sets a description for embed.
     * @param description New description of an embed.
     * @returns Edited instance of this embed.
     */
    setDescription(description) {
        this.embedDescription = Array.isArray(description) ? description.filter((line) => line !== null).join("\n") : description;
        return this;
    }
    ;
    /**
     * Sets a color for embed.
     * @param color New description of an embed.
     * @returns Edited instance of this embed.
     */
    setColor(color) {
        this.embedColor = color;
        return this;
    }
    ;
    /**
     * Sets a URL for embed, that will be associated with title.
     * @param url New URL target of a title in embed.
     * @returns Edited instance of this embed.
     */
    setURL(url) {
        this.embedURL = url;
        return this;
    }
    ;
    /**
     * Sets a timestamp of an embed.
     * @param timestamp Time displayed on the bottom of embed.
     * @returns Edited instance of this embed.
     */
    setTimestamp(timestamp) {
        if (timestamp instanceof Date) {
            this.embedTimestamp = timestamp.toISOString();
            return this;
        }
        ;
        if (timestamp === null) {
            this.embedTimestamp = null;
            return this;
        }
        ;
        if (!ISO8601_REGEX.test(timestamp))
            throw new Error("DataError: Timestamp is not a ISO8601 formatted string.");
        this.embedTimestamp = timestamp;
        return this;
    }
    ;
    /**
     * Sets an image of embed.
     * @param image Options of an image.
     * @returns Edited instance of this embed.
     */
    setImage(image) {
        if (typeof image === "string") {
            this.embedImage = {
                url: image,
                width: null,
                height: null
            };
            return this;
        }
        ;
        if (image === null) {
            this.embedImage = null;
            return this;
        }
        ;
        this.embedImage = image;
        return this;
    }
    ;
    /**
     * Sets a thumbnail of embed.
     * @param thumbnail Options of a thumbnail.
     * @returns Edited instance of this embed.
     */
    setThumbnail(thumbnail) {
        if (typeof thumbnail === "string") {
            this.embedThumbnail = {
                url: thumbnail,
                width: null,
                height: null
            };
            return this;
        }
        ;
        if (thumbnail === null) {
            this.embedThumbnail = null;
            return this;
        }
        ;
        this.embedThumbnail = thumbnail;
        return this;
    }
    ;
    /**
     * Sets a video of embed.
     * @param video Options of a video.
     * @returns Edited instance of this embed.
     */
    setVideo(video) {
        if (typeof video === "string") {
            this.embedVideo = {
                url: video,
                width: null,
                height: null
            };
            return this;
        }
        ;
        if (video === null) {
            this.embedVideo = null;
            return this;
        }
        ;
        this.embedVideo = video;
        return this;
    }
    ;
    /**
     * Sets an author of embed.
     * @param author Options of an author.
     * @returns Edited instance of this embed.
     */
    setAuthor(author) {
        this.embedAuthor = author;
        return this;
    }
    ;
    /**
     * Sets a footer of embed.
     * @param author Options of a footer.
     * @returns Edited instance of this embed.
     */
    setFooter(footer) {
        this.embedFooter = footer;
        return this;
    }
    ;
    /**
     * Adds a field or fields to embed.
     * @param field Single or more fields.
     * @returns Edited instance of this embed.
     */
    addFields(...field) {
        this.embedFields.push(...field);
        return this;
    }
    ;
    /**
     * Sets a field or fields of embed.
     * @param field Single or more fields.
     * @returns Edited instance of this embed.
     */
    setFields(...fields) {
        this.embedFields = fields;
        return this;
    }
    ;
    /**
     * Gets JSON data, which is created to be sent via webhook.
     * @returns JSON object of an raw embed.
     */
    toJSON() {
        return {
            type: "rich",
            title: this.embedTitle,
            description: this.embedDescription,
            color: this.embedColor,
            fields: this.embedFields.map(({ name, content, inline = false }) => {
                return {
                    name, inline,
                    value: Array.isArray(content) ? content.filter((line) => line !== null).join("\n") : content,
                };
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
    }
    ;
}
;
export { EmbedUtility };
