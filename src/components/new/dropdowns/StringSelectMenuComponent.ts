import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { IStringSelectMenuOptionStructure } from "./interfaces/IStringSelectMenuOptionStructure"

class StringSelectMenuComponent extends Component {
    public static override type: ComponentType = ComponentType.STRING_SELECT
    private customId: string | null = null
    private maxValues: number = 1
    private minValues: number = 1
    private disabled: boolean = false
    private placeholder: string = ""
    private options: IStringSelectMenuOptionStructure[] = []

    public setCustomId(customId: string): StringSelectMenuComponent {
        this.customId = customId
        return this
    }

    public setMaximumValues(maxValues: number): StringSelectMenuComponent {
        if (maxValues < 1 || maxValues > 25) throw new Error("DataError: Maximum values is out of bounds!")
        this.maxValues = maxValues
        return this
    }

    public setMinimumValues(minValues: number): StringSelectMenuComponent {
        if (minValues < 0 || minValues > 25) throw new Error("DataError: Minimum values is out of bounds!")
        this.minValues = minValues
        return this
    }

    public setDisabled(disabled: boolean): StringSelectMenuComponent {
        this.disabled = disabled
        return this
    }

    public setPlaceholder(placeholder: string): StringSelectMenuComponent {
        this.placeholder = placeholder
        return this
    }

    public setOptions(...options: IStringSelectMenuOptionStructure[]): StringSelectMenuComponent {
        this.options = options
        return this
    }

    public addOptions(...options: IStringSelectMenuOptionStructure[]): StringSelectMenuComponent {
        this.options.push(...options)
        return this
    }

    public toJSON() {
        return {
            type: StringSelectMenuComponent.type,
            custom_id: this.customId,
            placeholder: this.placeholder,
            min_values: this.minValues,
            max_values: this.maxValues,
            disabled: this.disabled,
            options: this.options.map(({ emoji, ...props }: IStringSelectMenuOptionStructure) => ({
                ...props,
                emoji:
                    typeof emoji === "string"
                        ? {
                              name: emoji,
                          }
                        : emoji,
            })),
        }
    }
}

export { StringSelectMenuComponent }
