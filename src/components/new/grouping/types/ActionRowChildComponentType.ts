import { BaseButton } from "../../buttons/BaseButton"
import { BaseSelectMenuComponent } from "../../dropdowns/BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "../../dropdowns/constants/SelectMenuDefaultOptionType"
import { StringSelectMenuComponent } from "../../dropdowns/StringSelectMenuComponent"

type ActionRowChildComponentType =
    | BaseButton
    | StringSelectMenuComponent
    | BaseSelectMenuComponent<SelectMenuDefaultOptionType>

export type { ActionRowChildComponentType }