import { Component } from "../components/Component"
import { ActionRowComponent } from "../components/new/grouping/ActionRowComponent"
import { EmbedBuilder } from "../components/old/embeds/EmbedBuilder"
import { DiscordWebhookEndPointValidator } from "../validators/DiscordWebhookEndPointValidator"
import { SnowflakeValidator } from "../validators/SnowflakeValidator"
import { WebhookMessageType } from "./constants/WebhookMessageType"
import type { IWebhookEditStructure } from "./interfaces/IWebhookEditStructure"
import type { IWebhookMessageMethodQueryOptionsStructure } from "./interfaces/IWebhookMessageMethodQueryOptionsStructure"
import type { IWebhookNewMessageStructure } from "./interfaces/IWebhookNewMessageStructure"
import type { IWebhookOldMessageStructure } from "./interfaces/IWebhookOldMessageStructure"

/**
 * Discord Webhook instance that is connecting to REST API via WebSockets.
 * @remarks This class does not support every route of an API, due to limits with WebSockets. Consider using `Webhook` class if you can.
 */
class WebSocketWebhook {
    private static readonly MESSAGE_FLAG: Readonly<string> = "§w§e§b§h§o§o§k§a§p§i"

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
        if (DiscordWebhookEndPointValidator.isDiscordWebhookEndPoint(webhookUrl)) {
            throw new Error("DataError: Invalid webhook's URL has been provided.")
        }

        this.webhookUrl = webhookUrl
    }

    /**
     * Edit display of a webhook on Discord.
     * @param options New properties of a webhook.
     */
    public async editWebhook({ name, avatar }: Readonly<IWebhookEditStructure>): Promise<void> {
        const stringifiedMessage: string = JSON.stringify({
            url: this.webhookUrl,
            method: "PATCH",
            body: {
                name,
                avatar,
            },
        })

        try {
            const { world } = await import("@minecraft/server")
            world.sendMessage(`${WebSocketWebhook.MESSAGE_FLAG}${stringifiedMessage}`)
        } catch {
            return
        }
    }

    /**
     * Deletes a webhook from Discord.
     * @remarks You shouldn't use any methods of this webhook after calling this method.
     */
    public async deleteWebhook(): Promise<void> {
        const stringifiedMessage: string = JSON.stringify({
            url: this.webhookUrl,
            method: "DELETE",
        })

        try {
            const { world } = await import("@minecraft/server")
            world.sendMessage(`${WebSocketWebhook.MESSAGE_FLAG}${stringifiedMessage}`)
        } catch {
            return
        }
    }

    /**
     * Sends a message to Discord channel.
     * @param message Content of a message.
     * @param options Options of a message.
     */
    public async sendMessage(message: IWebhookOldMessageStructure | IWebhookNewMessageStructure, options?: IWebhookMessageMethodQueryOptionsStructure | null): Promise<void> {
        const finalUrl: URL = new URL(this.webhookUrl)
        if (options?.wait) finalUrl.searchParams.set("wait", "true")
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

        const stringifiedMessage: string = JSON.stringify({
            url: this.webhookUrl,
            method: "POST",
            body:
                message.version === WebhookMessageType.NEW
                    ? JSON.stringify({
                          ...message,
                          components: message.components.map((component: Component) => component.toJSON()),
                      })
                    : JSON.stringify({
                          ...message,
                          embeds: (message.embeds || []).map((embed: EmbedBuilder) => embed.toJSON()),
                          components: (message.components || []).map((actionRow: ActionRowComponent) => actionRow.toJSON()),
                          poll: message.poll ? message.poll.toJSON() : undefined,
                          content: message.content || "",
                      }),
        })

        try {
            const { world } = await import("@minecraft/server")
            world.sendMessage(`${WebSocketWebhook.MESSAGE_FLAG}${stringifiedMessage}`)
        } catch {
            return
        }
    }

    /**
     * Edits a message based on it's identifier.
     * @param messageId Identifier of a message.
     * @param message New content of a message.
     * @param options Options of a message content.
     * @remarks If you were using new components system, you have to keep the format in the new content also.
     */
    public async editMessage(
        messageId: string,
        message: Partial<IWebhookNewMessageStructure | IWebhookOldMessageStructure> & { version: WebhookMessageType },
        options?: Omit<IWebhookMessageMethodQueryOptionsStructure, "wait">,
    ): Promise<void> {
        const finalUrl: URL = new URL(`${this.webhookUrl}/messages/${messageId}`)
        if (options?.withComponent) finalUrl.searchParams.set("with_components", "true")
        if (options?.threadId) {
            if (SnowflakeValidator.isSnowflake(options.threadId)) throw new Error("DataError: Invalid thread's identifier.")
            finalUrl.searchParams.set("thread_id", options.threadId)
        }

        if (message.version === WebhookMessageType.OLD) {
            if (message.content && message.content?.length > 2000) throw new Error("DataError: Content of a message cannot exceed 2000 characters.")
            if (message.embeds && message.embeds?.length > 10) throw new Error("DataError: You can send up to 10 embeds in a message.")
        } else {
            if (message.components?.length === 0) throw new Error("DataError: You must provide at least 1 component to send a message.")
        }

        const stringifiedMessage: string = JSON.stringify({
            url: finalUrl.toString(),
            method: "DELETE",
            body:
                message.version === WebhookMessageType.NEW
                    ? JSON.stringify({
                          ...message,
                          components: (message.components || []).map((component: Component) => component.toJSON()),
                      })
                    : JSON.stringify({
                          ...message,
                          embeds: (message.embeds || []).map((embed: EmbedBuilder) => embed.toJSON()),
                          components: (message.components || []).map((actionRow: ActionRowComponent) => actionRow.toJSON()),
                          poll: message.poll ? message.poll.toJSON() : undefined,
                          content: message.content || "",
                      }),
        })

        try {
            const { world } = await import("@minecraft/server")
            world.sendMessage(`${WebSocketWebhook.MESSAGE_FLAG}${stringifiedMessage}`)
        } catch {
            return
        }
    }

    /**
     * Deletes a message from channel.
     * @param messageId Identifier of a message.
     * @param threadId Optional thread's identifier.
     */
    public async deleteMessage(messageId: string, threadId?: string): Promise<void> {
        if (!SnowflakeValidator.isSnowflake(messageId)) throw new Error("DataError: Invalid message's identifier.")
        const finalUrl: URL = new URL(`${this.webhookUrl}/messages/${messageId}`)
        if (threadId) {
            if (!SnowflakeValidator.isSnowflake(threadId)) throw new Error("DataError: Invalid message's identifier.")
            finalUrl.searchParams.set("thread_id", threadId)
        }

        const stringifiedMessage: string = JSON.stringify({
            url: finalUrl.toString(),
            method: "DELETE",
        })

        try {
            const { world } = await import("@minecraft/server")
            world.sendMessage(`${WebSocketWebhook.MESSAGE_FLAG}${stringifiedMessage}`)
        } catch {
            return
        }
    }
}

export { WebSocketWebhook }
