import { ComponentType } from "../../constants/ComponentType"
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"
import { ISelectMenuDefaultOptionStructure } from "./interfaces/ISelectMenuDefaultOptionStructure"

class RoleSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.ROLE> {
    public static readonly type: ComponentType = ComponentType.ROLE_SELECT

    public override setDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.ROLE>, "type">[]): this {
        this.defaultValues = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.ROLE as const,
        }))
        return this
    }

    public override addDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.ROLE>, "type">[]): this {
        const transformedValues: ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.ROLE>[] = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.ROLE as const,
        }))

        this.defaultValues.push(...transformedValues)

        return this
    }

    public toJSON() {
        return {
            type: RoleSelectMenuComponent.type,
            custom_id: this.customId,
            placeholder: this.placeholder,
            min_values: this.minValues,
            max_values: this.maxValues,
            disabled: this.disabled,
            default_values: this.defaultValues,
        }
    }
}

export { RoleSelectMenuComponent }
