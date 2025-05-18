import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"

class TextDisplayComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.TEXT_DISPLAY
    private content: string = ""

    /**
     * Sets a markdown content.
     * @param content Markdown content.
     * @returns Edited instance.
     */
    public setContent(content: string | string[]): this {
        this.content = Array.isArray(content) ? content.join("\n") : content
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     */
    public toJSON(): object {
        return {
            type: TextDisplayComponent.type,
            content: this.content,
        }
    }
}

export { TextDisplayComponent }
