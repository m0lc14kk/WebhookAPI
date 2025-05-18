import { ComponentType } from "../../constants/ComponentType"
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"
import type { ISelectMenuDefaultOptionStructure } from "./interfaces/ISelectMenuDefaultOptionStructure"

class ChannelSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.CHANNEL> {
    public static readonly type: ComponentType = ComponentType.CHANNEL_SELECT

    /**
     * Sets default values of a dropdown menu.
     * @param defaultValues Default values of a dropdown.
     * @returns Edited instance.
     */
    public override setDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.CHANNEL>, "type">[]): this {
        this.defaultValues = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.CHANNEL as const,
        }))
        return this
    }

    /**
     * Adds default values of a dropdown menu.
     * @param defaultValues Default values of a dropdown.
     * @returns Edited instance.
     */
    public override addDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.CHANNEL>, "type">[]): this {
        const transformedValues: ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.CHANNEL>[] = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.CHANNEL as const,
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
