import { ComponentType } from "../../constants/ComponentType";
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent";
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType";

class MentionableSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.ROLE | SelectMenuDefaultOptionType.USER> {
    public static override readonly type: ComponentType = ComponentType.MENTIONABLE_SELECT

    public toJSON() {
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