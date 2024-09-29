import { VanillaComponent } from "./components/VanillaComponent";
import { IActionRowUtility } from "./interfaces/IActionRowUtility";
declare class ActionRowUtility {
    constructor();
    components: VanillaComponent[];
    addComponent(component: VanillaComponent): ActionRowUtility;
    toJSON(): IActionRowUtility;
}
export { ActionRowUtility };
