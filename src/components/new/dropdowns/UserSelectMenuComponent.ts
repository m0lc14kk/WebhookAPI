import { SnowflakeValidator } from "../../../validators/SnowflakeValidator"
import { ComponentType } from "../../constants/ComponentType"
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"
import type { ISelectMenuDefaultOptionStructure } from "./interfaces/ISelectMenuDefaultOptionStructure"

class UserSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.USER> {
    public static readonly type: ComponentType = ComponentType.USER_SELECT

    /**
     * Sets default values of a dropdown menu.
     * @param defaultValues Default values of a dropdown.
     * @returns Edited instance.
     */
    public override setDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.USER>, "type">[]): this {
        for (const { id } of defaultValues) {
            if (!SnowflakeValidator.isSnowflake(id)) throw new Error("DataError: Invalid user's identifier.")
        }

        this.defaultValues = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.USER as const,
        }))
        return this
    }

    /**
     * Adds default values of a dropdown menu.
     * @param defaultValues Default values of a dropdown.
     * @returns Edited instance.
     */
    public override addDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.USER>, "type">[]): this {
        for (const { id } of defaultValues) {
            if (!SnowflakeValidator.isSnowflake(id)) throw new Error("DataError: Invalid user's identifier.")
        }

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
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (this.customId === null) throw new Error("DataError: You must provide custom identifier of a dropdown before creating it.")
        if (this.minValues > this.maxValues) throw new Error("DataError: Select menu cannot have more minimum than maximum values to select!")

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
