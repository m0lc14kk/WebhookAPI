import { WebhookMessageType } from "../webhooks/constants/WebhookMessageType"
import type { IWebhookNewMessageStructure } from "../webhooks/interfaces/IWebhookNewMessageStructure"
import type { IWebhookOldMessageStructure } from "../webhooks/interfaces/IWebhookOldMessageStructure"

/**
 * A class to validate Discord messages, that will be send soon.
 */
class DiscordMessageValidator {
    private constructor() {}

    /**
     * Validates Discord message.
     * @param message Message to validate.
     * @throws Throws an error, if there is something invalid in this message.
     */
    public static validateMessage(message: Partial<IWebhookOldMessageStructure | IWebhookNewMessageStructure>): void {
        if (message.avatar_url !== undefined && typeof message.avatar_url !== "string") throw new Error("DataError: You can provide avatar URL only as a string.")
        if (message.username !== undefined && typeof message.username !== "string") throw new Error("DataError: You can provide avatar URL only as a string.")
        if (message.tts !== undefined && typeof message.tts !== "boolean") throw new Error("DataError: You can provide TTS only as a boolean.")
        if (message.thread_name !== undefined && typeof message.thread_name !== "string") throw new Error("DataError: You can provide thread name only as a string.")

        if (message.version === WebhookMessageType.OLD) {
            if (message.content && message.content.length > 2000) throw new Error("DataError: Content of a message cannot exceed 2000 characters.")
            if (message.embeds && message.embeds.length > 10) throw new Error("DataError: You can send up to 10 embeds in a message.")
            if (message.components && message.components.length > 5) throw new Error("DataError: You can send up to 5 interactions in a model of an old message.")
        } else if (message.version === WebhookMessageType.NEW) {
            if (!message.components || message.components.length === 0) throw new Error("DataError: You must provide at least 1 component to send a message.")
        } else {
            throw new TypeError("TypeError: Invalid message version.")
        }
    }
}

export { DiscordMessageValidator }
