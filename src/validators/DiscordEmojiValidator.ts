import { ComponentEmojiType } from "../components/types/ComponentEmojiType";
import { SnowflakeValidator } from "./SnowflakeValidator";

class DiscordEmojiValidator {
    private constructor() {}

    public static validateEmoji(emoji: string | ComponentEmojiType): emoji is string | ComponentEmojiType {
        if (typeof emoji === "string") {
            return true
        } else if (typeof emoji === "object") {
            if (!emoji.name && !emoji.id) throw new Error("DataError: You have to provide an identifier or a name of an emoji.")
            if (emoji.id && !SnowflakeValidator.isSnowflake(emoji.id)) throw new Error("DataError: Invalid emoji's identifier.")
        }
        
        throw new TypeError("TypeError: Invalid emoji type.")
    }
}

export { DiscordEmojiValidator }