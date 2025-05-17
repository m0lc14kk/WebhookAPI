import { SelectMenuDefaultOptionType } from "../constants/SelectMenuDefaultOptionType"

interface IUserSelectMenuDefaultOptionStructure<T extends SelectMenuDefaultOptionType> {
    id: string
    type: T
}

export type { IUserSelectMenuDefaultOptionStructure }
