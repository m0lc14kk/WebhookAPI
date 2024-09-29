import type { EmbedContentTypes } from "../../types/EmbedContentTypes";
interface IEmbedField {
    name: EmbedContentTypes;
    content: EmbedContentTypes;
    inline?: boolean;
}
export { IEmbedField };
