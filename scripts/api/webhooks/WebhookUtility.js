import { EmbedUtility } from "../WebhookAPI";
import { WebhookConfiguration } from "./WebhookConfiguration";
/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 * @remarks To send webhook, use static method:
 * ```ts
 * WebhookUtility.sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent);
 * ```
 */
class WebhookUtility {
    /**
     * Default properties for webhooks.
     * @readonly
     */
    static configuration = WebhookConfiguration;
    /**
     * Class that allows you to send messages via webhook.
     * @private This class is private.
     * @remarks To send webhook, use static method:
     * ```ts
     * WebhookUtility.sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent);
     * ```
     */
    constructor() { }
    ;
    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Method does not return anything.
     */
    static async sendWebhook(webhookUri, { content = "", embeds = [] }) {
        const webhookContent = {
            content,
            embeds: embeds.map((embed) => embed instanceof EmbedUtility ? embed.toJSON() : embed),
        };
        try {
            const { http, HttpHeader, HttpRequestMethod, HttpRequest } = await import("@minecraft/server-net");
            await http.request(new HttpRequest(webhookUri)
                .setBody(JSON.stringify(webhookContent))
                .setHeaders([
                new HttpHeader("Content-Type", "application/json"),
                new HttpHeader("Accept", "application/json")
            ])
                .setMethod(HttpRequestMethod.POST));
        }
        catch { }
        ;
    }
    ;
}
;
export { WebhookUtility };
