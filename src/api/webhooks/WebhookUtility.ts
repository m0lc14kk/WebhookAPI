import { IWebhookContent } from "./interfaces/IWebhookContent";
import { EmbedUtility, IRawEmbedUtility } from "../WebhookAPI";

/**
 * Class that allows you to send messages via webhook.
 * @private This class is private.
 */
class WebhookUtility {
    private constructor() {};

    /**
     * Sends a messages via webhook to a channel.
     * @param webhookUri Link to a webhook.
     * @param messageContent Content of a message.
     * @returns Returns a boolean, if messages was successfully sent.
     */
    public static async sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent): Promise<boolean> {
        try {
            const { http, HttpResponse, HttpHeader, HttpRequestMethod, HttpRequest } = await import("@minecraft/server-net");

            const requestResponse = await http.request(
                new HttpRequest(webhookUri)
                    .setBody(JSON.stringify({
                        content,
                        embeds: embeds.map((embed: EmbedUtility | IRawEmbedUtility) => embed instanceof EmbedUtility ? embed.toJSON() : embed),
                    }))

                    .setHeaders([
                        new HttpHeader("Content-Type", "application/json"),
                        new HttpHeader("Accept", "application/json")
                    ])

                    .setMethod(HttpRequestMethod.Post)
            );

            return requestResponse.status.toString().startsWith("2");
        } catch {
            return false;
        };
    };
};

export { WebhookUtility, IWebhookContent };