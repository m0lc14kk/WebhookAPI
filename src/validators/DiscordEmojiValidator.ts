import type { ComponentEmojiAnimatedType } from "../components/types/ComponentEmojiAnimatedType"
import { SnowflakeValidator } from "./SnowflakeValidator"

/**
 * A class to validate Discord emojis.
 */
class DiscordEmojiValidator {
    private constructor() {}

    /**
     * Validates Discord message.
     * @param emoji Emoji to validate.
     * @throws Throws an error, if there is something invalid in this emoji.
     */
    public static validateEmoji(emoji: string | ComponentEmojiAnimatedType): void {
        if (typeof emoji === "string") {
            return
        } else if (typeof emoji === "object") {
            if (!emoji.name && !emoji.id) throw new Error("DataError: You have to provide an identifier or a name of an emoji.")
            if (emoji.id && !SnowflakeValidator.isSnowflake(emoji.id)) throw new Error("DataError: Invalid emoji's identifier.")
            if (typeof (emoji.animated ?? false) !== "boolean") throw new TypeError("TypeError: Invalid emoji's animation state.")
        }

        throw new TypeError("TypeError: Invalid emoji type.")
    }
}

export { DiscordEmojiValidator }
