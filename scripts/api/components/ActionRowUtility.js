import { MAX_COMPONENTS_PER_ROW_COMPONENT_TYPE } from "./constants/MaxComponentsPerRowComponentType";
import { ComponentType } from "./types/ComponentType";
class ActionRowUtility {
    constructor() { }
    ;
    components = [];
    addComponent(component) {
        if (this.components.find((checkComponent) => checkComponent.componentType !== component.componentType))
            throw new Error("DataError: You cannot push different component types to the same action row!");
        if (MAX_COMPONENTS_PER_ROW_COMPONENT_TYPE[component.componentType === ComponentType.Button ? "buttons" : "selectMenus"] <= this.components.length)
            throw new Error("DataError: This action row cannot have more components!");
        this.components.push(component);
        return this;
    }
    ;
    toJSON() {
        return {
            type: ComponentType.ActionRow,
            components: this.components.map((component) => component.toJSON())
        };
    }
    ;
}
;
export { ActionRowUtility };
