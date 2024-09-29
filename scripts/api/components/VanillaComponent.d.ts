declare abstract class VanillaComponent {
    protected abstract readonly componentType: number;
    protected componentCustomId?: string;
    setCustomComponentId(componentId: string): VanillaComponent;
    abstract toJSON(): any;
}
export { VanillaComponent };
