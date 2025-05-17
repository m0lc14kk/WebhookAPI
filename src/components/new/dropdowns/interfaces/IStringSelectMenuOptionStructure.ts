import type { ComponentEmojiAnimatedType } from "../../../types/ComponentEmojiAnimatedType"

interface IStringSelectMenuOptionStructure {
    label: string
    value: string
    description: string
    emoji: string | ComponentEmojiAnimatedType
    default?: boolean
}

export type { IStringSelectMenuOptionStructure }