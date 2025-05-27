import { MAX_COLOR_NUMBER } from "../../../globals"
import { MAX_EMBED_DESCRIPTION_LENGTH, MAX_EMBED_FIELDS, MAX_EMBED_FOOTER_TEXT_LENGTH, MAX_EMBED_TITLE_LENGTH } from "./constants/EmbedMaxContentLengths"
import { EmbedDefaultProperties } from "./EmbedDefaultProperties"
import type { IEmbedAuthorStructure } from "./interfaces/IEmbedAuthorStructure"
import type { IEmbedFieldStructure } from "./interfaces/IEmbedFieldStructure"
import type { IEmbedFooterStructure } from "./interfaces/IEmbedFooterStructure"
import type { IEmbedMediaStructure } from "./interfaces/IEmbedMediaStructure"

class EmbedBuilder {
    private readonly ISO8601_REGEX: Readonly<RegExp> =
        /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](2[0-3]|[01][0-9]):?[0-5][0-9])?$/

    private title: string | null = null
    private description: string | null = null
    private fields: IEmbedFieldStructure[] = []
    private author: IEmbedAuthorStructure | null = null
    private footer: IEmbedFooterStructure | null = null
    private image: IEmbedMediaStructure | null = null
    private thumbnail: IEmbedMediaStructure | null = null
    private video: IEmbedMediaStructure | null = null
    private timestamp: string | null = null
    private color: number

    public constructor() {
        this.color = EmbedDefaultProperties.getDefaultEmbedColor()
    }

    /**
     * Sets a title of an embed.
     * @param title New title of an embed.
     * @throws Throws an error, if title is invalid or it's too long.
     * @returns Edited instance.
     */
    public setTitle(title: string | null): this {
        if (title === null) {
            this.title = null
            return this
        }

        if (typeof title !== "string") throw new TypeError("TypeError: Invalid embed's title.")
        if (title.length > MAX_EMBED_TITLE_LENGTH) throw new Error(`DataError: Embed's title cannot exceed ${MAX_EMBED_TITLE_LENGTH} characters.`)
        this.title = title
        return this
    }

    /**
     * Sets a description of an embed.
     * @param description New description of an embed.
     * @throws Throws an error, if description is invalid or it's too long.
     * @returns Edited instance.
     */
    public setDescription(description: string | string[] | null): this {
        if (description === null) {
            this.description = null
            return this
        }

        if (typeof description === "string") {
            if (description.length > MAX_EMBED_DESCRIPTION_LENGTH) throw new Error(`DataError: Embed's description cannot exceed ${MAX_EMBED_DESCRIPTION_LENGTH} characters.`)
            this.description = description
            return this
        }

        if (typeof description !== "object" || !Array.isArray(description) || description.some((line: unknown) => typeof line !== "string"))
            throw new TypeError("TypeError: Invalid embed's description.")

        const finalDescription: string = Array.isArray(description) ? description.join("\n") : description
        if (finalDescription.length > MAX_EMBED_DESCRIPTION_LENGTH) throw new Error(`DataError: Embed's description cannot exceed ${MAX_EMBED_DESCRIPTION_LENGTH} characters.`)
        this.description = finalDescription
        return this
    }

    /**
     * Sets a color of an embed.
     * @param color New color of an embed.
     * @throws Throws an error, if color HEX format is invalid.
     * @returns Edited instance.
     */
    public setColor(color: string | number): this {
        if (typeof color == "string") {
            if (!color.startsWith("#") && color.length !== 7) throw new Error("DataError: Invalid color HEX.")
            this.color = Number(`0x${color.slice(1)}`)
            return this
        }

        if (typeof color === "number") {
            if (color > MAX_COLOR_NUMBER || color < 0) throw new Error("DataError: Color is out of bounds.")
            this.color = Math.floor(color)
            return this
        }

        throw new TypeError("TypeError: Invalid embed's color.")
    }

    /**
     * Set fields of an embed.
     * @param fields New fields of an embed.
     * @throws Throws an error, if there are too many fields or one of the fields that are being added is invalid.
     * @returns Edited instance.
     */
    public setFields(...fields: IEmbedFieldStructure[]): this {
        if (fields.length > MAX_EMBED_FIELDS) throw new Error(`DataError: Embed cannot have more than ${MAX_EMBED_FIELDS} fields.`)
        this.validateFields(fields)
        this.fields = fields
        return this
    }

    /**
     * Adds new fields to an embed.
     * @param fields New fields, that will appear to existing ones.
     * @throws Throws an error, if there are too many fields or one of the fields that are being added is invalid.
     * @returns Edited instance.
     */
    public addFields(...fields: IEmbedFieldStructure[]): this {
        if (fields.length + this.fields.length > MAX_EMBED_FIELDS) throw new Error(`DataError: Embed cannot have more than ${MAX_EMBED_FIELDS} fields.`)
        this.validateFields(fields)
        this.fields.push(...fields)
        return this
    }

    /**
     * Sets an author of an embed.
     * @param author New author of an embed.
     * @throws Throws an error, if author is invalid.
     * @returns Edited instance.
     */
    public setAuthor(author: IEmbedAuthorStructure | null): this {
        if (author === null) {
            this.author = null
            return this
        }

        if (typeof author !== "object") throw new TypeError("TypeError: Invalid embed's author.")
        if (author.name.length > MAX_EMBED_TITLE_LENGTH) throw new Error(`DataError: Embed's author cannot exceed ${MAX_EMBED_TITLE_LENGTH} characters.`)
        if (author.iconUrl && typeof author.iconUrl !== "string") throw new TypeError("TypeError: Invalid embed author's icon.")
        if (author.url && typeof author.url !== "string") throw new TypeError("TypeError: Invalid embed author's URL.")

        this.author = author
        return this
    }

    /**
     * Sets a footer of an embed.
     * @param footer New footer of an embed.
     * @throws Throws an error, if footer is invalid.
     * @returns Edited instance.
     */
    public setFooter(footer: IEmbedFooterStructure | null): this {
        if (footer === null) {
            this.footer = null
            return this
        }

        if (typeof footer !== "object") throw new TypeError("TypeError: Invalid embed's footer.")
        if (footer.text.length > MAX_EMBED_FOOTER_TEXT_LENGTH) throw new Error(`DataError: Embed's footer cannot exceed ${MAX_EMBED_FOOTER_TEXT_LENGTH} characters.`)
        if (footer.iconUrl && typeof footer.iconUrl !== "string") throw new TypeError("TypeError: Invalid embed footer's icon.")
        this.footer = footer
        return this
    }

    /**
     * Sets an image of an embed.
     * @param image New image of an embed.
     * @throws Throws an error, if image is invalid.
     * @returns Edited instance.
     */
    public setImage(image: IEmbedMediaStructure | null): this {
        this.validateMediaElement(image)
        this.image = image
        return this
    }

    /**
     * Sets a video of an embed.
     * @param video New video of an embed.
     * @throws Throws an error, if video is invalid.
     * @returns Edited instance.
     */
    public setVideo(video: IEmbedMediaStructure | null): this {
        this.validateMediaElement(video)
        this.video = video
        return this
    }

    /**
     * Sets a thumbnail of an embed.
     * @param thumbnail New thumbnail of an embed.
     * @throws Throws an error, if thumbnail is invalid.
     * @returns Edited instance.
     */
    public setThumbnail(thumbnail: IEmbedMediaStructure | null): this {
        this.validateMediaElement(thumbnail)
        this.thumbnail = thumbnail
        return this
    }

    /**
     * Sets a timestamp of an embed.
     * @param timestamp New timestamp of an embed.
     * @throws Throws an error, if provided string is not in ISO8601 format.
     * @returns Edited instance.
     */
    public setTimestamp(timestamp: Date | string | null): this {
        if (timestamp === null) {
            this.timestamp = null
        } else if (typeof timestamp === "string") {
            if (!this.ISO8601_REGEX.test(timestamp)) throw new Error("DataError: Invalid timestamp.")
            this.timestamp = timestamp
        } else if (timestamp instanceof Date) {
            this.timestamp = timestamp.toISOString()
        } else throw new TypeError("TypeError: Invalid embed's timestamp.")

        return this
    }

    private validateMediaElement(mediaElement: IEmbedMediaStructure | null): void {
        if (mediaElement === null) return
        if (typeof mediaElement !== "object") throw new TypeError("TypeError: Invalid media element.")
        if (typeof mediaElement.url !== "string") throw new TypeError("TypeError: Media's URL must be a string.")
    }

    private validateFields(fields: IEmbedFieldStructure[]): void {
        for (const field of fields) {
            if (typeof field.name !== "string") throw new TypeError("TypeError: Invalid embed field's title.")
            if (field.name.length > MAX_EMBED_TITLE_LENGTH) throw new Error(`DataError: Embed field's title cannot exceed ${MAX_EMBED_TITLE_LENGTH} characters.`)
            if (typeof field.content !== "string") throw new TypeError("TypeError: Invalid embed field's title.")
            if (field.content.length > MAX_EMBED_DESCRIPTION_LENGTH) throw new Error(`DataError: Embed field's content cannot exceed ${MAX_EMBED_DESCRIPTION_LENGTH} characters.`)
            if (typeof (field.inline ?? false) !== "boolean") throw new TypeError("TypeError: Invalid embed field's inline state.")
        }
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        return {
            title: this.title,
            description: this.description,
            color: this.color,
            fields: this.fields.map(({ name, content, inline = false }: IEmbedFieldStructure) => ({
                name,
                inline,
                value: Array.isArray(content) ? content.join("\n") : content,
            })),
            author:
                this.author === null
                    ? null
                    : {
                        name: this.author.name,
                        icon_url: this.author.iconUrl || null,
                        url: this.author.url || null,
                    },
            footer:
                this.footer === null
                    ? null
                    : {
                        text: this.footer.text,
                        icon_url: this.footer.iconUrl || null,
                    },
            image:
                this.image === null
                    ? null
                    : {
                        url: this.image.url,
                    },
            video:
                this.video === null
                    ? null
                    : {
                        url: this.video.url,
                    },
            thumbnail:
                this.thumbnail === null
                    ? null
                    : {
                        url: this.thumbnail.url,
                    },
            timestamp: this.timestamp,
        }
    }
}

export { EmbedBuilder }
