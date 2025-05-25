import { ComponentType } from "../../constants/ComponentType"
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"
import { ISelectMenuDefaultOptionStructure } from "./interfaces/ISelectMenuDefaultOptionStructure"

class RoleSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.ROLE> {
    public static readonly type: ComponentType = ComponentType.ROLE_SELECT

    /**
     * Sets default values of a dropdown menu.
     * @param defaultValues Default values of a dropdown.
     * @returns Edited instance.
     */
    public override setDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.ROLE>, "type">[]): this {
        this.defaultValues = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.ROLE as const,
        }))
        return this
    }

    /**
     * Adds default values of a dropdown menu.
     * @param defaultValues Default values of a dropdown.
     * @returns Edited instance.
     */
    public override addDefaultValues(...defaultValues: Omit<ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.ROLE>, "type">[]): this {
        const transformedValues: ISelectMenuDefaultOptionStructure<SelectMenuDefaultOptionType.ROLE>[] = defaultValues.map(({ id }) => ({
            id,
            type: SelectMenuDefaultOptionType.ROLE as const,
        }))

        this.defaultValues.push(...transformedValues)

        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        if (this.customId === null) throw new Error("DataError: You must provide custom identifier of a dropdown before creating it.")

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
