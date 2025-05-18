import type { ComponentEmojiType } from "./ComponentEmojiType"

/**
 * Structure of an animated emoji.
 */
type ComponentEmojiAnimatedType = ComponentEmojiType & {
    /**
     * If an emoji will be animated.
     * @default false
     */
    animated?: boolean
}

export type { ComponentEmojiAnimatedType }
