import { SelectMenuDefaultOptionType } from "../constants/SelectMenuDefaultOptionType"

/**
 * Structure of an item in Discord-type values.
 */
interface ISelectMenuDefaultOptionStructure<T extends SelectMenuDefaultOptionType> {
    /**
     * Identifier of an item.
     */
    id: string

    /**
     * Type of an item.
     * @remarks Use `SelectMenuDefaultOptionType` enumeration.
     */
    type: T
}

export type { ISelectMenuDefaultOptionStructure }
