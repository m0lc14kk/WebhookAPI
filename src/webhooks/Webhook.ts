import { http, HttpResponse } from "@minecraft/server-net"
import type { WebhookTypeUnion } from "./types/WebhookTypeUnion"

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

    public async editWebhook() {}

    public async deleteWebhook() {}

    public async sendMessage() {}

    public async getMessage() {}

    public async editMessage() {}

    public async deleteMessage() {}
}

export { Webhook }
