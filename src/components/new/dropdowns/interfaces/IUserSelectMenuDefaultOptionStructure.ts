import { UserSelectMenuDefaultOptionType } from "../constants/UserSelectMenuDefaultOptionType"

interface IUserSelectMenuDefaultOptionStructure<T extends UserSelectMenuDefaultOptionType> {
    id: string
    type: T
}

export type { IUserSelectMenuDefaultOptionStructure }
