import { ComponentType } from "./types/ComponentType"

abstract class Component {
    public static type: ComponentType
    public abstract toJSON(): object
}

export { Component }
