/**
 * Raw form of a field in embed.
 */
interface IRawEmbedField {
    /**
     * Title of a field.
     * @readonly
     */
    readonly name: string,

    /**
     * Content of a field.
     * @readonly
     */
    readonly value: string,

    /**
     * If field should be displayed in-line with others in grid (3/x - rows/columns)
     * @readonly
     */
    readonly inline: boolean
};

export { IRawEmbedField };