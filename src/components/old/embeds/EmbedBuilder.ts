import { EmbedDefaultProperties } from "./EmbedDefaultProperties"
import type { IEmbedAuthorStructure } from "./interfaces/IEmbedAuthorStructure"
import type { IEmbedFieldStructure } from "./interfaces/IEmbedFieldStructure"
import type { IEmbedFooterStructure } from "./interfaces/IEmbedFooterStructure"
import type { IEmbedMediaStructure } from "./interfaces/IEmbedMediaStructure"

const MAX_COLOR_NUMBER: number = Math.pow(256, 3) - 1

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

    public setTitle(title: string): EmbedBuilder {
        this.title = title
        return this
    }

    public setDescription(description: string | string[]): EmbedBuilder {
        this.description = Array.isArray(description) ? description.join("\n") : description
        return this
    }

    public setColor(color: string | number): EmbedBuilder {
        if (typeof color == "string") {
            if (!color.startsWith("#") && color.length !== 7) throw new Error("DataError: Invalid color HEX.")
            this.color = Number(`0x${color.slice(1)}`)
            return this
        }

        if (color > MAX_COLOR_NUMBER || color < 0) throw new Error("DataError: Color is out of bounds.")
        this.color = Math.floor(color)
        return this
    }

    public setFields(...fields: IEmbedFieldStructure[]): EmbedBuilder {
        this.fields = fields
        return this
    }

    public addFields(...fields: IEmbedFieldStructure[]): EmbedBuilder {
        this.fields.push(...fields)
        return this
    }

    public setAuthor(author: IEmbedAuthorStructure | null): EmbedBuilder {
        this.author = author
        return this
    }

    public setFooter(footer: IEmbedFooterStructure | null): EmbedBuilder {
        this.footer = footer
        return this
    }

    public setImage(image: IEmbedMediaStructure | null): EmbedBuilder {
        this.image = image
        return this
    }

    public setVideo(video: IEmbedMediaStructure | null): EmbedBuilder {
        this.video = video
        return this
    }

    public setThumbnail(thumbnail: IEmbedMediaStructure | null): EmbedBuilder {
        this.thumbnail = thumbnail
        return this
    }

    public setTimestamp(timestamp: Date | string | null): EmbedBuilder {
        if (timestamp === null) {
            this.timestamp = null
        } else if (typeof timestamp === "string") {
            if (!this.ISO8601_REGEX.test(timestamp)) throw new Error("DataError: Invalid timestamp.")
            this.timestamp = timestamp
        } else {
            this.timestamp = timestamp.toISOString()
        }

        return this
    }

    public toJSON() {
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
