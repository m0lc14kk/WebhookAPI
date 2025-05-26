import { MAX_CONTENT_LENGTH } from "../../../globals"
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
        const finalContent: string = Array.isArray(content) ? content.join("\n") : content
        if (finalContent.length > MAX_CONTENT_LENGTH) throw new RangeError(`DataError: Content of a text display component cannot be longer than ${MAX_CONTENT_LENGTH} characters.`)
        this.content = finalContent
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (this.content === "") throw new Error("DataError: You must provide a content to TextDisplayComponent.")

        return {
            type: TextDisplayComponent.type,
            content: this.content,
        }
    }
}

export { TextDisplayComponent }
