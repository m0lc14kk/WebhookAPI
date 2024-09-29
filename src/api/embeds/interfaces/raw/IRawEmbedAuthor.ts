/**
 * Raw form of an author in embed.
 */
interface IRawEmbedAuthor {
    /**
     * Name of an author.
     * @readonly
     */
    readonly name: string,

    /**
     * Icon of an author.
     * @readonly
     */
    readonly icon_url?: string,

    /**
     * URL of an author.
     * @readonly
     */
    readonly url?: string
};

export { IRawEmbedAuthor };