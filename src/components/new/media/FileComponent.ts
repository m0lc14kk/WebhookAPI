import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"

class FileComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.FILE
    private fileUrl: string | null = null
    private spolier: boolean = false

    public setFileUrl(fileUrl: string): this {
        this.fileUrl = fileUrl
        return this
    }

    public setSpoiler(spoiler: boolean): this {
        this.spolier = spoiler
        return this
    }

    /**
     * Converts instance to JSON object.
     * @return JSON object, which is ready to be sent to a Discord API.
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
