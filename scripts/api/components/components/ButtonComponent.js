import { ComponentType } from "../types/ComponentType";
import { ButtonStyle } from "./types/ButtonStyle";
import { VanillaComponent } from "./VanillaComponent";
class ButtonComponent extends VanillaComponent {
    componentType = 2;
    buttonLabel = "";
    buttonEmoji = null;
    buttonStyle = 1;
    buttonDisabled = false;
    buttonURL;
    setLabel(label) {
        this.buttonLabel = label;
        return this;
    }
    ;
    setEmoji(emoji) {
        this.buttonEmoji = emoji;
        return this;
    }
    ;
    setStyle(style) {
        this.buttonStyle = style;
        return this;
    }
    ;
    setDisabled(disabled) {
        this.buttonDisabled = disabled;
        return this;
    }
    ;
    setURL(url) {
        if (this.buttonStyle !== ButtonStyle.Link)
            throw new Error("DataError: You must set button's style to link (5), before setting it's URL!");
        this.buttonURL = url;
        return this;
    }
    ;
    toJSON() {
        if (!this.componentId && this.buttonStyle !== ButtonStyle.Link)
            throw new Error("DataError: Button does not have it's own custom ID!");
        if (this.componentId && this.buttonStyle === ButtonStyle.Link)
            throw new Error("DataError: Buttons with link cannot have their own ID!");
        return this.buttonStyle === ButtonStyle.Link ? {
            type: ComponentType.Button,
            custom_id: this.componentId,
            label: this.buttonLabel,
            emoji: this.buttonEmoji,
            style: this.buttonStyle,
            url: this.buttonURL,
        } : {
            type: ComponentType.Button,
            custom_id: this.componentId,
            label: this.buttonLabel,
            emoji: this.buttonEmoji,
            style: this.buttonStyle,
        };
    }
    ;
}
;
export { ButtonComponent };
