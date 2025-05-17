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

    public setCustomId(customId: string): this {
        this.customId = customId
        return this
    }

    public setMaximumValues(maxValues: number): this {
        if (maxValues < 1 || maxValues > 25) throw new Error("DataError: Maximum values is out of bounds!")
        this.maxValues = maxValues
        return this
    }

    public setMinimumValues(minValues: number): this {
        if (minValues < 0 || minValues > 25) throw new Error("DataError: Minimum values is out of bounds!")
        this.minValues = minValues
        return this
    }

    public setDisabled(disabled: boolean): this {
        this.disabled = disabled
        return this
    }

    public setPlaceholder(placeholder: string): this {
        this.placeholder = placeholder
        return this
    }

    public setDefaultValues(...defaultValues: ISelectMenuDefaultOptionStructure<T>[]): this {
        this.defaultValues = defaultValues
        return this
    }

    public addDefaultValues(...defaultValues: ISelectMenuDefaultOptionStructure<T>[]): this {
        this.defaultValues.push(...defaultValues)
        return this
    }

    public abstract toJSON(): object
}

export { BaseSelectMenuComponent }
