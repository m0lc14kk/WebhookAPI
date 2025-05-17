import { ComponentType } from "../../constants/ComponentType"
import { BaseSelectMenuComponent } from "./BaseSelectMenuComponent"
import { SelectMenuDefaultOptionType } from "./constants/SelectMenuDefaultOptionType"

class UserSelectMenuComponent extends BaseSelectMenuComponent<SelectMenuDefaultOptionType.USER> {
    public static readonly type: ComponentType = ComponentType.USER_SELECT

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
