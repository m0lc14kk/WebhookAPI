import type { WebhookTypeUnion } from "./types/WebhookTypeUnion"
import type { IWebhookEditStructure } from "./interfaces/IWebhookEditStructure"
import type { IWebhookOldMessageStructure } from "./interfaces/IWebhookOldMessageStructure"
import type { IWebhookNewMessageStructure } from "./interfaces/IWebhookNewMessageStructure"
import type { IWebhookMessageMethodQueryOptionsStructure } from "./interfaces/IWebhookMessageMethodQueryOptionsStructure"
import type { IWebhookDiscordMessageStructure } from "./interfaces/IWebhookDiscordMessageStructure"
import { WebhookMessageType } from "./constants/WebhookMessageType"
import { SnowflakeValidator } from "../validators/SnowflakeValidator"
import { Component } from "../components/Component"
import { EmbedBuilder } from "../components/old/embeds/EmbedBuilder"
import { ActionRowComponent } from "../components/new/grouping/ActionRowComponent"
import { DiscordWebhookEndPointValidator } from "../validators/DiscordWebhookEndPointValidator"
import { DiscordMessageValidator } from "../validators/DiscordMessageValidator"

/**
 * Discord Webhook instance that is connecting to REST API via `@minecraft/server-net` library.
 */
class Webhook {
    /**
     * URL of a Discord webhook.
     * @remarks This URL contains essential information. It is not recommended to provide it directly.
     * @readonly This property is in read-only mode.
     */
    public readonly webhookUrl: string

