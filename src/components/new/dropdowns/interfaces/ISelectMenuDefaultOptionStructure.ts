import { SelectMenuDefaultOptionType } from "../constants/SelectMenuDefaultOptionType"

interface ISelectMenuDefaultOptionStructure<T extends SelectMenuDefaultOptionType> {
    id: string
    type: T
}

export type { ISelectMenuDefaultOptionStructure }
