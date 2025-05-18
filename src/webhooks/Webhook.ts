import type { WebhookTypeUnion } from "./types/WebhookTypeUnion"
import type { IWebhookEditStructure } from "./interfaces/IWebhookEditStructure"
import type { IWebhookOldMessageStructure } from "./interfaces/IWebhookOldMessageStructure"
import type { IWebhookNewMessageStructure } from "./interfaces/IWebhookNewMessageStructure"
import type { IWebhookMessageMethodQueryOptionsStructure } from "./interfaces/IWebhookMessageMethodQueryOptionsStructure"
import { WebhookMessageType } from "./constants/WebhookMessageType"
import { SnowflakeValidator } from "../validators/SnowflakeValidator"
import { IWebhookDiscordMessageStructure } from "./interfaces/IWebhookDiscordMessageStructure"

/**
 * Discord Webhook instance that is connecting to REST API via `@minecraft/server-net` library.
 */
class Webhook {
    public static validateUri(webhookUrl: string): boolean {
        return /^https:\/\/(canary\.|ptb\.)?discord\.com\/api\/webhooks\/\d{17,20}\/[A-Za-z0-9_-]{60,70}$/.test(webhookUrl)
    }

    public readonly webhookUrl: string

    /**
     * Creates a wrapper instance of a Discord webhook.
     * @param webhookUrl URL of a webhook, that includes his ID and token.
     */
    public constructor(webhookUrl: string) {
        if (Webhook.validateUri(webhookUrl)) {
            throw new Error("DataError: Invalid webhook's URL has been provided.")
        }

        this.webhookUrl = webhookUrl
    }

    /**
     * Returns information about webhook.
     * @returns Information about webhook.
     */
    public async getWebhook<T extends WebhookTypeUnion>(): Promise<T | null> {
        try {
            const { http } = await import("@minecraft/server-net")
            const request = await http.get(this.webhookUrl)
            if (request.status === 200) return JSON.parse(request.body)
            return null
        } catch {
            return null
        }
    }

    /**
     * Edit display of a webhook on Discord.
     * @param options New properties of a webhook.
     * @returns Return a boolean, based on if webhook was correctly updated.
     */
    public async editWebhook({ name, avatar }: Readonly<IWebhookEditStructure>): Promise<boolean> {
        try {
            const { http, HttpRequest, HttpRequestMethod, HttpHeader } = await import("@minecraft/server-net")
            await http.request(
                new HttpRequest(this.webhookUrl)
                    // to-do: change method to PATCH after an update
                    .setMethod(HttpRequestMethod.Put)
                    .setHeaders([new HttpHeader("Content-Type", "application/json")])
                    .setBody(
                        JSON.stringify({
                            name,
                            avatar,
                        }),
                    ),
            )

            return true
        } catch {
            return false
        }
    }

    /**
     * Deletes a webhook from Discord.
     * @returns Returns a boolean based on if webhook was correctly deleted.
     * @remarks You shouldn't use any methods of this webhook after calling this method.
     */
    public async deleteWebhook(): Promise<boolean> {
        try {
            const { http, HttpRequest, HttpRequestMethod } = await import("@minecraft/server-net")
            await http.request(new HttpRequest(this.webhookUrl).setMethod(HttpRequestMethod.Delete))
            return true
        } catch {
            return false
        }
    }

    /**
     * Sends a message to Discord channel.
     * @param message Content of a message.
     * @param options Options of a message.
     * @returns Returns a message object if it was correctly sent, unless `null`.
     */
    public async sendMessage(message: IWebhookOldMessageStructure | IWebhookNewMessageStructure, options?: IWebhookMessageMethodQueryOptionsStructure | null) {
        const finalUrl: URL = new URL(this.webhookUrl)
        if (options?.wait) finalUrl.searchParams.set("with", "true")
        if (options?.withComponent) finalUrl.searchParams.set("with_components", "true")
        if (options?.threadId) {
            if (SnowflakeValidator.isSnowflake(options.threadId)) throw new Error("DataError: Invalid thread's identifier.")
            finalUrl.searchParams.set("thread_id", options.threadId)
        }

        if (message.version === WebhookMessageType.OLD) {
            if (message.content && message.content.length > 2000) throw new Error("DataError: Content of a message cannot exceed 2000 characters.")
            if (message.embeds && message.embeds.length > 10) throw new Error("DataError: You can send up to 10 embeds in a message.")
        } else {
            if (message.components.length === 0) throw new Error("DataError: You must provide at least 1 component to send a message.")
        }
    }

    /**
     * Gets a message based on it's identifier.
     * @param messageId Identifier of a message.
     * @param threadId Optional identifier of a thread.
     * @return Returns a message object if it exists, unless `null`.
     */
    public async getMessage(messageId: string, threadId?: string): Promise<IWebhookDiscordMessageStructure | null> {
        if (!SnowflakeValidator.isSnowflake(messageId)) throw new Error("DataError: Invalid message's identifier.")
        const finalUrl: URL = new URL(`${this.webhookUrl}/messages/${messageId}`)

        if (threadId) {
            if (!SnowflakeValidator.isSnowflake(threadId)) throw new Error("DataError: Invalid message's identifier.")
            finalUrl.searchParams.set("thread_id", threadId)
        }

        try {
            const { http } = await import("@minecraft/server-net")
            const response = await http.get(finalUrl.toString())

            if (response.status === 200) return JSON.parse(response.body)
            return null
        } catch {
            return null
        }
    }

    /**
     * Edits a message based on it's identifier.
     * @param messageId Identifier of a message.
     * @param message New content of a message.
     * @param options Options of a message content.
     * @returns Returns a boolean based on if message was correctly edited.
     * @remarks If you were using new components system, you have to keep the format in the new content also.
     */
    public async editMessage() {}

    /**
     * Deletes a message from channel.
     * @param messageId Identifier of a message.
     * @param threadId Optional thread's identifier.
     * @returns Returns a boolean based on if message was correctly deleted from a channel.
     */
    public async deleteMessage(messageId: string, threadId?: string): Promise<boolean> {
        if (!SnowflakeValidator.isSnowflake(messageId)) throw new Error("DataError: Invalid message's identifier.")
        const finalUrl: URL = new URL(`${this.webhookUrl}/messages/${messageId}`)
        if (threadId) {
            if (!SnowflakeValidator.isSnowflake(threadId)) throw new Error("DataError: Invalid message's identifier.")
            finalUrl.searchParams.set("thread_id", threadId)
        }

        try {
            const { http, HttpRequest, HttpRequestMethod } = await import("@minecraft/server-net")
            await http.request(new HttpRequest(finalUrl.toString()).setMethod(HttpRequestMethod.Delete))
            return true
        } catch {
            return false
        }
    }
}

export { Webhook }