    /**
     * Creates a wrapper instance of a Discord webhook.
     * @param webhookUrl URL of a webhook, that includes his ID and token.
     */
    public constructor(webhookUrl: string) {
        if (!DiscordWebhookEndPointValidator.isDiscordWebhookEndPoint(webhookUrl)) {
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
     * @throws Throws an error, if one of provided options is invalid.
     */
    public async editWebhook({ name, avatar }: Readonly<IWebhookEditStructure>): Promise<boolean> {
        if (name && typeof name !== "string") throw new Error("DataError: Webhook's make has to be a string.")
        if (avatar && typeof avatar !== "string") throw new Error("DataError: Webhook's avatar has to be a string in Base64 format.")

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
     * @throws Throws an error, if one of provided argument's properties is invalid.
     */
    public async sendMessage(
        message: IWebhookOldMessageStructure | IWebhookNewMessageStructure,
        options?: IWebhookMessageMethodQueryOptionsStructure | null,
    ): Promise<IWebhookDiscordMessageStructure | true | null> {
        DiscordMessageValidator.validateMessage(message)

        let finalUrl: string = this.webhookUrl
        const params: string[] = []

        const messageOptions: IWebhookMessageMethodQueryOptionsStructure = {
            withComponents: (message.components?.length ?? 0) > 0 || options?.withComponents,
            ...options,
        }

        DiscordMessageValidator.validateDiscordMessageOptions(messageOptions)

        if (messageOptions?.wait) {
            params.push("wait=true")
        }

        if (messageOptions?.withComponents) {
            params.push("with_components=true")
        }

        if (messageOptions?.threadId) {
            params.push(`thread_id=${messageOptions.threadId}`)
        }

        if (params.length > 0) {
            finalUrl += (finalUrl.includes("?") ? "&" : "?") + params.join("&")
        }

        const finalObject = {
            ...message,
            flags: message.flags?.reduce((a: number, b: number) => a + b) || 0 + message.version === WebhookMessageType.NEW ? 32768 : 0,
            ...(message.version === WebhookMessageType.NEW
                ? {
                      ...message,
                      components: message.components.map((component: Component) => component.toJSON()),
                  }
                : {
                      ...message,
                      embeds: (message.embeds || []).map((embed: EmbedBuilder) => embed.toJSON()),
                      components: (message.components || []).map((actionRow: ActionRowComponent) => actionRow.toJSON()),
                      poll: message.poll ? message.poll.toJSON() : undefined,
                      content: message.content || "",
                  }),
        }

        try {
            const { http, HttpRequest, HttpRequestMethod, HttpHeader } = await import("@minecraft/server-net")
            const response = await http.request(
                new HttpRequest(finalUrl)
                    .setMethod(HttpRequestMethod.Post)
                    .setHeaders([new HttpHeader("Content-Type", "application/json")])
                    .setBody(JSON.stringify(finalObject)),
            )

            if (response.status === 200) return JSON.parse(response.body)
            if (response.status === 204) return true
            return null
        } catch {
            return null
        }
    }

    /**
     * Gets a message based on it's identifier.
     * @param messageId Identifier of a message.
     * @param threadId Optional identifier of a thread.
     * @return Returns a message object if it exists, unless `null`.
     * @throws Throws an error, if one of identifiers is invalid.
     */
    public async getMessage(messageId: string, threadId?: string): Promise<IWebhookDiscordMessageStructure | null> {
        if (typeof messageId !== "string") throw new TypeError("TypeError: You have to provide message's identifier as a Snowflake.")
        if (SnowflakeValidator.isSnowflake(messageId)) throw new Error("DataError: Invalid message's identifier.")

        let finalUrl: string = `${this.webhookUrl}/messages/${messageId}`
        if (threadId) {
            if (typeof threadId !== "string") throw new TypeError("TypeError: You have to provide thread's identifier as a Snowflake.")
            if (SnowflakeValidator.isSnowflake(threadId)) throw new Error("DataError: Invalid thread's identifier.")
            finalUrl += `?thread_id=${threadId}`
        }

        try {
            const { http } = await import("@minecraft/server-net")
            const response = await http.get(finalUrl)

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
     * @throws Throws an error, if one of provided argument's properties is invalid.
     */
    public async editMessage(
        messageId: string,
        message: Partial<IWebhookNewMessageStructure | IWebhookOldMessageStructure> & { version: WebhookMessageType },
        options?: Omit<IWebhookMessageMethodQueryOptionsStructure, "wait">,
    ): Promise<IWebhookDiscordMessageStructure | null> {
        DiscordMessageValidator.validateMessage(message)

        if (typeof messageId !== "string") throw new TypeError("TypeError: You have to provide message's identifier as a Snowflake.")
        if (SnowflakeValidator.isSnowflake(messageId)) throw new Error("DataError: Invalid message's identifier.")

        let finalUrl: string = `${this.webhookUrl}/messages/${messageId}`
        const params: string[] = []

        const messageOptions: Omit<IWebhookMessageMethodQueryOptionsStructure, "wait"> = {
            withComponents: (message.components?.length ?? 0) > 0 || options?.withComponents,
            ...options,
        }

        DiscordMessageValidator.validateDiscordMessageOptions(messageOptions, false)

        if (messageOptions.withComponents) {
            params.push("with_components=true")
        }

        if (messageOptions.threadId) {
            params.push(`thread_id=${messageOptions.threadId}`)
        }

        if (params.length > 0) {
            finalUrl += `?${params.join("&")}`
        }

        const finalObject = {
            ...message,
            flags: message.flags?.reduce((a: number, b: number) => a + b) || 0 + message.version === WebhookMessageType.NEW ? 32768 : 0,
            ...(message.version === WebhookMessageType.NEW
                ? {
                      ...message,
                      components: (message?.components || [])?.map((component: Component) => component.toJSON()),
                  }
                : {
                      ...message,
                      embeds: (message.embeds || []).map((embed: EmbedBuilder) => embed.toJSON()),
                      components: (message.components || []).map((actionRow: ActionRowComponent) => actionRow.toJSON()),
                      poll: message.poll ? message.poll.toJSON() : undefined,
                      content: message.content || "",
                  }),
        }

        try {
            const { http, HttpRequest, HttpRequestMethod, HttpHeader } = await import("@minecraft/server-net")
            const response = await http.request(
                new HttpRequest(finalUrl)
                    .setMethod(HttpRequestMethod.Post)
                    .setHeaders([new HttpHeader("Content-Type", "application/json")])
                    .setBody(JSON.stringify(finalObject)),
            )

            if (response.status === 200) return JSON.parse(response.body)
            return null
        } catch {
            return null
        }
    }

    /**
     * Deletes a message from channel.
     * @param messageId Identifier of a message.
     * @param threadId Optional thread's identifier.
     * @returns Returns a boolean based on if message was correctly deleted from a channel.
     * @throws Throws an error, if one of identifiers is invalid.
     */
    public async deleteMessage(messageId: string, threadId?: string): Promise<boolean> {
        if (typeof messageId !== "string") throw new TypeError("TypeError: You have to provide message's identifier as a Snowflake.")
        if (SnowflakeValidator.isSnowflake(messageId)) throw new Error("DataError: Invalid message's identifier.")

        let finalUrl: string = `${this.webhookUrl}/messages/${messageId}`
        if (threadId) {
            if (typeof threadId !== "string") throw new TypeError("TypeError: You have to provide thread's identifier as a Snowflake.")
            if (SnowflakeValidator.isSnowflake(threadId)) throw new Error("DataError: Invalid thread's identifier.")
            finalUrl += `?thread_id=${threadId}`
        }

        try {
            const { http, HttpRequest, HttpRequestMethod } = await import("@minecraft/server-net")
            await http.request(new HttpRequest(finalUrl).setMethod(HttpRequestMethod.Delete))
            return true
        } catch {
            return false
        }
    }
}

export { Webhook }
