import { IVanillaComponentData } from "../components/interfaces/IVanillaComponentData";
import { ComponentType } from "../types/ComponentType";
interface IActionRowUtility {
    type: ComponentType.ActionRow;
    components: IVanillaComponentData[];
}
export { IActionRowUtility };
