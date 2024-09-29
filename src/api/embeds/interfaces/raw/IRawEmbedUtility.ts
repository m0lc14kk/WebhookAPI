import { EmbedContentTypes } from "../../types/EmbedContentTypes";

interface IRawEmbedUtility {
    type: "rich",
    title: EmbedContentTypes,
    description: EmbedContentTypes,
    color: number
};

export { IRawEmbedUtility };