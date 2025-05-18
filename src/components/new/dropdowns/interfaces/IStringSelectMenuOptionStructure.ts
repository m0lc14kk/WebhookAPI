import type { ComponentEmojiAnimatedType } from "../../../types/ComponentEmojiAnimatedType"

/**
 * Structure of an option in string select menu.
 */
interface IStringSelectMenuOptionStructure {
    /**
     * Label of an option.
     */
    label: string

    /**
     * Value of an option.
     */
    value: string

    /**
     * Description of an option.
     */
    description: string

    /**
     * Emoji of an option.
     */
    emoji: string | ComponentEmojiAnimatedType

    /**
     * If option should be toggled on default.
     */
    default?: boolean
}

export type { IStringSelectMenuOptionStructure }
