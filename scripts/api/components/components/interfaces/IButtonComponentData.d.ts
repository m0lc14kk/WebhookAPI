import { ComponentType } from "../../types/ComponentType";
import { IVanillaComponentData } from "./IVanillaComponentData";
interface IButtonComponentData extends IVanillaComponentData {
    readonly type: ComponentType.Button;
    readonly label: string;
    readonly emoji: string | null;
    readonly disabled?: boolean;
    readonly style: number;
    readonly url?: string;
}
export { IButtonComponentData };
