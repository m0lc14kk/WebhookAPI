import type { WebhookTypeUnion } from "./types/WebhookTypeUnion"
import type { IWebhookEditStructure } from "./interfaces/IWebhookEditStructure"
import type { IWebhookOldMessageStructure } from "./interfaces/IWebhookOldMessageStructure"
import type { IWebhookNewMessageStructure } from "./interfaces/IWebhookNewMessageStructure"
import type { IWebhookMessageMethodQueryOptionsStructure } from "./interfaces/IWebhookMessageMethodQueryOptionsStructure"
import { WebhookMessageType } from "./constants/WebhookMessageType"

class Webhook {
    public static validateUri(webhookUrl: string): boolean {
        return /^https:\/\/(canary\.|ptb\.)?discord\.com\/api\/webhooks\/\d{17,20}\/[A-Za-z0-9_-]{60,70}$/.test(webhookUrl)
    }

    public webhookUrl: string

    public constructor(webhookUrl: string) {
        if (Webhook.validateUri(webhookUrl)) {
            throw new Error("DataError: Invalid webhook's URL has been provided.")
        }

        this.webhookUrl = webhookUrl
    }

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

    public async deleteWebhook(): Promise<boolean> {
        try {
            const { http, HttpRequest, HttpRequestMethod } = await import("@minecraft/server-net")
            await http.request(new HttpRequest(this.webhookUrl).setMethod(HttpRequestMethod.Delete))
            return true
        } catch {
            return false
        }
    }

    public async sendMessage(message: IWebhookOldMessageStructure | IWebhookNewMessageStructure, options: IWebhookMessageMethodQueryOptionsStructure) {
        const finalUrl: URL = new URL(this.webhookUrl)
        if (options.wait) finalUrl.searchParams.set("with", "true")
        if (options.withComponent) finalUrl.searchParams.set("with_components", "true")
        if (options.threadId) finalUrl.searchParams.set("thread_id", options.threadId)

        if (message.version === WebhookMessageType.OLD) {
            if (message.content && message.content.length > 2000) throw new Error("DataError: Content of a message cannot exceed 2000 characters.")
            if (message.embeds && message.embeds.length > 10) throw new Error("DataError: You can send up to 10 embeds in a message.")
        } else {
            if (message.components.length === 0) throw new Error("DataError: You must provide at least 1 component to send a message.")
        }
    }

    public async getMessage() {}

    public async editMessage() {}

    public async deleteMessage() {}
}

export { Webhook }
