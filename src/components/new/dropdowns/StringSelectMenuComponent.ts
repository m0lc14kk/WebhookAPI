import { MAX_CUSTOM_ID_LENGTH, MAX_SELECT_MENU_OPTIONS, MAX_SELECT_MENU_PLACEHOLDER_LENGTH } from "../../../globals"
import { DiscordEmojiValidator } from "../../../validators/DiscordEmojiValidator"
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
    public setCustomId(customId: string): this {
        if (customId.length > MAX_CUSTOM_ID_LENGTH) throw new Error(`DataError: Custom identifier cannot be longer than ${MAX_CUSTOM_ID_LENGTH} characters!`)
        this.customId = customId
        return this
    }

    /**
     * Sets a maximum number of values that you can select.
     * @param maxValues Maximum number of values.
     * @returns Edited instance.
     */
    public setMaximumValues(maxValues: number): this {
        if (maxValues < 1 || maxValues > 25) throw new Error("DataError: Maximum values is out of bounds!")
        this.maxValues = maxValues
        return this
    }

    /**
     * Sets a minimum number of values that you have to select.
     * @param maxValues Minimum number of values.
     * @returns Edited instance.
     */
    public setMinimumValues(minValues: number): this {
        if (minValues < 0 || minValues > 25) throw new Error("DataError: Minimum values is out of bounds!")
        this.minValues = minValues
        return this
    }

    /**
     * Sets a disabled state of a dropdown.
     * @param maxValues Disabled state.
     * @returns Edited instance.
     */
    public setDisabled(disabled: boolean): this {
        this.disabled = disabled
        return this
    }

    /**
     * Sets a placeholder of a dropdown.
     * @param maxValues Text of a placeholder
     * @returns Edited instance.
     */
    public setPlaceholder(placeholder: string): this {
        if (placeholder.length > MAX_SELECT_MENU_PLACEHOLDER_LENGTH) throw new Error(`DataError: Dropdown's placeholder cannot be longer than ${MAX_SELECT_MENU_PLACEHOLDER_LENGTH} characters.`)
        this.placeholder = placeholder
        return this
    }

    /**
     * Sets options of a dropdpown.
     * @param maxValues Options of a dropdown.
     * @returns Edited instance.
     */
    public setOptions(...options: IStringSelectMenuOptionStructure[]): this {
        if (options.length > MAX_SELECT_MENU_OPTIONS) throw new Error(`DataError: String select menu cannot have more options than ${MAX_SELECT_MENU_OPTIONS}.`)
        this.validateOptions(options)
        this.options = options
        return this
    }

    /**
     * Adds options to a dropdpown.
     * @param maxValues New options of a dropdown.
     * @returns Edited instance.
     */
    public addOptions(...options: IStringSelectMenuOptionStructure[]): this {
        if (this.options.length + options.length > MAX_SELECT_MENU_OPTIONS) throw new Error(`DataError: String select menu cannot have more options than ${MAX_SELECT_MENU_OPTIONS}.`)
        this.validateOptions(options)
        this.options.push(...options)
        return this
    }

    private validateOptions(options: IStringSelectMenuOptionStructure[]): void {
        for (const option of options) {
            if (typeof option.label !== "string") throw new TypeError("TypeError: Option's label must be a string.")
            if (typeof option.description !== "string") throw new TypeError("TypeError: Option's description must be a string.")
            if (typeof option.value !== "string") throw new TypeError("TypeError: Option's value must be a string.")
            if (typeof (option.default ?? false) !== "boolean") throw new TypeError("TypeError: Option's default check must be a boolean.")
            DiscordEmojiValidator.validateEmoji(option.emoji)
        }
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (this.customId === null) throw new Error("DataError: You must provide custom identifier of a dropdown before creating it.")
        if (this.options.length === 0) throw new Error("DataError: You must provide at least 1 option to a string dropdown.")
        if (this.minValues > this.maxValues) throw new Error("DataError: Select menu cannot have more minimum than maximum values to select!")

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
