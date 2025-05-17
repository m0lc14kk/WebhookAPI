import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { UserSelectMenuDefaultOptionType } from "./constants/UserSelectMenuDefaultOptionType"
import { IUserSelectMenuDefaultOptionStructure } from "./interfaces/IUserSelectMenuDefaultOptionStructure"

class UserSelectMenuComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.USER_SELECT
    private customId: string | null = null
    private maxValues: number = 1
    private minValues: number = 1
    private disabled: boolean = false
    private placeholder: string = ""
    private defaultValues: IUserSelectMenuDefaultOptionStructure<UserSelectMenuDefaultOptionType.USER>[] = []

    public setCustomId(customId: string): UserSelectMenuComponent {
        this.customId = customId
        return this
    }

    public setMaximumValues(maxValues: number): UserSelectMenuComponent {
        if (maxValues < 1 || maxValues > 25) throw new Error("DataError: Maximum values is out of bounds!")
        this.maxValues = maxValues
        return this
    }

    public setMinimumValues(minValues: number): UserSelectMenuComponent {
        if (minValues < 0 || minValues > 25) throw new Error("DataError: Minimum values is out of bounds!")
        this.minValues = minValues
        return this
    }

    public setDisabled(disabled: boolean): UserSelectMenuComponent {
        this.disabled = disabled
        return this
    }

    public setPlaceholder(placeholder: string): UserSelectMenuComponent {
        this.placeholder = placeholder
        return this
    }

    public setDefaultValues(...defaultValues: IUserSelectMenuDefaultOptionStructure<UserSelectMenuDefaultOptionType.USER>[]): UserSelectMenuComponent {
        this.defaultValues = defaultValues
        return this
    }

    public addDefaultValues(...defaultValues: IUserSelectMenuDefaultOptionStructure<UserSelectMenuDefaultOptionType.USER>[]): UserSelectMenuComponent {
        this.defaultValues.push(...defaultValues)
        return this
    }

    public toJSON() {
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
