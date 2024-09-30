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
     * @returns Returns an empty result.
     */
    public static async sendWebhook(webhookUri: string, { content = "", embeds = [] }: IWebhookContent): Promise<void> {
        const webhookContent: IWebhookContent = {
            content,
            embeds: embeds.map((embed: EmbedUtility | IRawEmbedUtility) => embed instanceof EmbedUtility ? embed.toJSON() : embed),
        };

        try {
            const { http, HttpResponse, HttpHeader, HttpRequestMethod, HttpRequest } = await import("@minecraft/server-net");

            /**
             * I don't know why this type throws me up an error.
             * Just in case, remove it if it causes some errors.
             */
            // @ts-ignore
            const requestResponse: HttpResponse = await http.request(
                new HttpRequest(webhookUri)
                    .setBody(JSON.stringify(webhookContent))

                    .setHeaders([
                        new HttpHeader("Content-Type", "application/json"),
                        new HttpHeader("Accept", "application/json")
                    ])

                    .setMethod(HttpRequestMethod.Post)
            );
        } catch {};
    };
};

export { WebhookUtility, IWebhookContent };