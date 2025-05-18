/**
 * Structure of an emoji.
 */
type ComponentEmojiType =
    | {
        /**
         * Identifier of an emoji.
         * @remarks One of `id` and `name` must be defined.
         */
        id?: string

        /**
         * Name of an emoji.
         * @remarks One of `id` and `name` must be defined.
         */
        name: string
    }
    | {
        /**
         * Identifier of an emoji.
         * @remarks One of `id` and `name` must be defined.
         */
        id: string

        /**
         * Name of an emoji.
         * @remarks One of `id` and `name` must be defined.
         */
        name?: string
    }

export type { ComponentEmojiType }
