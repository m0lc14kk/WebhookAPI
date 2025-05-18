import { ComponentEmojiType } from "../../../types/ComponentEmojiType"

/**
 * Structure of an answer in a poll.
 */
interface IPollAnswerStructure {
    /**
     * Text of an answer.
     */
    text: string

    /**
     * Optional emoji of an answer.
     */
    emoji?: string | ComponentEmojiType
}

export type { IPollAnswerStructure }
