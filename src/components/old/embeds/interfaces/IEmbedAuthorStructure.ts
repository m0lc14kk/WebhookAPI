/**
 * Structure of an embed's author.
 */
interface IEmbedAuthorStructure {
    /**
     * Name of an author.
     */
    name: string

    /**
     * Optional URL of an author.
     */
    url?: string

    /**
     * Optional icon's URL of an author.
     */
    iconUrl?: string
}

export type { IEmbedAuthorStructure }
