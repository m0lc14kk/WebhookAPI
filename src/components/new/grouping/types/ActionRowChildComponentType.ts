import { BaseButtonComponent } from "../../buttons/BaseButtonComponent"
import { BaseSelectMenuComponent } from "../../dropdowns/BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "../../dropdowns/constants/SelectMenuDefaultOptionType"
import { StringSelectMenuComponent } from "../../dropdowns/StringSelectMenuComponent"

type ActionRowChildComponentType = BaseButtonComponent | StringSelectMenuComponent | BaseSelectMenuComponent<SelectMenuDefaultOptionType>

export type { ActionRowChildComponentType }
