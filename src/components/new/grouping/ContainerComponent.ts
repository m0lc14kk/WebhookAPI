import { Component } from "../../Component"
import { ComponentType } from "../../constants/ComponentType"
import { ContainerComponentTypes } from "./types/ContainerComponentTypes"

const MAX_COLOR_NUMBER: Readonly<number> = Math.pow(256, 3) - 1

class ContainerComponent extends Component {
    public static override readonly type: ComponentType = ComponentType.CONTAINER
    private components: ContainerComponentTypes[] = []
    private accentColor: number = 0x000000
    private spoiler: boolean = false

    public setComponents(...components: ContainerComponentTypes[]): this {
        this.components = components
        return this
    }

    public addComponents(...components: ContainerComponentTypes[]): this {
        this.components.push(...components)
        return this
    }

    public setAccentColor(accentColor: string | number): this {
        if (typeof accentColor == "string") {
            if (!accentColor.startsWith("#") && accentColor.length !== 7) throw new Error("DataError: Invalid color HEX.")
            this.accentColor = Number(`0x${accentColor.slice(1)}`)
            return this
        }

        if (accentColor > MAX_COLOR_NUMBER || accentColor < 0) throw new Error("DataError: Color is out of bounds.")
        this.accentColor = Math.floor(accentColor)
        return this
    }

    public setSpoiler(spoiler: boolean): this {
        this.spoiler = spoiler
        return this
    }

    public toJSON() {
        return {
            type: ContainerComponent.type,
            accent_color: this.accentColor,
            spoiler: this.spoiler,
            components: this.components.map((component: Component) => component.toJSON()),
        }
    }
}

export { ContainerComponent }
