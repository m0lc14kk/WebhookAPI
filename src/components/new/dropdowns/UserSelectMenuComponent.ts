import { ComponentType } from "../../constants/ComponentType"
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"
import type { ISelectMenuDefaultOptionStructure } from "./interfaces/ISelectMenuDefaultOptionStructure"

class UserSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.USER> {
    public static readonly type: ComponentType = ComponentType.USER_SELECT

    public override setDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.USER>, "type">[]): this {
        this.defaultValues = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.USER as const,
        }))
        return this
    }

    public override addDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.USER>, "type">[]): this {
        const transformedValues: ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.USER>[] = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.USER as const,
        }))

        this.defaultValues.push(...transformedValues)

        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        return {
            type: UserSelectMenuComponent.type,
            custom_id: this.customId,
            placeholder: this.placeholder,
            min_values: this.minValues,
            max_values: this.maxValues,
            disabled: this.disabled,
            default_values: this.defaultValues,
        }
    }
}

export { UserSelectMenuComponent }
