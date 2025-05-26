import { MAX_CUSTOM_ID_LENGTH } from "../../../globals"
import { Component } from "../../Component"
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"
import type { ISelectMenuDefaultOptionStructure } from "./interfaces/ISelectMenuDefaultOptionStructure"

abstract class BaseSelectMenuComponent<T extends SelectMenuDefaultOptionType> extends Component {
    protected customId: string | null = null
    protected maxValues: number = 1
    protected minValues: number = 1
    protected disabled: boolean = false
    protected placeholder: string = ""
    protected defaultValues: ISelectMenuDefaultOptionStructure<T>[] = []

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
        if (placeholder.length > 150) throw new Error("DataError: Dropdown's placeholder cannot be longer than 150 characters.")
        this.placeholder = placeholder
        return this
    }

    /**
     * Sets default values of a dropdown menu.
     * @param defaultValues Default values of a dropdown.
     * @returns Edited instance.
     */
    public setDefaultValues(...defaultValues: ISelectMenuDefaultOptionStructure<T>[]): this {
        this.defaultValues = defaultValues
        return this
    }

    /**
     * Adds default values of a dropdown menu.
     * @param defaultValues Default values of a dropdown.
     * @returns Edited instance.
     */
    public addDefaultValues(...defaultValues: ISelectMenuDefaultOptionStructure<T>[]): this {
        this.defaultValues.push(...defaultValues)
        return this
    }

    public abstract toJSON(): object
}

export { BaseSelectMenuComponent }
