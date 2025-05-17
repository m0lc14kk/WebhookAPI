import { Component } from "../../Component";
import { ComponentType } from "../../constants/ComponentType";

class TextDisplayComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.TEXT_DISPLAY;
    private content: string = ""

    public setContent(content: string | string[]): this {
        this.content = Array.isArray(content) ? content.join("\n") : content
        return this
    }

    public toJSON(): object {
        return {
            type: TextDisplayComponent.type,
            content: this.content
        }
    }
}

export { TextDisplayComponent }