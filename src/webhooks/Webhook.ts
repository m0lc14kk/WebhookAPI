import { http, HttpHeader, HttpRequest, HttpRequestMethod, HttpResponse } from "@minecraft/server-net"
import type { WebhookTypeUnion } from "./types/WebhookTypeUnion"
import { IWebhookEditStructure } from "./interfaces/IWebhookEditStructure"

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
            const request: HttpResponse = await http.get(this.webhookUrl)
            if (request.status === 200) return JSON.parse(request.body)
            return null
        } catch {
            return null
        }
    }

    public async editWebhook({ name, avatar }: Readonly<IWebhookEditStructure>): Promise<boolean> {
        try {
            await http.request(
                new HttpRequest(this.webhookUrl)
                    // to-do: change method to PATCH after an update
                    .setMethod(HttpRequestMethod.Put)
                    .setHeaders([
                        new HttpHeader("Content-Type", "application/json")
                    ])
                    .setBody(JSON.stringify({
                        name, avatar
                    }))
            )

            return true
        } catch {
            return false
        }
    }

    public async deleteWebhook() {}

    public async sendMessage() {}

    public async getMessage() {}

    public async editMessage() {}

    public async deleteMessage() {}
}

export { Webhook }
