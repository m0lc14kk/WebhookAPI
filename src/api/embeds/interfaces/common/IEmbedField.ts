import type { EmbedContentTypes } from "../../types/EmbedContentTypes";

interface IEmbedField {
    name: EmbedContentTypes,
    content: string | EmbedContentTypes[],
    inline?: boolean
};

export { IEmbedField };