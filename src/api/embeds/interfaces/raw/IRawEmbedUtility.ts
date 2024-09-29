import { EmbedContentTypes } from "../../types/EmbedContentTypes";
import { IRawEmbedAuthor } from "./IRawEmbedAuthor";
import { IRawEmbedField } from "./IRawEmbedField";
import { IRawEmbedFooter } from "./IRawEmbedFooter";
import { IRawEmbedMedia } from "./IRawEmbedMedia";

interface IRawEmbedUtility {
    type: "rich",
    title: EmbedContentTypes,
    description: EmbedContentTypes,
    color: number,
    url: EmbedContentTypes,
    fields: IRawEmbedField[],
    author: IRawEmbedAuthor | null,
    footer: IRawEmbedFooter | null,
    video: IRawEmbedMedia | null,
    image: IRawEmbedMedia | null,
    thumbnail: IRawEmbedMedia | null,
    timestamp: string | null,
};

export { IRawEmbedUtility };