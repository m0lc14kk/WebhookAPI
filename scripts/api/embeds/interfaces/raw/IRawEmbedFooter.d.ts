/**
 * Fixed structure for raw footer structure of embed.
 */
interface IRawEmbedFooter {
    /**
     * Text of a footer.
     * @readonly
     */
    readonly text: string;
    /**
     * Icon of a footer.
     * @readonly
     */
    readonly icon_url?: string;
}
export { IRawEmbedFooter };
