import { ComponentType } from "../../constants/ComponentType"
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"
import { ISelectMenuDefaultOptionStructure } from "./interfaces/ISelectMenuDefaultOptionStructure"

class ChannelSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.CHANNEL> {
    public static readonly type: ComponentType = ComponentType.CHANNEL_SELECT

    public override setDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.CHANNEL>, "type">[]): this {
        this.defaultValues = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.CHANNEL as const,
        }))
        return this
    }

    public override addDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.CHANNEL>, "type">[]): this {
        const transformedValues: ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.CHANNEL>[] = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.CHANNEL as const,
        }))

        this.defaultValues.push(...transformedValues)

        return this
    }

    public toJSON() {
        return {
            type: ChannelSelectMenuComponent.type,
            custom_id: this.customId,
            placeholder: this.placeholder,
            min_values: this.minValues,
            max_values: this.maxValues,
            disabled: this.disabled,
            default_values: this.defaultValues,
        }
    }
}

export { ChannelSelectMenuComponent }
