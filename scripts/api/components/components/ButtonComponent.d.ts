import { IButtonComponentData } from "./interfaces/IButtonComponentData";
import { VanillaComponent } from "./VanillaComponent";
declare class ButtonComponent extends VanillaComponent {
    readonly componentType: number;
    private buttonLabel;
    private buttonEmoji;
    private buttonStyle;
    private buttonDisabled;
    private buttonURL?;
    setLabel(label: string): ButtonComponent;
    setEmoji(emoji: string): ButtonComponent;
    setStyle(style: number): ButtonComponent;
    setDisabled(disabled: boolean): ButtonComponent;
    setURL(url: string): ButtonComponent;
    toJSON(): IButtonComponentData;
}
export { ButtonComponent };
