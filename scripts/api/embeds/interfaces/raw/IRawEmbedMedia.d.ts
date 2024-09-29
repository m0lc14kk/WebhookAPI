/**
 * Raw structure of a media in embed.
 */
interface IRawEmbedMedia {
    /**
     * Source of a media.
     * @readonly
     */
    readonly url: string;
    /**
     * Width of a media.
     * @readonly
     * @remarks If value is `null`, it will be automaticly formatted with media resolution.
     */
    readonly width: number | null;
    /**
     * Height of a media.
     * @readonly
     * @remarks If value is `null`, it will be automaticly formatted with media resolution.
     */
    readonly height: number | null;
}
export { IRawEmbedMedia };
