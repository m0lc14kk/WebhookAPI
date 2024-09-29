import { IVanillaComponentData } from "./interfaces/IVanillaComponentData";
declare abstract class VanillaComponent {
    abstract readonly componentType: number;
    componentId?: string;
    setCustomComponentId(componentId: string): this;
    abstract toJSON(): IVanillaComponentData;
}
export { VanillaComponent };
