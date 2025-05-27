import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"

class FileComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.FILE
    private fileUrl: string | null = null
    private spolier: boolean = false

    /**
     * Sets an URL to a file.
     * @param fileUrl URL to a file.
     * @returns Edited instance.
     */
    public setFileUrl(fileUrl: string): this {
        if (typeof fileUrl !== "string") throw new TypeError("TypeError: File's URL must be a string.")
        this.fileUrl = fileUrl
        return this
    }

    /**
     * Sets a spoiler on a file.
     * @param spoiler Spoiler status.
     * @returns Edited instance.
     */
    public setSpoiler(spoiler: boolean): this {
        if (typeof spoiler !== "boolean") throw new TypeError("TypeError: File's spolier must be a boolean.")
        this.spolier = spoiler
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
     * @throws Throws an error if component is invalid.
     */
    public toJSON(): object {
        if (this.fileUrl === null) throw new Error("DataError: You must provide file's URL to create a file component.")

        return {
            type: FileComponent.type,
            file: {
                url: this.fileUrl,
            },
            spoiler: this.spolier,
        }
    }
}

export { FileComponent }
