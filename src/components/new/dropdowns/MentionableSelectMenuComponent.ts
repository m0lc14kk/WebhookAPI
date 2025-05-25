import { ComponentType } from "../../constants/ComponentType"
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent"
import type { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"

class MentionableSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.ROLE | SelectMenuDefaultOptionType.USER> {
    public static override readonly type: ComponentType = ComponentType.MENTIONABLE_SELECT

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        if (this.customId === null) throw new Error("DataError: You must provide custom identifier of a dropdown before creating it.")

        return {
            type: MentionableSelectMenuComponent.type,
            custom_id: this.customId,
            placeholder: this.placeholder,
            min_values: this.minValues,
            max_values: this.maxValues,
            disabled: this.disabled,
            default_values: this.defaultValues,
        }
    }
}

export { MentionableSelectMenuComponent }
