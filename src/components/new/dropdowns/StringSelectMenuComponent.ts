import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import type { IStringSelectMenuOptionStructure } from "./interfaces/IStringSelectMenuOptionStructure"

class StringSelectMenuComponent extends Component {
    public static override type: ComponentType = ComponentType.STRING_SELECT
    private customId: string | null = null
    private maxValues: number = 1
    private minValues: number = 1
    private disabled: boolean = false
    private placeholder: string = ""
    private options: IStringSelectMenuOptionStructure[] = []

    /**
     * Sets a custom identifier of a dropdown menu.
     * @param customId Custom identifier of a dropdown menu. 
     * @returns Edited instance.
     */
    public setCustomId(customId: string): StringSelectMenuComponent {
        this.customId = customId
        return this
    }

    /**
     * Sets a maximum number of values that you can select.
     * @param maxValues Maximum number of values.
     * @returns Edited instance.
     */
    public setMaximumValues(maxValues: number): StringSelectMenuComponent {
        if (maxValues < 1 || maxValues > 25) throw new Error("DataError: Maximum values is out of bounds!")
        this.maxValues = maxValues
        return this
    }

    /**
     * Sets a minimum number of values that you have to select.
     * @param maxValues Minimum number of values.
     * @returns Edited instance.
     */
    public setMinimumValues(minValues: number): StringSelectMenuComponent {
        if (minValues < 0 || minValues > 25) throw new Error("DataError: Minimum values is out of bounds!")
        this.minValues = minValues
        return this
    }

    /**
     * Sets a disabled state of a dropdown.
     * @param maxValues Disabled state.
     * @returns Edited instance.
     */
    public setDisabled(disabled: boolean): StringSelectMenuComponent {
        this.disabled = disabled
        return this
    }

    /**
     * Sets a placeholder of a dropdown.
     * @param maxValues Text of a placeholder
     * @returns Edited instance.
     */
    public setPlaceholder(placeholder: string): StringSelectMenuComponent {
        this.placeholder = placeholder
        return this
    }

    /**
     * Sets options of a dropdpown.
     * @param maxValues Options of a dropdown.
     * @returns Edited instance.
     */
    public setOptions(...options: IStringSelectMenuOptionStructure[]): StringSelectMenuComponent {
        this.options = options
        return this
    }
    
    /**
     * Adds options to a dropdpown.
     * @param maxValues New options of a dropdown.
     * @returns Edited instance.
     */
    public addOptions(...options: IStringSelectMenuOptionStructure[]): StringSelectMenuComponent {
        this.options.push(...options)
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
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
