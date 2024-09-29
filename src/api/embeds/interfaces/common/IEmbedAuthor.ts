import { IEmbedContentWithImage } from "./IEmbedContentWithImage";

interface IEmbedAuthor extends IEmbedContentWithImage {
    name: string,
    url?: string
};

export { IEmbedAuthor };