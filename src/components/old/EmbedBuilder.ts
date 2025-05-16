import { EmbedDefaultProperties } from "./EmbedDefaultProperties"

class EmbedBuilder {
    private title: string | null = null
    private description: string | null = null
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
        this.color = typeof color === "string" ? +color.slice(1) : color
        return this
    }

    public toJSON() {
        return {
            title: this.title,
            description: this.description,
            color: this.color,
        }
    }
}

export { EmbedBuilder }
