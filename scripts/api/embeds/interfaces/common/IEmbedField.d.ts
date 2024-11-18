import type { EmbedContentTypes } from "../../types/EmbedContentTypes";
/**
 * Field of an embed.
 */
interface IEmbedField {
    /**
     * Title of a field in embed.
     * @readonly
     */
    readonly name: EmbedContentTypes;
    /**
     * Content of a field in embed.
     * @readonly
     */
    readonly content: string | EmbedContentTypes[];
    /**
     * If field should be displayed in-line with other elements in grid (3/x - rows/columns)
     * @readonly
     * @default false // Won't be in-line with other elements.
     */
    readonly inline?: boolean;
}
export { IEmbedField };
