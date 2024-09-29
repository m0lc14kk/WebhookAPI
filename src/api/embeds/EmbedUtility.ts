import { IRawEmbedUtility } from "./interfaces/raw/IRawEmbedUtility";
import type { EmbedContentTypes } from "./types/EmbedContentTypes";

class EmbedUtility {
    private embedTitle: EmbedContentTypes = null;
    private embedDescription: EmbedContentTypes = null;
    private embedColor: number = 0x000000;

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

    public toJSON(): IRawEmbedUtility {
        return {
            type: "rich",
            title: this.embedTitle,
            description: this.embedDescription,
            color: this.embedColor
        };
    };
};

export { EmbedUtility, IRawEmbedUtility };