import type { ComponentEmojiType } from "./ComponentEmojiType"

/**
 * Structure of an animated emoji.
 */
type ComponentEmojiAnimatedType = ComponentEmojiType & {
    /**
     * If an emoji will be animated.
     */
    animated?: boolean
}

export type { ComponentEmojiAnimatedType }
