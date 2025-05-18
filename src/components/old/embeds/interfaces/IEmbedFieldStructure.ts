/**
 * Structure of an embed's field.
 */
interface IEmbedFieldStructure {
    /**
     * Name of a field.
     */
    name: string

    /**
     * Content of a field.
     */
    content: string | string[]

    /**
     * If the field should be displayed in a grid with other.
     * @default false
     */
    inline?: boolean
}

export type { IEmbedFieldStructure }
